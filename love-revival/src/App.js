import './App.scss';
// import 'bootstrap/scss/bootstrap';
import HeaderNav from './comp/Navbar.js';
import WelcomeMessage from './comp/WelcomeMess.js';
import PictureGallery from './comp/PictureGallery';
import Footer from './comp/Footer';
import LoveSection from './comp/LoveSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderNav />
        <div className='header-text'>
          <h2>WELCOME TO </h2>
          <h1>LOVE REVIVAL</h1>
          <button>Learn more</button>
        </div>
        
      </header>
      <main>
        <WelcomeMessage />
        <LoveSection />
        <PictureGallery />
        <Footer />
      </main>
    </div>
  );
}

export default App;
