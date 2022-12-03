import {Img, Items} from "./ImageGalleryItem.styled"



export const ImageGalleryItem = ({ imgData, onClickCard }) =>{
    
    return(
        <>
        {imgData.map(({id,largeImageURL,tags}) =>(
            <Items onClick={()=>onClickCard(id)} key={id}>
                <Img src={largeImageURL} alt={tags} width="300"/>
            </Items> 
        ))}
        </>
        
    );
};




            
