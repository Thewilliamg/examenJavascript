
export default class Objects{
    constructor(id, image, name, price){
        this.id=id;
        this.image=image;
        this.name=name;
        this.price=price;
    }
    createCard(){
        const box = document.createElement("div");
        box.classList.add("box");
        box.id = this.id

        // Crear y añadir la imagen de la pista
        const img = document.createElement("img");
        img.src = this.image;
        
        const info = document.createElement("div");
        info.classList.add("info");

        const name = document.createElement("p");
        name.textContent =this.name;
        // name.classList.add("");
        const price = document.createElement("b");
        price.textContent=this.price
        // name.classList.add("");
        const buttons = document.createElement("button");
        buttons.classList.add("h_button");
        buttons.textContent="Agregar"


        // trackArtists.textContent = this.track.artists.map(artist => artist.name).join(", ");
        info.appendChild(name)
        info.appendChild(price)
        info.appendChild(buttons)
        box.appendChild(img);
        box.appendChild(info);

        return box;
    }
}