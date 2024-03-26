//import logo from './logo.svg';
import './App.scss';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    /*Defining routes of the app*/
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}

export default App;
