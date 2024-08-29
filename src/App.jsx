import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App(){

    const [img, setImg]= useState([]);

    const handleSubmit= async(term)=>{
        const resultado= await searchImages(term);
        setImg(resultado);
    }



    return (
        <div>
            <SearchBar enSubmit={handleSubmit} />
            <ImageList images={img} />
        </div>
    )
}

export default App; 