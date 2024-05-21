export const getAll = async() =>{
    const url= await fetch("http://172.16.101.146:5999/");
    const data = await url.json();
    return data;
}

console.log(await getAll());

// export const createCardAbrigo()=>{
//     let 
// }