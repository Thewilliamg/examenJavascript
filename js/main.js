import {getCamiseta,getAbrigo,getPantalones,getAll} from "./fetch.js"
import {createPants,createShirt,createJacket} from "./createDOM.js"
import Objects from "./object.js";


await createPants();
await createShirt();
await createJacket();

const btn = document.querySelectorAll('button');
btn.addEventListener("click", async function () {
    no_id=btn.getAttribute('id');
    data = await getPantalones();
    data2= await getAbrigo();
    data3= await getCamiseta();
    datall={data,data2,data3}
    for (const i of data){
        for (const j of (data.i)){
            if (j.id===no_id){
                save=data.i.j;
                console.log(save);
                break;
            }
        }
    }; 

    // document.getElementById(no_id)
    // for (const val of datall)
    // if id_boton=id
    // new Objects(id,imagen,nombre,precio)

});