
export const getGifs = async (category) => {
    console.log(`Prueba de GetGifs`);
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Us5ddAo4CXQDQjg5xYxz2uFrH73kiYmw`);
    const { data } = await resp.json();
    const categoria = data.map(img => ({ type: img.type, id: img.id, title: img.title, import_datetime: img.import_datetime, imagen: img.images.original.url, source: img.source }));
    return categoria;
}