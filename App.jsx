import  './App.css';
import Header  from  './Header/Header';
import Main from './Main/Main'
import About from './About/About'
import Skills from  './Skills/Skills'
import Portfolio from  './Portfolio/Portfolio'
import Contacts from './Contacts/Contacts'
import  {Route,Routes} from 'react-router-dom'
function App() {
  return  (
    <>
    <Header/>
  
    <main className='main'>
     <Routes>
      <Route path="/" element= {<Main/>}></Route>
      <Route path="/about" element= {<About/>}></Route>
      <Route path="/skills" element= {<Skills/>}></Route>
      <Route path="/portfolio" element= {<Portfolio/>}></Route>
      <Route path="/contacts" element= {<Contacts/>}></Route>
      </Routes> 
      </main>
  
    </>
  );
}

export default App;
