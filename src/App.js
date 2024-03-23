import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageComponent from './components/HomePageComponent';
import ProfilePageComponent from './components/ProfilePageComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    
<BrowserRouter>
{/* Wraping our application in broswerRouter to enable Routing */}

<Routes>
    {/* '/' deteramnds our homepage our are default rednered page. */}
  <Route path='/' element={<HomePageComponent/>}/>
  <Route path='/profile' element={<ProfilePageComponent/>}/>

</Routes>
</BrowserRouter>
  );
}

export default App;
