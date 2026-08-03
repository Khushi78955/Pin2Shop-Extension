export function buildSearchQuery(pinData){
    return (
        pinData.ogTitle || pinData.heading || pinData.imageAlt || pinData.ogDescription || ""
    )
}