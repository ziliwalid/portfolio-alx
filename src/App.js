//import logo from './logo.svg';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    /*Defining routes of the app*/
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
