import React, { Component } from "react";
import imagesApi from "../../../services/images-api";
import Carousel from "react-elastic-carousel";
import CardItem from "../../CardItem/CardItem";
import style from "./ImagesSlider.module.css";

class ImagesSlider extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = () => {
    this.setState({ isLoading: true });
    imagesApi
      .fetchImages()
      .then((results) => {
        this.setState({ images: results });
        localStorage.setItem("images", JSON.stringify(results));
      })
      .catch((error) =>
        this.setState({
          error,
        })
      )
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };
  render() {
    return (
      <>
        <h1 className={style.pageTitle}>Home page</h1>
        <ul className={style.cardsList}>
          <Carousel itemPadding={[0, 20]} itemsToShow={3} pagination={false}>
            {this.state.images.map((item) => (
              <CardItem key={item.id} item={item} />
            ))}
          </Carousel>
        </ul>
      </>
    );
  }
}

export default ImagesSlider;
