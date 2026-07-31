export function extractPinData() {

    const ogTitle = document
        .querySelector('meta[property="og:title"]')
        ?.getAttribute("content")
        ?.trim() || null;

    const heading = document
        .querySelector("h1")
        ?.textContent
        ?.trim() || null;

    const imageAlt = document
        .querySelector('img[alt]')
        ?.getAttribute("alt")
        ?.trim() || null;

    const ogDescription = document
        .querySelector('meta[property="og:description"]')
        ?.getAttribute("content")
        ?.trim() || null;

    return {
        ogTitle,
        heading,
        imageAlt,
        ogDescription
    };
}