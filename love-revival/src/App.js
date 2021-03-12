import './App.scss';
// import 'bootstrap/scss/bootstrap';
import Navigation from './comp/Nav.js';
import WelcomeMessage from './comp/WelcomeMess.js';
import AboutLove from './comp/AboutLove.js';
import WatchLoveRev from './comp/WatchLoveRev';
import PictureGallery from './comp/PictureGallery';
import MediaComp from './comp/MediaComp';
import Footer from './comp/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      
      </header>
      <main>
        <WelcomeMessage />
        <AboutLove />
        <WatchLoveRev />
        <PictureGallery />
        <MediaComp />
        <Footer />
      </main>
    </div>
  );
}

export default App;
