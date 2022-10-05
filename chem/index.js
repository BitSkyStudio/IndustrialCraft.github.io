const chemicalElements = {
    Vodík: { s: "H", x: 0, y: 0 },
    Lítium: { s: "Li", x: 0, y: 1 },
    Sodík: { s: "Na", x: 0, y: 2 },
    Draslík: { s: "K", x: 0, y: 3 },
    Rubídium: { s: "Rb", x: 0, y: 4 },
    Cézium: { s: "Cs", x: 0, y: 5 },
    Francium: { s: "Fr", x: 0, y: 6 },
    Berílium: { s: "Be", x: 1, y: 1 },
    Horčík: { s: "Mg", x: 1, y: 2 },
    Vápnik: { s: "Ca", x: 1, y: 3 },
    Stroncium: { s: "Sr", x: 1, y: 4 },
    Bárium: { s: "Ba", x: 1, y: 5 },
    Rádium: { s: "Ra", x: 1, y: 6 },
    Bór: { s: "B", x: 12, y: 1 },
    Hliník: { s: "Al", x: 12, y: 2 },
    Gálium: { s: "Ga", x: 12, y: 3 },
    Indium: { s: "In", x: 12, y: 4 },
    Tálium: { s: "Tl", x: 12, y: 5 },
    Uhlík: { s: "C", x: 13, y: 1 },
    Kremík: { s: "Si", x: 13, y: 2 },
    Germánium: { s: "Ge", x: 13, y: 3 },
    Cín: { s: "Sn", x: 13, y: 4 },
    Olovo: { s: "Pb", x: 13, y: 5 },
    Dusík: { s: "N", x: 14, y: 1 },
    Fosfor: { s: "P", x: 14, y: 2 },
    Arzén: { s: "As", x: 14, y: 3 },
    Antimón: { s: "Sb", x: 14, y: 4 },
    Bizmut: { s: "Bi", x: 14, y: 5 },
    Kyslík: { s: "O", x: 15, y: 1 },
    Síra: { s: "S", x: 15, y: 2 },
    Selén: { s: "Se", x: 15, y: 3 },
    Telúr: { s: "Te", x: 15, y: 4 },
    Polónium: { s: "Po", x: 15, y: 5 },
    Fluór: { s: "F", x: 16, y: 1 },
    Chlór: { s: "Cl", x: 16, y: 2 },
    Bróm: { s: "Br", x: 16, y: 3 },
    Jód: { s: "I", x: 16, y: 4 },
    Astát: { s: "At", x: 16, y: 5 },
    Hélium: { s: "He", x: 17, y: 0 },
    Neón: { s: "Ne", x: 17, y: 1 },
    Argón: { s: "Ar", x: 17, y: 2 },
    Kryptón: { s: "Kr", x: 17, y: 3 },
    Xenón: { s: "Xe", x: 17, y: 4 },
    Radón: { s: "Rn", x: 17, y: 5 },
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
            window.localStorage.setItem("chem.settings.time", document.getElementById("settingsTimeInput").value);
            swapContent(createElementQuiz());
            tickingInterval = setInterval(() => elementQuizTick(), 10);
            let firstInput = document.getElementById("quizElementInput0");
            firstInput.disabled = false;
            firstInput.focus();
            document.getElementById("quizElementName").innerText = firstInput.dataset.elementName;
        };
        settingsContainer.append(startButton);
    }
    {
        const startButton = document.createElement("button");
        startButton.innerText = "Start Game2";
        startButton.onclick = () => {
            swapContent(createPeriodicQuiz());
            let allElements = Object.keys(chemicalElements);
            for (let i = 0; i < 20; i++) {
                let randomElement = allElements.random();
                chosenElements.push(randomElement);
                allElements = allElements.filter((e) => e !== randomElement);
            }
            for (let elem in chemicalElements) {
                const element = document.getElementById("periodicTableElement" + chemicalElements[elem].x + "_" + chemicalElements[elem].y).firstChild;
                element.dataset.elementId = chemicalElements[elem].s;
            }
            for (let e of document.getElementsByClassName("periodicTableElement")) {
                if (e.firstChild !== null && e.firstChild.dataset !== undefined && e.firstChild.dataset.elementId === undefined) e.firstChild.remove();
            }
            document.getElementById("periodicElementName").innerText = chosenElements[0];
            chosenElements.shift();
        };
        settingsContainer.append(startButton);
    }
    return settingsContainer;
};
let chosenElements = [];
const swapContent = (content) => {
    if (tickingInterval !== null) clearInterval(tickingInterval);
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
    elementQuizContainer.id = "quizContainer";
    const elementName = document.createElement("h1");
    elementName.id = "quizElementName";
    elementQuizContainer.append(elementName);
    const elementTimer = document.createElement("h2");
    elementTimer.id = "quizElementTimer";
    elementTimer.innerText = window.localStorage.getItem("chem.settings.time");
    elementQuizContainer.append(elementTimer);
    let allElements = Object.keys(chemicalElements);
    for (let i = 0; i < 20; i++) {
        let randomElement = allElements.random();
        allElements = allElements.filter((e) => e !== randomElement);
        let elementInput = document.createElement("input");
        elementInput.id = "quizElementInput" + i;
        elementInput.disabled = true;
        elementInput.dataset.elementName = randomElement;
        elementInput.dataset.elementId = chemicalElements[randomElement].s;
        elementInput.onkeydown = (event) => {
            if (event.key === "Enter") {
                document.getElementById("quizElementTimer").innerText = "0";
            }
        };
        elementQuizContainer.append(elementInput);
    }
    return elementQuizContainer;
};
const elementQuizTick = () => {
    let timer = parseFloat(document.getElementById("quizElementTimer").innerText);
    timer -= 0.01;
    if (timer <= 0) {
        if (elementQuizCurrent >= 20) return;
        const beforeInput = document.getElementById("quizElementInput" + elementQuizCurrent);
        beforeInput.disabled = true;
        const correctAnswear = beforeInput.value.toLowerCase() === beforeInput.dataset.elementId.toLowerCase() ? null : beforeInput.dataset.elementId;
        beforeInput.style.backgroundColor = correctAnswear === null ? "green" : "red";
        if (correctAnswear !== null) beforeInput.value = beforeInput.value + "(" + correctAnswear + ")";
        elementQuizCurrent++;
        if (elementQuizCurrent >= 20) {
            const returnButton = document.createElement("button");
            returnButton.innerText = "Go back";
            returnButton.onclick = () => {
                swapContent(createSettings());
            };
            document.getElementById("quizContainer").append(returnButton);
            return;
        }
        let nextInput = document.getElementById("quizElementInput" + elementQuizCurrent);
        nextInput.disabled = false;
        nextInput.focus();
        document.getElementById("quizElementName").innerText = nextInput.dataset.elementName;
        timer = parseFloat(window.localStorage.getItem("chem.settings.time"));
    }
    document.getElementById("quizElementTimer").innerText = Math.round(timer * 100) / 100;
};
const periodicElementClick = (x, y) => {
    const clickedElement = document.getElementById("periodicTableElement" + x + "_" + y);
    const periodicName = document.getElementById("periodicElementName");
    if (clickedElement.firstChild.dataset.elementId === chemicalElements[periodicName.innerText].s) {
        clickedElement.firstChild.innerText = clickedElement.firstChild.dataset.elementId;
        if (chosenElements.length > 0) {
            periodicName.innerText = chosenElements[0];
            chosenElements.shift();
        } else {
            periodicName.innerText = "";
            const returnButton = document.createElement("button");
            returnButton.innerText = "Go back";
            returnButton.onclick = () => {
                swapContent(createSettings());
            };
            document.getElementById("periodicQuizContainer").append(returnButton);
        }
    } else {
        if (clickedElement.firstChild.innerText === "") {
            clickedElement.firstChild.innerText = clickedElement.firstChild.dataset.elementId;
            clickedElement.firstChild.style.color = "red";
            setTimeout(() => {
                if (clickedElement.firstChild.style.color === "red") {
                    clickedElement.firstChild.style.color = "black";
                    clickedElement.firstChild.innerText = "";
                }
            }, 500);
        }
    }
};
const createPeriodicQuiz = () => {
    const periodicQuizContainer = document.createElement("div");
    periodicQuizContainer.id = "periodicQuizContainer";
    const elementName = document.createElement("h1");
    elementName.id = "periodicElementName";
    periodicQuizContainer.append(elementName);
    const periodic = createTable(18, 9, periodicElementClick, (x, y) => {
        if (x == 0 && y == 0) return "";
        return x > y ? (x >= 3 && x <= 12 ? (x >= 8 && x <= 10 ? 8 : x > 10 ? x - 10 : x) + "B" : (x >= 13 ? x - 10 : x) + "A") : y;
    });
    periodicQuizContainer.append(periodic);
    return periodicQuizContainer;
};
const createTable = (width, height, clickCallback, namingCreator) => {
    const table = document.createElement("table");
    table.id = "periodicTable";
    const firstRow = document.createElement("tr");
    firstRow.classList.add("periodicTop");
    for (let x = 0; x <= width; x++) {
        const col = document.createElement("th");
        const rowNaming = document.createElement("h2");
        rowNaming.classList.add("periodicTableElement");
        rowNaming.innerText = namingCreator(x, 0);
        col.append(rowNaming);
        firstRow.append(col);
    }
    table.append(firstRow);
    for (let y = 0; y < height; y++) {
        const row = document.createElement("tr");
        {
            const rowNaming = document.createElement("h2");
            rowNaming.classList.add("periodicTableElement");
            rowNaming.innerText = namingCreator(0, y + 1);
            row.append(rowNaming);
        }
        for (let x = 0; x < width; x++) {
            const col = document.createElement("th");
            const button = document.createElement("button");
            button.innerText = "";
            button.onclick = () => clickCallback(x, y);
            col.append(button);
            col.id = "periodicTableElement" + x + "_" + y;
            col.classList.add("periodicTableElement");
            row.append(col);
        }
        table.append(row);
    }
    return table;
};
Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};
startup();
