import './App.css';
import NavBar from "./components/NavBar";
import BannerSection from "./components/BannerSection";
import YoutubeSection from './components/YoutubeSection';
import BannerImg from './components/BannerImg';
import BannerSep from './components/BannerSep';
import SessionSection from './components/SessionSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BannerImg />
      <BannerSection />
      <SessionSection />
      <YoutubeSection />
    </div>
  );
}

export default App;
