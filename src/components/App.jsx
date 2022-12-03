import { Component } from "react";
import { ButtonLoadMore } from "./ButtonLoadMore/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import { getImages } from "./service/api";



export class App extends Component {

  state = {
    inputValue: '',
    images: [],
    loading: false,
    page: 1,
    imageURL: '',
    tags:'',

    visible: false,
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
    if (inputValue === '') {
      alert('name motherfucker')
      return
    }

    this.setState({
      inputValue,
      loading: false,
      images:[],
      page: 1
    })
      
  }
  onClickLoadMoreBtn = e =>{
      this.setState(pS =>({
        page: pS.page +1
      }))
  }

  onClickCard = (largeImageURL, tags) => {
   
    this.setState({
      imageURL: largeImageURL,
      tags
    })
    this.toggle()
  }

  toggle = () =>{
      this.setState( pS =>({
        visible: !pS.visible
    }))
  }

  render(){

    const { images, loading, imageURL, tags, visible } = this.state
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit}/>
        <ImageGallery imgData={images} onClickCard={this.onClickCard}/>
        {loading && <Loader/>}
        {images.length > 0 && <ButtonLoadMore disabled={loading} onClickBtn ={this.onClickLoadMoreBtn} />}
        {visible && <Modal url ={imageURL}  tags={tags} toggle ={this.toggle}/>}
      </div>
    );

  }
  
};
