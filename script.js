// Recupero la plantilla de la columna y la elimino.
let plantillaCol = document.getElementById("colPlantilla");
let contenedorCols = plantillaCol.parentNode;
contenedorCols.removeChild(plantillaCol);

// Recupero la plantilla de la modal y la elimino.
let plantillaModal = document.getElementById("modalPlantilla");
let contenedorModals = plantillaModal.parentNode;
contenedorModals.removeChild(plantillaModal);

// Array para almacenar los tamaños de imagen.
let tamaños = ["-small-", "-medium-", "-large-", "-xlarge-"];

// Array para almacenar los juegos y sus datos.
let listadoJuegos = [
  {
    id: "CassetteBeasts",
    name: "Cassette Beasts",
    img: "CassetteBeasts",
    imgExtension: ".jpeg",
    description:
      "Colecciona increíbles monstruos para usarlos durante las batallas por turnos en este juego de rol de mundo abierto. ¡Combina dos monstruos cualesquiera usando el sistema fusión para crear otros únicos y más poderosos!",
    opinion:
      "Comencé este juego escéptico, sin muchas expectativas. Pensé que sería un clon de Pokémon más, pero ha resultado ser una experiencia totalmente distinta con una identidad propia y bien diferenciada. Un juego muy recomendable. Mención especial a su maravillosa banda sonora.",
  },
  {
    id: "ZeldaEchoes",
    name: "The Legend of Zelda: Echoes of Wisdom",
    img: "ZeldaEchoes",
    imgExtension: ".jpg",
    description: "",
    opinion: "",
  },
  {
    id: "PaperMarioRemake",
    name: "Paper Mario The Thousand Year Door Remake",
    img: "PaperMarioRemake",
    imgExtension: ".jpg",
    description: "",
    opinion: "",
  },
  {
    id: "FireEmblemAwakening",
    name: "Fire Emblem Awakening",
    img: "FireEmblemAwakening",
    imgExtension: ".jpg",
    description: "",
    opinion: "",
  },
  {
    id: "Minecraft",
    name: "Minecraft",
    img: "Minecraft",
    imgExtension: ".jpg",
    description: "",
    opinion: "",
  },
  {
    id: "RingRacers",
    name: "Dr. Robotnik's Ring Racers",
    img: "RingRacers",
    imgExtension: ".jpg",
    description: "",
    opinion: "",
  },
  {
    id: "SonicXShadow",
    name: "Sonic X Shadow Generations",
    img: "SonicXShadow",
    imgExtension: ".jpg",
    description: "",
    opinion: "",
  },
  {
    id: "Persona5Royal",
    name: "Persona 5 Royal",
    img: "Persona5Royal",
    imgExtension: ".jpg",
    description: "",
    opinion: "",
  },
];

// Itero sobre el array de juegos para crear las columnas y las modales correspondientes.
let columna;
let modal;
for (let juego of listadoJuegos) {
  // Clono las plantilla de la col y la modal, y las inserto para modificarlas.
  columna = plantillaCol.cloneNode(true);
  contenedorCols.appendChild(columna);
  modal = plantillaModal.cloneNode(true);
  contenedorModals.appendChild(modal);

  let propiedad;
  // Compruebo si el juego tiene ID.
  if (juego.id) {
    // Primero cambio los ID para evitar errores.
    columna.setAttribute("id", "col_" + juego.id);
    modal.setAttribute("id", "modal_" + juego.id);

    // Cambio la foto de la card.
    propiedad = document.getElementById("imgCardPlantilla");
    propiedad.setAttribute("id", "imgCard_" + juego.id);
    if (juego.img) {
      propiedad.setAttribute(
        "src",
        "img/" + juego.img + "/" + juego.img + "-small-1x" + juego.imgExtension
      );
    }

    // Cambio el título del juego de la card.
    propiedad = document.getElementById("titleCardPlantilla");
    propiedad.setAttribute("id", "titleCard_" + juego.id);
    if (juego.name){
        propiedad.childNodes[0].nodeValue = juego.name;
    }
    
    // Cambio el enlace a la modal.
    propiedad = document.getElementById("enlaceCardPlantilla");
    propiedad.setAttribute("id", "enlaceCard_" + juego.id);
    propiedad.setAttribute("data-bs-target", "#modal_" + juego.id);


    // Cambio el título del juego de la modal.
    propiedad = document.getElementById("titleModalPlantilla");
    propiedad.setAttribute("id", "titleModal_" + juego.id);
    if (juego.name){
        propiedad.childNodes[0].nodeValue = juego.name;
    }
  }


}
