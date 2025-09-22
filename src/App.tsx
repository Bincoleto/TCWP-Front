import '../src/estilo/estilo.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './paginas/home/home'
import SobreNos from './paginas/sobrenos/sobrenos'


function App() {

  return (
    <div>
      <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/Sobrenos' element = {<SobreNos/>}/>
    </Routes>
    </div>
    
  )
}

export default App
