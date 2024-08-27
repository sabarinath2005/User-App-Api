import logo from './logo.svg';
import './App.css';
import AddUsers from './components/AddUsers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchUsers from './components/SearchUsers';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUsers />} />
        <Route path="/search" element={<SearchUsers />} />
        <Route path="/viewall" element={<ViewAll/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;