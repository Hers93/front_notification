import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const ModalEnvio = ({ openMod, closeModal, jsonUser, clearUser }) => {
  const [showModal, setShowModal] = useState(openMod);
  const handleClose = () => {
    setShowModal(false);
    closeModal(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const messages = { req: "*" + "Campo Requerido" };

  const onSubmit = (data) => {
    const datos = {
      idCategoria: jsonUser.idCategoria,
      idUsuario: jsonUser.idUsuario,
      idNotificacion: jsonUser.idNotificacion,
      Titulo: data.Titulo,
      Mensaje: data.Mensaje,
    };
    fetch("http://127.0.0.1:8000/insert-notification", {
          method: "POST",
          /* headers: {
            "Content-Type": "application/json",
          }, */
          body: JSON.stringify(datos),
        })
          .then((res) => res.json())
          .then((myJson) => {
            console.log(myJson);
            clearUser({})
            closeModal(false)
           setShowModal(false)
            
          });
    
    notify();
  };
  const notify = () => toast.success("Insertado cone exito");

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notificacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-12">
              <label htmlFor="inputTitulo" className="form-label">
                Titulo
              </label>
              <input
                {...register("Titulo", { required: messages.req })}
                type="text"
                className="form-control"
                id="inputTitulo"
              />
              {errors.Titulo && <span id="error">{messages.req}</span>}
            </div>

            <div className="col-12">
              <label htmlFor="inputMensaje" className="form-label">
                Mensaje
              </label>
              <textarea
                {...register("Mensaje", { required: messages.req })}
                className="form-control"
                id="inputMensaje"
                placeholder="Mensaje"
              />
              {errors.Mensaje && <span id="error">{messages.req}</span>}
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default ModalEnvio;
