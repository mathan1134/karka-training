import logo from './logo.svg';
import './App.css';
import {Home} from "./Components/Home"
import { Tab } from './Components/Home2';
// import {Home2} from "./Components/Home2"
import {Button} from "./Components/Button"

function App() {
   var Count=0
  return (
    <div>
     {/* <Home/> */}
     <Tab/>
     <Button count={Count} />
    </div>
  );
}

export default App;
