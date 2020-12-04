import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowAll from "./pages/ShowAll";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import ReviewsForm from "./components/ReviewsForm/form"



function App() {
  return (
    
    <BrowserRouter>
    <Nav />
    <div>
      <Route exact path ="/" component={ReviewsForm}/>
      <Route exact path ="/showall" component={ShowAll}/>
      <Route exact path = "/create" component={Create} />
      <Route exact path = "/showall/:id" component = {Detail} />
    </div>
    </BrowserRouter>

  );
}

export default App;

