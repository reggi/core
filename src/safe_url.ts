/** a wrapper would URL that does not throw when url is invalid */
export function safeURL (urlString: string, base?: string | URL) {
  try {
    const url = new URL(urlString, base);
    return url;
  } catch (_e) {
    return {} as Partial<URL>;
  }
}
