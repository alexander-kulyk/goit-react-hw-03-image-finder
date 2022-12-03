
import PropTypes  from "prop-types";
import {Img, Items} from "./ImageGalleryItem.styled";




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


ImageGalleryItem.propTypes={
    onClickCard: PropTypes.func.isRequired,
    imgData: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          largeImageURL:  PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired,
        }),
    ),
}

            
