import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';


export default class App extends Component {
  state = {
    keyword: '',
  };

  handleSearchFormSubmit = keyword => {
    this.setState({ keyword });
  };

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery keyword={this.state.keyword} />
        {/* <ToastContainer/> */}
      </div>
    );
  }
}