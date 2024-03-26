//import logo from './logo.svg';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    /*Defining routes of the app*/
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
