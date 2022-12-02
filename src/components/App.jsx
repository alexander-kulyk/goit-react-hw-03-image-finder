import { Component } from "react";
import { ButtonLoadMore } from "./ButtonLoadMore/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Searchbar } from "./Searchbar/Searchbar";
import { getImages } from "./service/api";



export class App extends Component {

  state={
    images: null,
    loading: false,
  };


  handleSubmit = async inputValue =>{
      try {
        this.setState({loading: true})
        const resp = await getImages(inputValue)
        const imagesData = resp.data
        
        this.setState({ images: imagesData, loading: false})
        
      } catch (error) {
        console.log(error);
        
      }
  }
  onClickLoadMoreBtn = e =>{
      console.log(e)
  }

  render(){

    const { images, loading } = this.state
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit}/>
        <ImageGallery imgData={images}/>
        {loading && <Loader/>}
        {images && <ButtonLoadMore onClickBtn ={this.onClickLoadMoreBtn} />}
      </div>
    );

  }
  
};
