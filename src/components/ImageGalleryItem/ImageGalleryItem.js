// import { Modal } from "components/Modal/Modal"
import {Img, Items} from "./ImageGalleryItem.styled"

// let link = null

// const onClickCard = (largeImageURL) =>{
//     link = largeImageURL
//     console.log(link)
// }

export const ImageGalleryItem = ({ imgData, onClickCard }) =>{
    
    return(
        <>
        {imgData.map(({id,largeImageURL,tags}) =>(
            <Items onClick={()=>onClickCard(largeImageURL, tags)} key={id}>
                <Img src={largeImageURL} alt={tags} width="300"/>
                {/* <Modal/> */}
            </Items> 
        ))}
        </>
        
    );
};




            
