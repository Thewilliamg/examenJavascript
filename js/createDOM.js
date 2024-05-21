import {getCamiseta,getAbrigo,getPantalones,getCar,getAll} from "./fetch.js";
import Objects from "./object.js";

export const createPants = async()=>{
    let data = await getPantalones();
    if (data) {
        for (const val of data) {
            const id = 'p'+val.id;
            const image = val.imagen;
            const name_item = val.nombre ;
            const price = val.precio;
            const objeto = new Objects(id,image,name_item,price);
            const objHTML = objeto.createCard();
            const box = document.querySelector('.boxes');
            box.appendChild(objHTML)
            // console.log(data);
            console.log(objHTML)
        };
    }
}

export const createShirt = async()=>{
    let data = await getCamiseta();
    if (data) {
        for (const val of data) {
            const id = 'c'+val.id;
            const image = val.imagen;
            const name_item = val.nombre ;
            const price = val.precio;
            const objeto = new Objects(id,image,name_item,price);
            const objHTML = objeto.createCard();
            const box = document.querySelector('.boxes');
            box.appendChild(objHTML)
            // console.log(data);
            console.log(objHTML)
        };
    }
}

export const createJacket = async()=>{
    let data = await getAbrigo();
    if (data) {
        for (const val of data) {
            const id = 'a'+val.id;
            const image = val.imagen;
            const name_item = val.nombre ;
            const price = val.precio;
            const objeto = new Objects(id,image,name_item,price);
            const objHTML = objeto.createCard();
            const box = document.querySelector('.boxes');
            box.appendChild(objHTML)
            // console.log(data);
            console.log(objHTML)
        };
    }
}
export const createCar = async()=>{
    let data = await getCar();
    if (data) {
        for (const val of data) {
            const id = 'a'+val.id;
            const name_item = val.nombre ;
            const price = val.precio;
            const objeto = new Objects(id,image,name_item,price);
            const objHTML = objeto.createCard();
            const box = document.querySelector('.boxes');
            box.appendChild(objHTML)
            // console.log(data);
            console.log(objHTML)
        };
    }
}