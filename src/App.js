import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import YoutubeSection from './components/YoutubeSection';
import BannerImg from './components/BannerImg';
import BannerSep from './components/BannerSep';
import SessionSection from './components/SessionSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BannerImg />
      <Header />
      <SessionSection />
      <BannerSep className="Banner-sep--container--small" />
      <YoutubeSection />
    </div>
  );
}

export default App;
