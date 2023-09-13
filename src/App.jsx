import Home from './components/Inicio/Inicio.jsx'
import {RouterProvider} from "react-router-dom";
import routerGeneral from './components/routes/Router.jsx'
//Elements Bootstrap
import Container from 'react-bootstrap/Container';
function App() {
  

  return (
    <>
      <Container>
        
          
          
          <Home/>
          <RouterProvider router={routerGeneral} />
     
      </Container>
      
    </>
  )
}

export default App
