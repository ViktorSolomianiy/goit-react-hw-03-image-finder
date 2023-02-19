import React, { Component } from 'react';
import * as API from '../services/api';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    status: 'idle',
    showModal: false,
    error: null,
    largeImageURL: '',
    tags: '',
  };

  handleFormSubmit = query => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevState.searchQuery;
    const nextValue = this.state.searchQuery;

    if (prevValue !== nextValue) {
      this.setState({ status: 'pending' });
      this.getImages();
    }
  }

  getImages = () => {
    const { searchQuery, currentPage } = this.state;

    if (searchQuery.trim() === '') {
      return;
    } else {
      try {
        API.fetchImage(searchQuery, currentPage)
          .then(response => {
            this.setState(({ images, currentPage }) => ({
              images: [...images, ...response.hits],
              currentPage: currentPage + 1,
              status: 'resolved',
            }));
          })
          .catch(error => this.setState({ error, status: 'rejected' }));
      } catch (error) {
        console.log(error);
      }
    }
  };

  onLoadMore = () => {
    this.getImages();
  };

  openModal = (largeImageURL, tags) => {
    this.setState({ largeImageURL, tags });

    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, status, error, showModal, largeImageURL, tags } =
      this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} images={images} />

        <ImageGallery
          images={images}
          status={status}
          error={error}
          onLoadMore={this.onLoadMore}
          openModal={this.openModal}
        />

        {showModal && (
          <Modal
            images={images}
            onClose={this.toggleModal}
            largeImageURL={largeImageURL}
            tags={tags}
            openModal={this.openModal}
          />
        )}

        <ToastContainer />
      </div>
    );
  }
}
