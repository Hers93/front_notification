import Table from 'react-bootstrap/Table';
import ModalEnvio from './ModalEnvio';
import { useState } from 'react';

const TableUserCat = ({users}) => {

const [openModal, setOpenModal] = useState(false);
const [jsonUser, setJsonUser] = useState({});
const handleClick = (e) => {
    const idCategoria = e.target.id;
    const idUsuario = e.target.dataset.user
    const idNotificacion = e.target.dataset.notification
    setJsonUser  ({idCategoria, idUsuario,idNotificacion})
    setOpenModal(true);
   
}
    
return (
    <>
        <Table striped bordered hover   style={{marginTop: '1rem'}}>
            <thead className="thead-light">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido Paterno</th>
                    <th scope="col">Apellido Materno</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nombre Categoria</th>
                    <th scope="col">SMS</th>
                    <th scope="col">E-MAIL</th>
                    <th scope="col">PUSH</th>

                </tr>
            </thead>
            <tbody>
                {Object.entries(users).map((use, index) => (
                     <tr key={index}>
                         <th scope="row">{use[1].idUsuario}</th>
                        <td>{use[1].Nombre}</td>
                        <td>{use[1].ApellidoPaterno}</td>
                        <td>{use[1].ApellidoMaterno}</td>
                        <td>{use[1].Email}</td>
                        <td>{use[1].NombreCategoria}</td> 
                        <td style={{textAlign: "center"}}>
                            <i 
                                id={use[1].idCategoria} 
                                data-user={use[1].idUsuario} 
                                data-notification='1'
                                className="bi bi-telephone-outbound-fill" 
                                onClick={handleClick}
                            ></i>
                        </td>
                        <td style={{textAlign: "center"}}>
                            <i 
                                id={use[1].idCategoria} 
                                data-user={use[1].idUsuario} 
                                data-notification='2'
                                className="bbi bi-envelope-at-fill" 
                                onClick={handleClick}></i>
                        </td>
                        <td style={{textAlign: "center"}}>
                            <i 
                                id={use[1].idCategoria} 
                                data-user={use[1].idUsuario} 
                                data-notification='3'
                                className="bi bi-bell-fill" 
                                onClick={handleClick}></i>
                        </td>
                    </tr> 
                   
                    ))
                }
               
            </tbody>
        </Table>
        { openModal  && <ModalEnvio openMod={openModal} closeModal={setOpenModal} jsonUser ={jsonUser} clearUser={setJsonUser}/> }
    </>
  )
}

export default TableUserCat