const urlFetch = async(url) => {
    console.log("check url", url)
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const urlApi = import.meta.env.Vite_API_URL;

export { urlFetch, urlApi}