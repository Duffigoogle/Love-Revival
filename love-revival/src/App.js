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
        <div className='header-content'>
          <h2 className='header-text small'>WELCOME TO </h2>
          <h1 className='header-text big'>LOVE REVIVAL</h1>
          <button className='btn'>Learn more</button>
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
