"use client";

import { useState, useCallback } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactBlock from "@/components/ContactBlock";

type FeedType = "hot" | "top" | "new" | "search";

interface RedditPost {
  id: string;
  title: string;
  selftext: string;
  score: number;
  numComments: number;
  author: string;
  createdUtc: number;
  permalink: string;
  upvoteRatio: number;
  flairText: string | null;
}

interface FetchResult {
  posts: RedditPost[];
  after: string | null;
}

const FEED_TABS: { key: FeedType; label: string }[] = [
  { key: "hot", label: "Hot" },
  { key: "top", label: "Top" },
  { key: "new", label: "New" },
  { key: "search", label: "Search" },
];

function timeAgo(utc: number): string {
  const seconds = Math.floor(Date.now() / 1000 - utc);
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

function PostCard({ post }: { post: RedditPost }) {
  const [expanded, setExpanded] = useState(false);
  const hasBody = post.selftext.trim().length > 0;
  const preview = post.selftext.slice(0, 280);

  return (
    <article className="reddit-post-card">
      <div className="reddit-post-meta">
        {post.flairText && (
          <span className="reddit-flair">{post.flairText}</span>
        )}
        <span className="reddit-meta-text">
          u/{post.author} · {timeAgo(post.createdUtc)}
        </span>
      </div>

      <a
        href={post.permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="reddit-post-title"
      >
        {post.title}
      </a>

      {hasBody && (
        <div className="reddit-post-body">
          <p>
            {expanded || post.selftext.length <= 280
              ? post.selftext
              : `${preview}…`}
          </p>
          {post.selftext.length > 280 && (
            <button
              className="reddit-expand-btn"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
      )}

      <div className="reddit-post-stats">
        <span className="reddit-stat">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          {post.score.toLocaleString()}
        </span>
        <span className="reddit-stat">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {post.numComments.toLocaleString()}
        </span>
        <span className="reddit-stat reddit-ratio">
          {Math.round(post.upvoteRatio * 100)}% upvoted
        </span>
      </div>
    </article>
  );
}

export default function RedditResearch() {
  const [activeTab, setActiveTab] = useState<FeedType>("hot");
  const [posts, setPosts] = useState<RedditPost[]>([]);
  const [after, setAfter] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [hasFetched, setHasFetched] = useState(false);

  const fetchPosts = useCallback(
    async (type: FeedType, query: string, afterCursor: string | null, append: boolean) => {
      if (type === "search" && !query) return;

      const params = new URLSearchParams({ type, limit: "25" });
      if (query) params.set("q", query);
      if (afterCursor) params.set("after", afterCursor);

      try {
        const res = await fetch(`/api/reddit?${params}`);
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error ?? "Failed to fetch posts");
        }
        const data: FetchResult = await res.json();
        setPosts((prev) => (append ? [...prev, ...data.posts] : data.posts));
        setAfter(data.after);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      }
    },
    []
  );

  const handleTabChange = async (tab: FeedType) => {
    setActiveTab(tab);
    setPosts([]);
    setAfter(null);
    setError(null);
    setHasFetched(false);
    if (tab !== "search") {
      setLoading(true);
      await fetchPosts(tab, "", null, false);
      setLoading(false);
      setHasFetched(true);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    setSearchQuery(searchInput.trim());
    setPosts([]);
    setAfter(null);
    setError(null);
    setLoading(true);
    await fetchPosts("search", searchInput.trim(), null, false);
    setLoading(false);
    setHasFetched(true);
  };

  const handleLoadMore = async () => {
    if (!after) return;
    setLoadingMore(true);
    await fetchPosts(activeTab, searchQuery, after, true);
    setLoadingMore(false);
  };

  // Auto-load hot on first render
  const [initialized, setInitialized] = useState(false);
  if (!initialized) {
    setInitialized(true);
    setLoading(true);
    fetchPosts("hot", "", null, false).then(() => {
      setLoading(false);
      setHasFetched(true);
    });
  }

  return (
    <>
      <div className="container">
        <div className="page-header">
          <AnimateOnScroll animation="fade-in">
            <div className="label">Research</div>
            <h1 className="page-title">r/Menopause</h1>
            <p className="page-desc">
              Browsing community discussions to surface themes, language, and
              lived experiences that inform research and design decisions.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Tabs */}
        <div className="reddit-tabs">
          {FEED_TABS.map((tab) => (
            <button
              key={tab.key}
              className={`reddit-tab${activeTab === tab.key ? " reddit-tab--active" : ""}`}
              onClick={() => handleTabChange(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        {activeTab === "search" && (
          <form onSubmit={handleSearch} className="reddit-search-form">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search r/Menopause… (e.g. HRT, hot flashes, brain fog)"
              className="reddit-search-input"
            />
            <button type="submit" className="reddit-search-btn">
              Search
            </button>
          </form>
        )}

        {/* Error */}
        {error && (
          <div className="reddit-error">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div className="reddit-loading">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="reddit-skeleton" />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && hasFetched && posts.length === 0 && !error && (
          <div className="reddit-empty">
            {activeTab === "search"
              ? `No posts found for "${searchQuery}". Try a different term.`
              : "No posts found."}
          </div>
        )}

        {/* Posts */}
        {!loading && posts.length > 0 && (
          <>
            <div className="reddit-posts">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {after && (
              <div className="reddit-load-more">
                <button
                  className="reddit-load-more-btn"
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                >
                  {loadingMore ? "Loading…" : "Load more posts"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <ContactBlock />
    </>
  );
}
