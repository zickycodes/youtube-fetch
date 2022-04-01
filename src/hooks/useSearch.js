import {useEffect, useState} from "react";
import youtube  from "../apis/youtube";

const useSearch = (term) => {
   const [videos, setVideos] = useState([]);

   useEffect(()=> {
       search(term)
   }, [term])


    const search = async (val) => {
         const res =  await youtube.get("/search", {
             params:{
                 q:val
             }
         })

         setVideos(res.data.items)
    }
    
    return [videos, search]

}

export default useSearch;