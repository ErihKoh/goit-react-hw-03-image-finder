import React, { Component } from "react";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ButtonLoadMore from "./components/Button";
import imageApi from "./services/image-api";
import "./App.css";

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    imageQuery: "",
    isLoading: false,
    error: null,
  };
  static propTypes = {
    imageQuery: PropTypes.string,
    images: PropTypes.array,
    currentPage: PropTypes.number,
    isLoading: PropTypes.bool,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageQuery !== this.state.imageQuery) {
      this.fetchImage();
    }
  }

  handleFormSubmit = (imageQuery) => {
    this.setState({ imageQuery, currentPage: 1, images: [] });
  };

  fetchImage = () => {
    const { currentPage, imageQuery } = this.state;
    const options = {
      currentPage,
      imageQuery,
    };

    imageApi.fetchImage(options).then(({ hits }) =>
      this.setState((prevState) => ({
        images: [...prevState.images, ...hits],
        currentPage: prevState.currentPage + 1,
      }))
    );
  };

  render() {
    const { images } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} />
        {images.length > 0 && <ButtonLoadMore onClick={this.fetchImage} />}
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default App;
