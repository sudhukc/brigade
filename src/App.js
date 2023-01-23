import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDelete from './Components/addDelete';

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route index path='/' element={<AddDelete/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
