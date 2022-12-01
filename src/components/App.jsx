import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { getImages } from "./service/api";





export class App extends Component {

  state={
    images: null,
  };



  handleSubmit = async inputValue =>{
      try {
        const resp = await getImages(inputValue)
        const imagesData = resp.data
        
        this.setState({ images: imagesData})
        
      } catch (error) {
        
      }
  }



  render(){

    const { images } = this.state
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit}/>
        <ImageGallery imgData={images}/>
      </div>
    );

  }
  
};
