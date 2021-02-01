import React, { Componentm, useState, useEffect } from "react";
// import Perf from 'react-addons-perf';
import AppLoader from "../AppLoader";
import { StyledApp } from "./styles";
import Header from "../Header";
import Home from "../Home";
import About from "../About";
import Work from "../Work";
import Footer from "../Footer";
import Contact from "../Contact";
import TableSkeleton from "../loading-template";
import signatureLogo from '../images/logo.png';
import profileImage from "../images/profile_lq.jpg";
import bgImage from "../images/bg-3.jpg";

const imagesToLoad = [bgImage, profileImage, profileImage];
const App = () => {
  const [content, setContent] = useState(<TableSkeleton />);
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    [bgImage, profileImage, profileImage].forEach(((image) => {
      new Image().src = image;
    }));
    const loadImage = (url) => new Promise((resolve, reject) => {
      const img = new Image();
      img.addEventListener('load', () => resolve(img));
      img.addEventListener('error', (err) => reject(err));
      img.src = url;
    });

    const imageLoadRequests = imagesToLoad.map((image) => (
      loadImage(image)
    ));
    Promise.all(imageLoadRequests).then(() => setLoadingImages(false));
  }, []);

  useEffect(() => {
    !loadingImages && setContent(<StyledApp>
      <Header logo={signatureLogo} />
      <Home bgImage={bgImage} profileImagePath={profileImage} />
      <About />
      {/* <Work /> */}
      {/* <Contact /> */}
      <Footer />
    </StyledApp>);
  }, [loadingImages]);

  return content;
};

export default App;
