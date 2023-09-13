///components

import TableUserCat from './TableUserCat'
//hooks
import  { useEffect, useState } from 'react'
//model
import { getCategorias,getUsuarioCategoria } from './Model/EnvioModel'

const TabsCategorias = () => {
    const[categorias, setCategorias] = useState({});
    const [userCat, setUserCat] = useState({});
    const [filterUser , setfilterUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        getCategorias().then((response) => {
            setCategorias(response);
            setIsLoading(false);
        })
        setIsLoading(true)
        getUsuarioCategoria().then((response) => {
            setUserCat(response);
            setIsLoading(false);
        })
    },[])
  
  const handleClick = (e) => {
    const idCategoria = e.target.id;
    setfilterUser(userCat['data'].filter(Cat => Cat.idCategoria == idCategoria  ) )
  };

if (isLoading) { 
    return (
      <div style={{marginTop: '2rem'}} >
        <h1 style={{textAlign: "center"}}>Cargando...</h1>
      </div>
    );
  }

   return (
    <>
      <div style={{marginTop: '2rem'}} >
        <h1 style={{textAlign: "center"}}>Envio</h1>
      </div>
      <div className="d-flex justify-content-center">
        {categorias["data"].map((cat,index) => (
          <button
            id={cat.idCategoria}
            key={index}
            type="button" 
            className="btn btn-secondary m-1"
            onClick ={handleClick}
          >
              {cat['NombreCategoria']}
          </button>
        ))}
      </div>
      <TableUserCat users={filterUser}/>
    </>
     
  )
}

export default TabsCategorias