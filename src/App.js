import './App.css';
import Countdown from './components/Countdown';
import Message from './components/Message';
import Social from './components/Social';
import patternHills from "./images/pattern-hills.svg";
import bgStars from "./images/bg-stars.svg";

function App() {
  return (
    <div className="content">
      <Message/>
      <Countdown/>
      <Social/>
      <div class="background">
        <img src={bgStars} alt="stars" className="bg-stars bg"/>
        <img src={patternHills} alt="hills" className="hills bg"/>
      </div>
    </div>
  );
}

export default App;
