import "./home.css";
import { cleanPage } from "../../utils/cleanPage";
import { homeCard } from "../../components/homeCard/homeCard";
import { getData } from "../../services/services";




const getHome = async () => {
    const home = await getData("home");
    printHome(home);
    //Almacenamos los datos fuera también para que sean accesible a todas las funciones (buscad una solución alternativa a este problema)
}

  
const printHome = (info) => {
    const section = document.createElement("section");
    section.classList.add("home");
    for(const item of info) {
    section.innerHTML += homeCard(item)
   };
    const app = document.querySelector("#app");
    cleanPage(app);
    app.appendChild(section);
 };


export const Home = () => {
  getHome();
};
