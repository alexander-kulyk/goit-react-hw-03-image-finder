import { Button } from "./Button.styled";



export const ButtonLoadMore = ({onClickBtn, disabled}) =>{
    return(
        <Button type="button" disabled={disabled} onClick={onClickBtn}>Load More</Button>
    )
}