// On GitHub Pages the site lives under /asainzportfolio. Next adds that prefix to <Link> and
// its own files, but not to plain <img>, <video>, or <a> URLs, so wrap files from /public in asset().
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return path.startsWith("/") ? `${BASE_PATH}${path}` : path;
}
