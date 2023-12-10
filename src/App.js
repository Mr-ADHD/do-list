import Nav from './Nav';
import MyList from './MyList';
import AddTask from './AddTask';


import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {

  return (
    <Router>

      <div className="App">
        <div className="content">

          
          <Nav></Nav>
          <Routes>
            <Route exact path="/" element={<MyList />} />
            <Route path="/add-task" element={<AddTask />} />
          </Routes>
          
          
        
          
          
          
        </div>

      </div>
    </Router>



  );
}

export default App;
