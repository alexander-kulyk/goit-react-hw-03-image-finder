import { Component } from "react";
import { ButtonLoadMore } from "./ButtonLoadMore/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import { getImages } from "./service/api";



export class App extends Component {

  state={
    inputValue: '',
    images: [],
    loading: false,
    page: 1
  }

  async componentDidUpdate(_,  pS){
    const { inputValue, page } = this.state;

    if (pS.inputValue !== inputValue || pS.page !== page ) {

      try {
        this.setState({loading: true})
        const resp = await getImages(inputValue, page)
        const imagesData = resp.data.hits
        
        
        this.setState({ 
          images: [...pS.images,...imagesData], 
          loading: false, 
        })
        
      } catch (error) {
        console.log(error);
        
      }
      
    }
  }

  handleSubmit =  inputValue =>{
    this.setState({
      inputValue,
      loading: false,
      page: 1
    })
      
  }
  onClickLoadMoreBtn = e =>{
      this.setState(pS =>({
        page: pS.page +1
      }))
  }

  render(){

    const { images, loading } = this.state
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit}/>
        <ImageGallery imgData={images}/>
        {loading && <Loader/>}
        {images.length > 0 && <ButtonLoadMore onClickBtn ={this.onClickLoadMoreBtn} />}
        <Modal/>
      </div>
    );

  }
  
};
