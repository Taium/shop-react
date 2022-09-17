import Header from "./Header";
import Home from "./Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      
    <Header></Header>
    <Routes>
      
      <Route path="/" element={<Home />}/>
        
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/login" element={<Login />}/>
      
          
        
      
    </Routes>
  

    </div>
  );
}

export default App;
