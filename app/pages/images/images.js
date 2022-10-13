import "./images.css";
import { imagesCard } from "../../components/imagesCard/imagesCard";
import { getData } from "../../services/services";
import { cleanPage } from "../../utils/cleanPage";
import { nav } from "../../components/nav/nav";


// //Almacenamos nuestra lista fuera para poder recuperarla en cualquier punto (OPCIONAL)
// let imagesList;

let imagesList;
const input = document.querySelector("input");

const getImages = async () => {
    const images = await getData("images");
    imagesList = images;
//Almacenamos los datos fuera también para que sean accesible a todas las funciones (buscad una solución alternativa a este problema)
    printImages(images, "");
};

const printImages = (list, word) => {
  const gallery = document.createElement("div");
  gallery.classList.add("gallery");
  for (const item of list) {
      gallery.innerHTML += imagesCard (item);
    }
    const app = document.querySelector("#app");
    cleanPage(app);
    app.appendChild(gallery);

    const filteredImages = list.filter((item) => {
      item.type.contain(word)
     })
     const imagesContainer = document.querySelector("#app");
     imagesContainer.innerHTML = "";
     for (const item of filteredImages) {
      imagesContainer.innerHTML += imagesCard (item);
     }
  };


export const Images = () => {
  cleanPage(app);
  getImages();

const searchInput = document.querySelector("#input");
  searchInput.addEventListener("input", (event) =>
    printImages(imagesList, event.target.value)
  );


};

