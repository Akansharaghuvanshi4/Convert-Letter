

import React,{ useState } from 'react';


import './App.css';
import Alert from './component/Alert';
import About from './component/About';

import Navbar from './component/Navbar';
import Textform from './component/Textform';

import { 
  BrowserRouter ,
 
   
  Switch,
   Route, 
} from 'react-router-dom';








function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})



  }
   const toggleMode=()=>{
    if(mode==='light')
    {
    setMode('dark');
    document.body.style.backgroundColor='#10183e';
    showalert("Dark Mode has been Enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light Mode has been Enable","success");
    }
  }
  return (
   <>

<BrowserRouter>
    <Navbar title="Letter Converter" home="Home"  about="About"mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

    <Switch>
   
        <Route exact path="/about">
                <About/>
          </Route> 
        <Route exact path="/">
              <Textform showalert={showalert}  heading="Converter" mode={mode}/> 
        </Route>
    </Switch>

  </div>
  </BrowserRouter>
   
   </>
  );
}

export default App;
