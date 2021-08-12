import {Choice, Remove} from './helpers'
import './App.css';

function App() {
  return (
    <div className="App">
      <Choice message1="Hi i would like a " message2="Here is a "/>
      <Choice message1="AMAZING! may i have another"/>
      <Remove message="Sorry we are all out we only have "/>
    </div>
  );
}

export default App;
