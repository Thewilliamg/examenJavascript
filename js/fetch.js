export const getPantalones = async() =>{
    const url= await fetch("http://172.16.101.146:5999/pantalon");
    const data = await url.json();
    return data;
}

export const getAbrigo = async() =>{
    const url= await fetch("http://172.16.101.146:5999/abrigo");
    const data = await url.json();
    return data;
}

export const getCamiseta = async() =>{
    const url= await fetch("http://172.16.101.146:5999/camiseta");
    const data = await url.json();
    return data;
}
export const getAll = async() =>{
    const url= await fetch("http://172.16.101.146:5999/");
    const data = await url.json();
    return data;
}

export const getCar = async() =>{
    const url= await fetch("http://172.16.101.146:5999/carrito");
    const data = await url.json();
    return data;
}

