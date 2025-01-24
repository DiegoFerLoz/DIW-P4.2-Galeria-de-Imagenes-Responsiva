// Recupero la plantilla de la columna y la elimino.
let plantillaCol = document.getElementById("colPlantilla");
let contenedorCols = plantillaCol.parentNode;
contenedorCols.removeChild(plantillaCol);

// Recupero la plantilla de la modal y la elimino.
let plantillaModal = document.getElementById("modalPlantilla");
let contenedorModals = plantillaModal.parentNode;
contenedorModals.removeChild(plantillaModal);

// Array para almacenar los tamaños de imagen.
let tamaños = ["Small", "Medium", "Large", "XLarge"];

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
      "Un juego muy recomendable. Mención especial a su maravillosa banda sonora.",
  },
  {
    id: "ZeldaEchoes",
    name: "The Legend of Zelda: Echoes of Wisdom",
    img: "ZeldaEchoes",
    imgExtension: ".jpg",
    description: "Usa la sabiduría de la princesa Zelda para salvar Hyrule. Recurre a nuevos poderes para explorar un vasto reino, luchar contra los monstruos, completar mazmorras y resolver el misterio de las brechas.",
    opinion: "Muy buen juego, sencillo pero entretenido. Tremendo vicio.",
  },
  {
    id: "PaperMarioRemake",
    name: "Paper Mario The Thousand Year Door Remake",
    img: "PaperMarioRemake",
    imgExtension: ".jpg",
    description: "Únete a Mario y a sus amigos en un viaje para descubrir el legendario tesoro que se oculta tras la Gran Puerta. Con un mapa de la princesa Peach y la ayuda de algunos habitantes, Mario iniciará una aventura a través de un colorido mundo de papel para encontrar el legendario tesoro.",
    opinion: "Muy buen juego RPG de Mario. Partiendo de que el original no me gustó demasiado, este remake me ha encantado.",
  },
  {
    id: "FireEmblemAwakening",
    name: "Fire Emblem Awakening",
    img: "FireEmblemAwakening",
    imgExtension: ".jpg",
    description: "Mientras el príncipe Chrom intenta evitar que las escaramuzas entre los reinos de Ylisse y Plegia se conviertan en una guerra abierta, una plaga de soldados no-muertos conocidos como \"los resurrectos\" asola la tierra. Atrapado entre un reino en guerra, unas fuerzas malévolas de proporciones inconcebibles y un extraño enmascarado que afirma ser una figura legendaria de siglos pasados, la lucha por la supervivencia de Chrom se intuye más fatídica que nunca. Afortunadamente, cuenta con los Custodios de Ylisse (su milicia personal) y contigo, un guerrero que ha perdido la memoria, para luchar en su bando. Sin embargo, a medida que se alarga el conflicto, sucederán cosas que cambiarán el mundo para siempre...",
    opinion: "Juego muy entretenido. Siendo el segundo Fire Emblem que juego, su historia me ha atrapado hasta el final.",
  },
  {
    id: "Minecraft",
    name: "Minecraft",
    img: "Minecraft",
    imgExtension: ".jpg",
    description: "Minecraft es un videojuego sandbox enfocado en permitirle al jugador explorar y modificar un mundo generado dinámicamente hecho de bloques de un metro cúbico.",
    opinion: "¿Qué se más se puede decir? No se cuantas partidas habré jugado ya, este juego siempre se presta a jugar un rato más.",
  },
  {
    id: "RingRacers",
    name: "Dr. Robotnik's Ring Racers",
    img: "RingRacers",
    imgExtension: ".jpg",
    description: "Dr. Robotnik's Ring Racers es un juego de carreras de karts creado por fans, gratuito y de código abierto para un jugador y multijugador, inspirado en el universo de Sonic The Hedgehog.",
    opinion: "Juego muy adictivo. Las mecánicas que presenta son únicas, y lo diferencian de otros juegos de karts.",
  },
  {
    id: "SonicXShadow",
    name: "Sonic X Shadow Generations",
    img: "SonicXShadow",
    imgExtension: ".jpg",
    description: "Cuando el Dr. Eggman se alía con su antiguo yo y el misterioso Time Eater para borrar sus fracasos y reescribir la historia, dispersan a Sonic y a sus amigos por el espacio-tiempo. Ahora, ¡el Sonic clásico y moderno deberán unirse para derrotar al trío malicioso y restablecer sus líneas temporales! Ponte en la piel de Shadow en una campaña de historia con nuevas habilidades. ¡Demuestra por qué es la forma de vida definitiva! Recorre fases icónicas de la historia de Shadow a toda velocidad, descubre secretos en un gran mundo central y desbloquea poderes para enfrentarte a Black Doom y salvar el mundo.",
    opinion: "El juego incluye Sonic Generations, además de una campaña nueva con Shadow. Ambos modos son muy buenos, destacando el último por ser la novedad y por el mimo con el que lo han diseñado.",
  },
  {
    id: "Persona5Royal",
    name: "Persona 5 Royal",
    img: "Persona5Royal",
    imgExtension: ".jpg",
    description: "Ponte la máscara del Joker, acompaña a los Ladrones Fantasma de Corazones en sus asaltos ¡e infíltrate en la mente de los corruptos para hacerles cambiar de opinión! Tras verse obligado a cambiarse a otro instituto en Tokio, el protagonista tiene un extraño sueño. \"Eres, sin lugar a dudas, prisionero del destino. La perdición te aguarda en el futuro\". Con el objetivo de su \"rehabilitación\" en mente, deberá ponerse la máscara de un Ladrón Fantasma para salvar el mundo de sus distorsionados deseos.",
    opinion: "Juegazo. Uno de los mejores juegos que he jugado en mi vida. Todos sus apartados son excelentes.",
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
      propiedad.setAttribute(
        "alt",
        juego.img
      )
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

    // Cambio la descripción del juego de la modal.
    propiedad = document.getElementById("descModalPlantilla");
    propiedad.setAttribute("id", "descModal_" + juego.id);
    if (juego.description){
        propiedad.childNodes[0].nodeValue = juego.description;
    }

    // Cambio la opinión del juego de la modal.
    propiedad = document.getElementById("opinionModalPlantilla");
    propiedad.setAttribute("id", "opinionModal_" + juego.id);
    if (juego.opinion){
        propiedad.childNodes[0].nodeValue = juego.opinion;
    }

    // Cambio las imágenes de la modal.
    tamaños.forEach(tamaño => {
        propiedad = document.getElementById("srcsetModal" + tamaño + "Plantilla");
        propiedad.setAttribute("id", "srcsetModal" + tamaño + "_" + juego.id);

        if (juego.img){
            propiedad.setAttribute("srcset", "img/" + juego.img + "/" + juego.img + "-" + tamaño.toLocaleLowerCase() + "-1x" + juego.imgExtension + ", "
                                            + "img/" + juego.img + "/" + juego.img + "-" + tamaño.toLocaleLowerCase() + "-2x" + juego.imgExtension + " 2x");
        }
    });

    propiedad = document.getElementById("imgModalPlantilla");
    propiedad.setAttribute("id", "imgModal_" + juego.id);
    if (juego.img) {
        propiedad.setAttribute(
            "src",
            "img/" + juego.img + "/" + juego.img + "-large-1x" + juego.imgExtension
        )
        propiedad.setAttribute(
            "alt",
            juego.img
        )
    }
  }

}
