import axios from "axios"

axios.defaults.baseURL= 'https://pixabay.com/api/'
const API_KEY = '39956878-8b7c9a3843687fe6a4d1d60b3'



    
    
export const getImages = async (query, page) => {
    
    const {data}= await axios.get(`?key=${API_KEY}&q=${query}&page=${page}`, {
        params: {
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
            per_page: 12,
        },
    });
   
    return data
}


