// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Que nunca dejes de avanzar, aunque el camino sea incierto.", time: 15 },
  { text: "Ser fuerte no es no caer, sino levantarte con más sabiduría y valentía.", time: 20 },
  { text: "Que te mires al espejo y reconozcas tu propio valor,", time: 25 },
  { text: "sin depender de la aprobación de nadie.", time: 30 },
  { text: "Eres libre de ser quien quieras,", time: 34 },
  { text: "de reír sin miedo, de soñar sin límites y de decidir por ti misma.", time: 40},
  { text: "Y si algún día te sientes perdida,", time: 45 },
  { text: "que la felicidad te encuentre,", time: 50 },
  { text: "porque incluso en los momentos oscuros", time: 55},
  { text: "siempre hay luz esperándote.", time: 60 },
  { text: "Nunca dejes que el miedo defina tu camino.", time: 65 },
  { text: "Eres más fuerte de lo que imaginas.", time: 70 },
  { text: "Las caídas no son fracasos, sino lecciones de vida.", time: 75 },
  { text: "Brilla con tu propia luz, sin miedo a deslumbrar a otros.", time: 80 },
  { text: "No necesitas encajar en ningún molde, eres única.", time: 85 },
  { text: "Escucha tu voz interior, ella siempre sabe el camino.", time: 90 },
  { text: "Que la vida nunca te haga olvidar lo increíble que eres.", time: 95 },
  { text: "Las tormentas pueden sacudirte, pero nunca derribarte.", time: 100 },
  { text: "Nunca dejes de creer en ti, incluso cuando los demás duden.", time: 105 },
  { text: "Ser auténtica es tu mayor fortaleza.", time: 109 },
  { text: "Los sueños grandes son para personas valientes como tú.", time: 115 },
  { text: "No estás sola, siempre hay luz en algún lugar.", time: 120 },
  { text: "Recuerda que cada paso cuenta, incluso los pequeños.", time: 125 },
  { text: "Eres suficiente tal como eres.", time: 129 },
  { text: "Nunca cambies tu esencia por complacer a otros.", time: 135 },
  { text: "Que la felicidad siempre te encuentre en el camino.", time: 140 },
  { text: "Y si alguna vez te pierdes, recuerda quién eres.", time: 145 },
  { text: " ¡FELIZ DÍA DE LA MUJER! ", time: 150 },
  { text: " TE QUIERO 🫶 ", time: 155 },
  { text: " Atte: El Flaco 🤭 ", time: 160 },
  { text: " Ñieee Jajaj ", time: 165 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
