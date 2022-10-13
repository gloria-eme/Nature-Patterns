import "./homeCard.css";

export const homeCard = (item) => `
    <h1>${item.tittle}</h1>
    <p>${item.description}</p>
    <div class="gallery">
        <img class"img" id="img1" src=${item.cover1} alt="caracol"/>
        <img class"img" id="img2" src=${item.cover2} alt="dibujo"/>
        <img class"img" id="img2" src=${item.cover3} alt="escalera"/>
    </div>
    `;
