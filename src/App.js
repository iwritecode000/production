import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Feature from "./components/Feature";
import Stastistics from "./components/Stastistics";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Blogcards from "./components/Blogcards";
import Tourcards from './components/Tourcards'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Service />
      <Feature />
      <Blogcards />
      <Tourcards />
      <Stastistics />
      <Footer />
    </>
  );
}

export default App;
