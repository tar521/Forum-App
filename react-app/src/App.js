import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Directory from "./components/Directory/Directory";
import Thread from "./components/Thread/Thread";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AuthContextProvider from "./service/AuthContextProvider";
import Create from "./components/Create/Create";
import Reply from "./components/Reply/Reply";

function App() {
  const [isLoggedIn] = useState(false);

  return (
    <div className="App">
      <AuthContextProvider value={{ isLoggedIn }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/thread" element={<Thread />} />
          <Route path='/create' element={<Create/>}/>
          <Route path='/reply' element={<Reply/>}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

