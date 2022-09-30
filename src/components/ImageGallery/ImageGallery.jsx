import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getImagePixabay from 'services/image-api';
import Modal from '../Modal/Modal';
import { Gallery, GaleryTitle } from '../ui/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';
import Loader from 'components/Loader';

export default class ImageGallery extends Component {
    state = {
        showModal: false,
        images: [],
        status: 'idle',
        pageNumber: 1,
        total: 0,
        largeImage: '',
    };

    componentDidUpdate(prevProps, prevState) {
        if (
            prevProps.keyword !== this.props.keyword ||
            prevState.pageNumber !== this.state.pageNumber
        ) {
            prevProps.keyword !== this.props.keyword
                ? this.setState({ images: [], status: 'pending', pageNumber: 1 })
                : this.setState({ status: 'resolved' });

            getImagePixabay(this.state.pageNumber, this.props.keyword)
                .then(({ hits, total }) => {
                    // console.log(hits);
                    if (total === 0) {
                        return this.setState({ status: 'rejected' });
                    }
                    return this.setState({
                        images: [...this.state.images, ...hits],
                        status: 'resolved',
                        total,
                    });
                })
                .catch(error => this.setState({ status: 'rejected' }));
        }
    }

    openModal = img => {
        this.setState({ showModal: true, largeImage: img });
    };
    closeModal = () => {
        this.setState({ showModal: false });
    };

    loadMore = () => {
        this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));
    };

    render() {
        const { images, status, total } = this.state;
        const { keyword } = this.props;

        if (status === 'idle') {
            return <GaleryTitle>Enter a keyword to search...</GaleryTitle>;
        }

        if (status === 'pending') {
            return (
                <GaleryTitle>
                    <Loader /> Search...
                </GaleryTitle>
            );
        }

        if (status === 'rejected') {
            return <GaleryTitle>Not found... Try another keyword</GaleryTitle>;
        }

        if (status === 'resolved') {
            return (
                <>
                    <GaleryTitle>
                        Found {total} images by keyword '{keyword}'
                    </GaleryTitle>
                    <Gallery>
                        <ImageGalleryItem images={images} onOpenModal={this.openModal} />
                    </Gallery>

                    {total > images.length && <Button loadMore={this.loadMore} />}
                    {this.state.showModal && (
                        <Modal
                            onCloseModal={this.closeModal}
                            largeImage={this.state.largeImage}
                        />
                    )}
                </>
            );
        }
    }
}

ImageGallery.propTypes = {
    keyword: PropTypes.string.isRequired,
};