const ramos = [
  // PRIMER AÑO
  { id: "pedagogia", nombre: "Pedagogía", requisitos: [] },
  { id: "psicoEdu", nombre: "Psicología Educacional", requisitos: [] },
  { id: "didacticaGen", nombre: "Didáctica General", requisitos: [] },
  { id: "lectura", nombre: "Lectura, Escritura y Oralidad", requisitos: [] },
  { id: "problematica", nombre: "Problemática de la Educación Inicial", requisitos: [] },
  { id: "psicoDes1", nombre: "Psicología del Desarrollo I", requisitos: [] },
  { id: "matematica", nombre: "Matemáticas", requisitos: [] },
  { id: "lengua", nombre: "Lengua y Literatura", requisitos: [] },
  { id: "tallerJuego", nombre: "Taller de Juego y Actividad Lúdica", requisitos: [] },
  { id: "expCorporal", nombre: "Expresión Artística: Expresión Corporal", requisitos: [] },
  { id: "pp1", nombre: "Práctica Profesional I", requisitos: [] },

  // SEGUNDO AÑO
  { id: "historia", nombre: "Historia y Política Educacional Argentina", requisitos: ["pedagogia"] },
  { id: "sociologia", nombre: "Sociología de la Educación", requisitos: ["pedagogia", "problematica"] },
  { id: "tic", nombre: "Tecnologías de la Información y la Comunicación", requisitos: ["lectura"] },
  { id: "ediEscCom", nombre: "EDI (Relación Esc.-Comunidad)", requisitos: [] },
  { id: "psicoDes2", nombre: "Psicología del Desarrollo II", requisitos: ["psicoEdu", "psicoDes1", "problematica"] },
  { id: "didInicial", nombre: "Didáctica del Nivel Inicial", requisitos: ["didacticaGen", "problematica", "psicoDes1"] },
  { id: "psicomotriz", nombre: "Educación Psicomotriz", requisitos: ["psicoDes1", "expCorporal"] },
  { id: "estimula", nombre: "Estimulación y Educación Temprana", requisitos: ["psicoDes1"] },
  { id: "didMat1", nombre: "Didáctica de la Matemática I", requisitos: ["didacticaGen", "matematica"] },
  { id: "didLeng1", nombre: "Didáctica de la Lengua y la Literatura I", requisitos: ["didacticaGen", "lengua"] },
  { id: "expPlastica", nombre: "Exp. Artística: Plástica", requisitos: ["tallerJuego", "expCorporal"] },
  { id: "expMusica", nombre: "Exp. Artística: Música", requisitos: ["tallerJuego", "expCorporal"] },
  { id: "ediCiencias", nombre: "EDI (Contenidos Cs. Naturales)", requisitos: [] },
  { id: "pp2", nombre: "Práctica Profesional II", requisitos: ["pp1", "problematica", "psicoDes1", "matematica", "lengua", "tallerJuego", "expCorporal"] },

  // TERCER AÑO
  { id: "filosofia", nombre: "Filosofía de la Educación", requisitos: ["historia"] },
  { id: "esi", nombre: "Educación Sexual Integral", requisitos: ["psicoDes1", "psicomotriz"] },
  { id: "alfab", nombre: "Alfabetización Inicial", requisitos: ["tic"] },
  { id: "didLeng2", nombre: "Didáctica Lengua y Lit. II", requisitos: ["didLeng1"] },
  { id: "didSociales", nombre: "Didáctica Ciencias Sociales", requisitos: ["didacticaGen"] },
  { id: "didNaturales", nombre: "Didáctica Ciencias Naturales", requisitos: ["didacticaGen"] },
  { id: "tecno", nombre: "Educación Tecnológica y su Didáctica", requisitos: ["didacticaGen", "tic"] },
  { id: "didMat2", nombre: "Didáctica de la Matemática II", requisitos: ["didMat1"] },
  { id: "tallerIntegra", nombre: "Taller Lenguajes Artísticos", requisitos: ["psicomotriz", "estimula", "expPlastica", "expMusica"] },
  { id: "ediGestion", nombre: "EDI (Org. y Gestión Áulica)", requisitos: [] },
  { id: "ediNivInicial", nombre: "EDI (Org. y Gest. Nivel Inicial)", requisitos: [] },
  { id: "pp3", nombre: "Práctica Profesional III", requisitos: ["didInicial", "psicomotriz", "estimula", "didMat1", "didLeng1", "expPlastica", "expMusica", "ediCiencias", "pp2"] },

  // CUARTO AÑO
  { id: "etica", nombre: "Formación Ética y Ciudadana", requisitos: ["sociologia"] },
  { id: "inclusion", nombre: "Integración e Inclusión Educativa", requisitos: ["psicoDes2", "psicomotriz", "estimula"] },
  { id: "evalMat", nombre: "Diseño y Evaluación en Matemática", requisitos: ["didMat2"] },
  { id: "evalLeng", nombre: "Diseño y Evaluación en Lengua y Literatura", requisitos: ["didLeng2"] },
  { id: "evalNat", nombre: "Diseño y Evaluación en Ciencias Naturales", requisitos: ["didNaturales"] },
  { id: "evalSoc", nombre: "Diseño y Evaluación en Cs Sociales", requisitos: ["didSociales"] },
  { id: "evalArt", nombre: "Evaluación de Lenguajes Artísticos", requisitos: ["tallerIntegra"] },
  { id: "ediAprendiz", nombre: "EDI (Problemas de Aprendizaje)", requisitos: [] },
  { id: "ediMaterial", nombre: "EDI (Construcción Material Didáctico)", requisitos: [] },
  { id: "pp4", nombre: "Práctica Profesional IV", requisitos: ["problematica", "psicoDes1", "psicoDes2", "didInicial", "didMat1", "didMat2", "didLeng1", "didLeng2", "didNaturales", "didSociales", "tecno", "alfab", "esi", "inclusion", "tallerIntegra", "ediGestion", "ediNivInicial", "pp3"] }
];

const estadoRamos = {};

function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  ramos.forEach(ramo => {
    const aprobado = estadoRamos[ramo.id] === true;
    const requisitosOk = ramo.requisitos.every(req => estadoRamos[req]);
    const desbloqueado = requisitosOk || ramo.requisitos.length === 0;

    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = ramo.nombre;

    if (aprobado) {
      div.classList.add("aprobado");
    } else if (!desbloqueado) {
      div.classList.add("bloqueado");
    } else {
      div.addEventListener("click", () => {
        estadoRamos[ramo.id] = true;
        crearMalla();
      });
    }

    contenedor.appendChild(div);
  });
}

crearMalla();
