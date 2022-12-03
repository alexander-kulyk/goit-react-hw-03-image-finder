import PropTypes  from "prop-types";


import { SearchBtn } from "components/Searchbar/Searchbar.styled";
// import { Button } from "./Button.styled";



export const ButtonLoadMore = ({onClickBtn, disabled}) =>{
    return(
        <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
            <SearchBtn type="button" disabled={disabled} onClick={onClickBtn}>Load More</SearchBtn>
        </div>
        
    )
}
//<Button type="button" disabled={disabled} onClick={onClickBtn}>Load More</Button>


ButtonLoadMore.propTypes = {
    onClickBtn: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
}