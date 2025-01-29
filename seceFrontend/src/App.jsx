import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/FunctionalComponents/About';
import Gallery from './components/FunctionalComponents/Gallery';
import Home from './components/FunctionalComponents/Home';
import Contact from './components/FunctionalComponents/Contact';
import Navbar from './components/FunctionalComponents/Navbar';
import Signup from './components/FunctionalComponents/Signup';
import Login from './components/FunctionalComponents/Login';
import UseState from './components/FunctionalComponents/Hooks/UseState';
import UseEffect from './components/FunctionalComponents/Hooks/UseEffect';
import UseEffectAPI from './components/FunctionalComponents/Hooks/UseEffectAPI';
import UseEffectAPIimage from './components/FunctionalComponents/Hooks/UseEffectAPIimage';
import UseReducer from './components/FunctionalComponents/Hooks/UseReducer';
import UseRef from './components/FunctionalComponents/Hooks/UseRef';
import UseMemo from './components/FunctionalComponents/Hooks/UseMemo';
import UseCallback from './components/FunctionalComponents/Hooks/UseCallback';
import ReactLifecycleMethods from './components/classComponents/ReactLifecycleMethods';
import UseContext from './components/FunctionalComponents/Hooks/UseContext';
import Memo from './components/FunctionalComponents/Memoization/Memo';
import LazyLoadingWithSuspense from './components/FunctionalComponents/Memoization/LazyLoadingWithSuspense';
import UseLocalStorage from "./components/FunctionalComponents/Hooks/UseLocalStorage";
import HoC from "./components/FunctionalComponents/HoC/HoC";


function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false)

  return (
    <BrowserRouter>
      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login /> } />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery page="Gallery" image="SECE Logo" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reactlm" element={<ReactLifecycleMethods />} />
        <Route path="/useApi" element={<UseEffectAPI />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useimage" element={<UseEffectAPIimage /> } />
        <Route path="/usereducer" element={<UseReducer />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/usememo" element={<UseMemo />} />
        <Route path="/usecallback" element={<UseCallback />} />
        <Route path="/usecontext" element={<UseContext />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/lazy" element={<LazyLoadingWithSuspense />} />
        <Route path="/usecustom" element={<UseLocalStorage />} />
       
        <Route path="/hoc" element={<HoC />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
