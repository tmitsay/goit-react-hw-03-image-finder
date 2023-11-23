import axios from "axios"


const API_KEY = '39956878-8b7c9a3843687fe6a4d1d60b3'


const imagesApi = axios.create({
    baseURL: 'https://pixabay.com/api/',
    
    params: {
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: 1,
        per_page: 12,
    
    }
})
    
    
export const getImages = async (query, page) => {
    
    const { data } = await imagesApi.get('', {
        params: {
            page,
            q: query,
        },
    });
    console.log(data)
    return data.hits
}