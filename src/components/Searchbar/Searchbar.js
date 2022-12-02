import { Component } from "react";
import { Form, Header, Input, NameBtn, SearchBtn } from "./Searchbar.styled";


export class Searchbar extends Component{
    state = {
        image:''
    }


    handelChangeInput = e =>{
        this.setState({image: e.target.value})
    }
    handleSubmitForm = e =>{
        e.preventDefault();
        // console.log(e.currentTarget.elements.image.value)
        const { image } = this.state;
        const { onSubmit } = this.props;
        onSubmit(image);

    }

    render(){
        const { image } = this.state
        
        return(
            <Header>
                <Form onSubmit={this.handleSubmitForm}>
                    <Input 
                        type='text'
                        name="image"
                        autocomplete="off"
                        placeholder="Search images and photos"

                        value={image}
                        onChange={this.handelChangeInput}
                    />
                    <SearchBtn type="submit">
                        <NameBtn>Search</NameBtn>
                    </SearchBtn>

                </Form>
            </Header>
        )
    }
}