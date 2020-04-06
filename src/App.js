import React, { Component } from "react";
import Loader from "./Loader";
import './App.css';
import Header from './Header'
import Home from './Home';
import About from './About';
import Work from './Work';
import Footer from './Footer';
import Contact from './Contact';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      scrollTop: window.pageYOffset
    };
  }
  stikyNav = () => {
    console.log("came in stikyNav");
    this.setState({
      scrollTop: window.pageYOffset,
    });
  }
  scrollFunctions = () => {
    console.log("came in scrollFunctions");
    this.stikyNav();
  }
  componentDidMount() {
    console.log("componentDidMount got hit");
    this.setState({
      loading: false
    });
    window.addEventListener('scroll', this.scrollFunctions);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount got hit");
    window.removeEventListener('scroll', this.scrollFunctions);
  }
  render() {
    if (this.state.loading) return <Loader />

    return <div className="App">
      <Header top={this.state.scrollTop} />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  }
}

export default App;

