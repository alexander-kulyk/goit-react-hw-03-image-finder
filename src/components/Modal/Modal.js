import { Component } from "react"
import { Overlay, ModalBody, Img } from "./Modal.styled"



export class Modal extends Component{

    componentDidMount(){
        window.addEventListener('keydown', this.handeleKeyDown)
    }

    componentWillUnmount(){
        window.removeEventListener('keydown',  this.handeleKeyDown )
    }

    handeleKeyDown = e =>{
        if (e.code === 'Escape') {
            this.props.toggle(); 
        }
    }


    render(){
        const { url, tags } = this.props

        return(
            <Overlay>
                <ModalBody>
                    <Img src={url} alt={tags}/>
                </ModalBody>
            </Overlay>
    
        );
    } 
}