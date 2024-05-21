export const getPantalones = async() =>{
    const url= await fetch("http://172.16.101.146:5999/pantalon");
    const data = await url.json();
    return data;
}

export const getAbrigo = async() =>{
    const url= await fetch("http://172.16.101.146:5999/abrigos");
    const data = await url.json();
    return data;
}

export const getCamiseta = async() =>{
    const url= await fetch("http://172.16.101.146:5999/camiseta");
    const data = await url.json();
    return data;
}



// export const createCardAbrigo()=>{
    //     let 
    // }
    // const createPantalones = document.querySelector("boxes");
    // createPantalones.addEventListener("click", async (e) => {
export const createPantalones = async()=>{
    let boxes=document.querySelector(".boxes"); ;
    console.log(!boxes.innerHTML);
    if (!boxes.innerHTML) {
        let data = await getPantalones()
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="box" id=${val.id}>
                    <img src =${val.imagen}
                    <div class="info">
                        <p>${val.nombre}</p>
                        <b>${val.precio} </b>
                        <button class="h_button">Agregar</button>
                    </div>
                </div>
            `;})
        boxes.innerHTML = plantilla;
    }
}
await createPantalones();
// })
