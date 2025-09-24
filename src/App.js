import TernaryOperator from './TernaryOperator/TernaryOperator';
import ClickEvent from './Events/ClickEvent';
import MouseEvents from './Events/MouseEvents';
import Resize from './EventListeners/Resize';
import FormEvents from './FormEvents/FormEvents';
import FormEvents1 from './FormEvents/FormEvents1';
import './App.css';

function App() {
  return (
    <div class="App">
      <div class="box"><TernaryOperator/></div>
      <div class="box"><ClickEvent/></div>
      <div class="box"><Resize/></div>
      <div class="box"><FormEvents/></div>
      <div class="box"><FormEvents1/></div>
      <div class="box"><MouseEvents/></div>
    </div>
  )
}

export default App;
