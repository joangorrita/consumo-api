import axios from "axios";


const searchImages = async (term)=>{

    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization: "Client-ID 1gZo3K55xI1yegVIKvgQfVhempMFk2aINEph7VEO0Hg"
        },
        params:{
            query: term
        }
    
    });

    return response.data.results

};


export default searchImages
