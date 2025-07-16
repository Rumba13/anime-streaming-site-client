export const preloadImage = async (imageUrl:string) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = resolve;
        img.onerror = resolve;
    })
}