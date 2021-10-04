import { useEffect, useState } from "react"

const useImage = () => {
    //state here
    const [images, setImages] = useState([]);

    // use effect here 
    useEffect(() => {
        fetch('/images.JSON')
            .then(response => response.json())
            .then(data => setImages(data))
    }, []);
    return [images];
}

export default useImage;