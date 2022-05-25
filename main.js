let btn = document.querySelector("div");

btn.addEventListener("click", (e)=>{
    let accion = e.target;
    let html = ()=>{
        let mensaje = document.querySelector("#mensaje");
        mensaje.innerHTML = null;
        mensaje.insertAdjacentHTML("beforeend", "Hola soy la opcion del html");
    }
    let dialog = ()=>{
        let ventana = document.querySelector("dialog");
        if(accion.dataset.close) ventana.close();
        else ventana.showModal();
    }
    (accion.localName == "button")
        ? (accion.dataset.opc == "consola")
            ? console.log("Hola soy la opcion de la consola")
            : (accion.dataset.opc == "ventena") 
                ? alert("Hola soy la opcion de la ventena")
                : (accion.dataset.opc == "html") 
                    ? html()
                    : dialog()
        : null;
    }) 