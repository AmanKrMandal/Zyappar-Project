import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Forms from './component/Form/Forms';
import Read from './component/Read/Read';
import Update from './component/Update/Update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Forms />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
