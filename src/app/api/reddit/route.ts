import { NextRequest, NextResponse } from "next/server";

const SUBREDDIT = "Menopause";
const BASE_URL = "https://www.reddit.com";
const USER_AGENT = "asainzportfolio/1.0 (research tool)";

type FeedType = "hot" | "top" | "new" | "search";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = (searchParams.get("type") ?? "hot") as FeedType;
  const limit = Math.min(Number(searchParams.get("limit") ?? 25), 100);
  const after = searchParams.get("after") ?? "";
  const query = searchParams.get("q") ?? "";
  const timeframe = searchParams.get("t") ?? "all"; // used for top

  let endpoint: string;

  switch (type) {
    case "search":
      if (!query) {
        return NextResponse.json(
          { error: "Missing required parameter: q" },
          { status: 400 }
        );
      }
      endpoint = `${BASE_URL}/r/${SUBREDDIT}/search.json?q=${encodeURIComponent(query)}&restrict_sr=1&limit=${limit}${after ? `&after=${after}` : ""}`;
      break;
    case "top":
      endpoint = `${BASE_URL}/r/${SUBREDDIT}/top.json?t=${timeframe}&limit=${limit}${after ? `&after=${after}` : ""}`;
      break;
    case "new":
      endpoint = `${BASE_URL}/r/${SUBREDDIT}/new.json?limit=${limit}${after ? `&after=${after}` : ""}`;
      break;
    case "hot":
    default:
      endpoint = `${BASE_URL}/r/${SUBREDDIT}/hot.json?limit=${limit}${after ? `&after=${after}` : ""}`;
      break;
  }

  try {
    const response = await fetch(endpoint, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "application/json",
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Reddit API error: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    const posts = data?.data?.children?.map(
      (child: {
        data: {
          id: string;
          title: string;
          selftext: string;
          score: number;
          num_comments: number;
          author: string;
          created_utc: number;
          permalink: string;
          url: string;
          is_self: boolean;
          upvote_ratio: number;
          flair_text: string | null;
          thumbnail: string;
        };
      }) => ({
        id: child.data.id,
        title: child.data.title,
        selftext: child.data.selftext,
        score: child.data.score,
        numComments: child.data.num_comments,
        author: child.data.author,
        createdUtc: child.data.created_utc,
        permalink: `https://www.reddit.com${child.data.permalink}`,
        url: child.data.url,
        isSelf: child.data.is_self,
        upvoteRatio: child.data.upvote_ratio,
        flairText: child.data.flair_text,
        thumbnail: child.data.thumbnail,
      })
    ) ?? [];

    return NextResponse.json({
      posts,
      after: data?.data?.after ?? null,
      before: data?.data?.before ?? null,
      count: posts.length,
    });
  } catch (err) {
    console.error("Reddit API fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch from Reddit. Please try again." },
      { status: 500 }
    );
  }
}
