import './style.css'
import { infoFooter } from "./components/Footer/Footer";
import { Home } from "./pages/home/home";
import { Images } from "./pages/images/images";
import { linkPage } from "./utils/linkPage";
import { nav } from "./components/nav/nav";

const header = document.querySelector("header");
header.innerHTML = nav();

const footer = document.querySelector("footer");
footer.innerHTML = infoFooter();


Home();

Images();


linkPage("#homelink", Home)
linkPage("#imageslink", Images);


const homeLink = document.querySelector("#homelink");
homeLink.addEventListener("click", () => Home ());

const imagesLink = document.querySelector("#imageslink");
imagesLink.addEventListener("click", () => Images ());
