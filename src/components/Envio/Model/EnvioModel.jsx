const getCategorias = async () =>{
    
    let response = await fetch("http://127.0.0.1:8000/get-categorias");
    let json = await response.json();
    return json;
}

const getUsuarioCategoria = async () => {
    let response = await fetch(`http://127.0.0.1:8000/get-UsuarioCategoria`);
    let json = await response.json();
    return json;
}

export{ getCategorias,getUsuarioCategoria}