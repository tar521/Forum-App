import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/directory' element={<Directory/>}/>
        <Route path='/thread/threadname' element={<Thread/>}/>
      </Routes>
    </div>
  );
}

export default App;
