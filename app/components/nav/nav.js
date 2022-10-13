import "./nav.css";


export const nav = () => `
<nav>
<input type="text" id="input" placeholder ="Buscar: 'animales', 'plantas' o 'elementos'"/>
<button id="searchBtn">buscar</button>
<ul>
        <li>
            <a href="#" id="homelink">Home</a>
        </li>
        <li>
            <a href="#" id="imageslink">Galeria</a>
        </li>
    </ul>
</nav>

`;
// <img id="logo" src ="./public/images/logo.jpg">