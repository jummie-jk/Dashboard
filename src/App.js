import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/home";
import Login from "./Pages/login/Login";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";
import Tickets from "./Pages/ticket/tickets";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element = {<Home/>}/>
            <Route path="login" element = {<Login/>}/>
            <Route path="tickets">
              <Route index element= {<Tickets/>}/>
              <Route path=":userId" element= {<Single/>}/>
              <Route path="new" element= {<New/>}/>
            </Route>
            <Route path="products">
              <Route index element= {<Tickets/>}/>
              <Route path=":productId" element= {<Single/>}/>
              <Route path="new" element= {<New/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
