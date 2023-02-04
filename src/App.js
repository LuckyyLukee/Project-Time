import './index.scss'
import Navbar from './components/navbar/navbar'
import GamesList from './components/games/games'

function App() {
  return (
    <div className="page-container">
      <div className="header-container">
        <Navbar />
      </div>
      <div className="body-container">
        <div className="landing-container">
          <p className="title">Time Travel Workshop</p>
          <p className="landing-text">
            Hello. We are Time Travel Workshop, here you will find our games, information about us and who we are. 
            To contact us, please join our discord and check into our twitter for updates!
          </p>
          <p className="scrolldown">
            Scroll Down <br/>
            ↓
          </p>
        </div>
        <div className="games-container">
          <GamesList />
        </div>
      </div>
      <div className="footer-container"></div>
    </div>
  );
}

export default App;
