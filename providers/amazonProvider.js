export function buildAmazonSearchUrl(query) {
    const encodedQuery = encodeURIComponent(query);
    return `https://www.amazon.in/s?k=${encodedQuery}`;
}