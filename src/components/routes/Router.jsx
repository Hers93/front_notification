import {createBrowserRouter} from "react-router-dom";

///component
import Home from '../Inicio/Inicio.jsx'
import Envio from '../Envio/Envio.jsx'
import RegistroUsuario from '../RegistroUsuario/RegistroUsuario.jsx'


const routerGeneral = createBrowserRouter([
  {
    path: "/",
   
  },
  {
    path:"/envio",
    element: <Envio/>
  },
  {
    path:"/registro",
    element:<RegistroUsuario/>
  }
])

export  default routerGeneral
    