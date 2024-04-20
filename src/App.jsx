import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from'./pages/Login'
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { DataTest } from './context/Form';
import SignStep1 from './pages/SignStep1';
import SignStep2 from './pages/SignStep2';
import { useState } from 'react';
import SignStep3 from './pages/SignStep3';

function App() {
  //Set & Update FormDataContext
  const [DataForm,setDataForm]= useState({});
  // Check if the browser is Firefox
  var isFirefox = typeof InstallTrigger !== 'undefined';
  if (isFirefox) 
    document.documentElement.style.fontSize = "16px";
    return (
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={
            <DataTest.Provider value={DataForm}> 
              <SignUp setDataForm={setDataForm} />
            </DataTest.Provider>}
          />
          <Route path='/SignUp/step1' element={
            <DataTest.Provider value={DataForm}> 
              <SignStep1 setDataForm={setDataForm} />
            </DataTest.Provider>
          } />
          <Route path='/SignUp/step2' element={
            <DataTest.Provider value={DataForm}> 
              <SignStep2 setDataForm={setDataForm} />
            </DataTest.Provider>
          } />
          <Route path='/SignUp/step3' element={
            <DataTest.Provider value={DataForm}> 
              <SignStep3 setDataForm={setDataForm} />
            </DataTest.Provider>
          } />
       </Routes>
      </>
    )
  }

export default App
