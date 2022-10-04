const chemicalElements = {
  Vodík: "H",
  Lítium: "Li",
  Draslík: "K",
  Rubídium: "Rb",
  Cézium: "Cs",
  Francium: "Fr",
  Berílium: "Be",
  Horčík: "Mg",
  Vápnik: "Ca",
  Stroncium: "Sr",
  Bárium: "Ba",
  Rádium: "Ra",
  Bór: "B",
  Hliník: "Al",
  Gálium: "Ga",
  Indium: "In",
  Tálium: "Tl",
  Uhlík: "C",
  Kremík: "Si",
  Germánium: "Ge",
  Cín: "Sn",
  Olovo: "Pb",
  Dusík: "N",
  Fosfor: "P",
  Arzén: "As",
  Antimón: "Sb",
  Bizmut: "Bi",
  Kyslík: "O",
  Síra: "S",
  Selén: "Se",
  Telúr: "Te",
  Polónium: "Po",
  Fluór: "F",
  Chlór: "Cl",
  Bróm: "Br",
  Jód: "I",
  Astát: "At",
  Hélium: "He",
  Neón: "Ne",
  Argón: "Ar",
  Kryptón: "Kr",
  Xenón: "Xe",
  Radón: "Rn",
};

const startup = () => {
  swapContent(createSettings());
};
let tickingInterval = null;
const createSettings = () => {
  const settingsContainer = document.createElement("div");
  settingsContainer.id = "settingsContainer";
  {
    const timeInput = document.createElement("input");
    timeInput.id = "settingsTimeInput";
    timeInput.type = "number";
    timeInput.step = 0.1;
    let storedTime = window.localStorage.getItem("chem.settings.time");
    if (storedTime === null) storedTime = "2";
    timeInput.value = parseFloat(storedTime);
    settingsContainer.append(timeInput);
  }
  {
    const startButton = document.createElement("button");
    startButton.innerText = "Start Game";
    startButton.onclick = () => {
      window.localStorage.setItem(
        "chem.settings.time",
        document.getElementById("settingsTimeInput").value
      );
      swapContent(createElementQuiz());
      tickingInterval = setInterval(() => elementQuizTick(), 10);
      let firstInput = document.getElementById("quizElementInput0");
      firstInput.disabled = false;
      firstInput.focus();
      document.getElementById("quizElementName").innerText =
        firstInput.dataset.elementName;
    };
    settingsContainer.append(startButton);
  }
  return settingsContainer;
};
const swapContent = (content) => {
  //if (tickingInterval !== null) clearInterval(tickingInterval);
  tickingInterval = null;
  const appContainer = document.getElementById("appContainer");
  while (appContainer.firstChild) {
    appContainer.removeChild(appContainer.firstChild);
  }
  appContainer.append(content);
};
let elementQuizCurrent;
const createElementQuiz = () => {
  elementQuizCurrent = 0;
  const elementQuizContainer = document.createElement("div");
  const elementName = document.createElement("h1");
  elementName.id = "quizElementName";
  elementQuizContainer.append(elementName);
  const elementTimer = document.createElement("h2");
  elementTimer.id = "quizElementTimer";
  elementTimer.innerText = window.localStorage.getItem("chem.settings.time");
  elementQuizContainer.append(elementTimer);
  for (let i = 0; i < 20; i++) {
    let elementInput = document.createElement("input");
    elementInput.id = "quizElementInput" + i;
    elementInput.disabled = true;
    const randomElement = randomProperty(chemicalElements);
    elementInput.dataset.elementName = randomElement;
    elementInput.dataset.elementId = chemicalElements[randomElement];
    elementQuizContainer.append(elementInput);
  }
  return elementQuizContainer;
};
const elementQuizTick = () => {
  let timer = parseFloat(document.getElementById("quizElementTimer").innerText);
  timer -= 0.01;
  if (timer <= 0) {
    document.getElementById(
      "quizElementInput" + elementQuizCurrent
    ).disabled = true;
    elementQuizCurrent++;
    if (elementQuizCurrent >= 20) {
      return;
    }
    let nextInput = document.getElementById(
      "quizElementInput" + elementQuizCurrent
    );
    nextInput.disabled = false;
    nextInput.focus();
    document.getElementById("quizElementName").innerText =
      nextInput.dataset.elementName;
    timer = parseFloat(window.localStorage.getItem("chem.settings.time"));
  }
  document.getElementById("quizElementTimer").innerText =
    Math.round(timer * 100) / 100;
};
const randomProperty = (obj) => {
  var keys = Object.keys(obj);
  return keys[(keys.length * Math.random()) << 0];
};
startup();
