import { Component } from "react";
import style from "./GalleryPage.module.css";
import CardItem from "../../CardItem/CardItem";

class GalleryPage extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    const results = localStorage.getItem("images");
    const parsedResults = JSON.parse(results);
    this.setState({
      images: parsedResults,
    });
  }

  render() {
    const { images } = this.state;
    return (
      <>
        <h1>Gallery page</h1>
        <ul className={style.galleryList}>
          {images.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </ul>
      </>
    );
  }
}

export default GalleryPage;
