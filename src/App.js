import './App.css';
import NavBar from "./components/NavBar";
import BannerSection from "./components/BannerSection";
import YoutubeSection from './components/YoutubeSection';
import BannerImg from './components/BannerImg';
import BannerSep from './components/BannerSep';
import SessionSection from './components/SessionSection';
import PodcastSection from './components/PodcastSection';
import WhatsappButton from './components/WhatsappButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BannerImg />
      <BannerSection />
      <SessionSection />
      <YoutubeSection />
      <div className="banner-sep--container">
        <BannerSep />
      </div>
      <PodcastSection />
      <div className="banner-sep--container">
        <BannerSep />
      </div>
      <WhatsappButton />
      <Footer />
    </div>
  );
}

export default App;
