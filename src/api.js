import axios from "axios";


const searchImages = async ()=>{

    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization: "1gZo3K55xI1yegVIKvgQfVhempMFk2aINEph7VEO0Hg"
        },
        params:{
            query: "Cats"
        }
    
    });

    console.log(response.data.results);
    return response.data.results

};


export default searchImages
