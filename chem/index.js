const chemicalElements = {
    Vodík: { s: "H", x: 0, y: 0, b: false },
    Lítium: { s: "Li", x: 0, y: 1, b: false },
    Sodík: { s: "Na", x: 0, y: 2, b: false },
    Draslík: { s: "K", x: 0, y: 3, b: false },
    Rubídium: { s: "Rb", x: 0, y: 4, b: false },
    Cézium: { s: "Cs", x: 0, y: 5, b: false },
    Francium: { s: "Fr", x: 0, y: 6, b: false },
    Berílium: { s: "Be", x: 1, y: 1, b: false },
    Horčík: { s: "Mg", x: 1, y: 2, b: false },
    Vápnik: { s: "Ca", x: 1, y: 3, b: false },
    Stroncium: { s: "Sr", x: 1, y: 4, b: false },
    Bárium: { s: "Ba", x: 1, y: 5, b: false },
    Rádium: { s: "Ra", x: 1, y: 6, b: false },
    Skandium: { s: "Sc", x: 2, y: 3, b: true },
    Ytrium: { s: "Y", x: 2, y: 4, b: true },
    Titán: { s: "Ti", x: 3, y: 3, b: true },
    Zirkónium: { s: "Zr", x: 3, y: 4, b: true },
    Hafnium: { s: "Hf", x: 3, y: 5, b: true },
    Rutherfordium: { s: "Rf", x: 3, y: 6, b: true },
    Vanád: { s: "V", x: 4, y: 3, b: true },
    Niób: { s: "Nb", x: 4, y: 4, b: true },
    Tantal: { s: "Ta", x: 4, y: 5, b: true },
    Dubnium: { s: "Db", x: 4, y: 6, b: true },
    Chróm: { s: "Cr", x: 5, y: 3, b: true },
    Molybdén: { s: "Mo", x: 5, y: 4, b: true },
    Volfrám: { s: "W", x: 5, y: 5, b: true },
    Seaborgium: { s: "Sg", x: 5, y: 6, b: true },
    Mangán: { s: "Mn", x: 6, y: 3, b: true },
    Technécium: { s: "Tc", x: 6, y: 4, b: true },
    Rénium: { s: "Re", x: 6, y: 5, b: true },
    Bohrium: { s: "Bh", x: 6, y: 6, b: true },
    Železo: { s: "Fe", x: 7, y: 3, b: true },
    Ruténium: { s: "Ru", x: 7, y: 4, b: true },
    Osmium: { s: "Os", x: 7, y: 5, b: true },
    Hásium: { s: "Hs", x: 7, y: 6, b: true },
    Kobalt: { s: "Co", x: 8, y: 3, b: true },
    Ródium: { s: "Rh", x: 8, y: 4, b: true },
    Irídium: { s: "Ir", x: 8, y: 5, b: true },
    Meitnérium: { s: "Mt", x: 8, y: 6, b: true },
    Nikel: { s: "Ni", x: 9, y: 3, b: true },
    Paládium: { s: "Pd", x: 9, y: 4, b: true },
    Platina: { s: "Pt", x: 9, y: 5, b: true },
    Darmštátium: { s: "Ds", x: 9, y: 6, b: true },
    Meď: { s: "Cu", x: 10, y: 3, b: true },
    Striebro: { s: "Ag", x: 10, y: 4, b: true },
    Zlato: { s: "Au", x: 10, y: 5, b: true },
    Röntgenium: { s: "Rg", x: 10, y: 6, b: true },
    Zinok: { s: "Zn", x: 11, y: 3, b: true },
    Kadmium: { s: "Cd", x: 11, y: 4, b: true },
    Ortuť: { s: "Hg", x: 11, y: 5, b: true },
    Kopernícium: { s: "Cn", x: 11, y: 6, b: true },
    Bór: { s: "B", x: 12, y: 1, b: false },
    Hliník: { s: "Al", x: 12, y: 2, b: false },
    Gálium: { s: "Ga", x: 12, y: 3, b: false },
    Indium: { s: "In", x: 12, y: 4, b: false },
    Tálium: { s: "Tl", x: 12, y: 5, b: false },
    Uhlík: { s: "C", x: 13, y: 1, b: false },
    Kremík: { s: "Si", x: 13, y: 2, b: false },
    Germánium: { s: "Ge", x: 13, y: 3, b: false },
    Cín: { s: "Sn", x: 13, y: 4, b: false },
    Olovo: { s: "Pb", x: 13, y: 5, b: false },
    Dusík: { s: "N", x: 14, y: 1, b: false },
    Fosfor: { s: "P", x: 14, y: 2, b: false },
    Arzén: { s: "As", x: 14, y: 3, b: false },
    Antimón: { s: "Sb", x: 14, y: 4, b: false },
    Bizmut: { s: "Bi", x: 14, y: 5, b: false },
    Kyslík: { s: "O", x: 15, y: 1, b: false },
    Síra: { s: "S", x: 15, y: 2, b: false },
    Selén: { s: "Se", x: 15, y: 3, b: false },
    Telúr: { s: "Te", x: 15, y: 4, b: false },
    Polónium: { s: "Po", x: 15, y: 5, b: false },
    Fluór: { s: "F", x: 16, y: 1, b: false },
    Chlór: { s: "Cl", x: 16, y: 2, b: false },
    Bróm: { s: "Br", x: 16, y: 3, b: false },
    Jód: { s: "I", x: 16, y: 4, b: false },
    Astát: { s: "At", x: 16, y: 5, b: false },
    Hélium: { s: "He", x: 17, y: 0, b: false },
    Neón: { s: "Ne", x: 17, y: 1, b: false },
    Argón: { s: "Ar", x: 17, y: 2, b: false },
    Kryptón: { s: "Kr", x: 17, y: 3, b: false },
    Xenón: { s: "Xe", x: 17, y: 4, b: false },
    Radón: { s: "Rn", x: 17, y: 5, b: false },
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
        const checkBox = document.createElement("input");
        const label = document.createElement("label");
        label.innerText = "B group ";
        checkBox.id = "useBGroup";
        checkBox.type = "checkbox";
        let storedBool = window.localStorage.getItem("chem.settings.useBGroup");

        if (storedBool === null) storedBool = "false";
        checkBox.checked = storedBool == "false" ? false : true;

        settingsContainer.append(checkBox);
        settingsContainer.append(label);
    }
    {
        const textInput = document.createElement("input");
        textInput.id = "settingsElementCondition";
        let storedCond = window.localStorage.getItem("chem.settings.elemCond");
        if (storedCond === null) storedCond = "true";
        textInput.value = storedCond;
        settingsContainer.append(textInput);
    }

    {
        const startButton = document.createElement("button");
        startButton.innerText = "Start Game";
        startButton.onclick = () => {
            window.localStorage.setItem("chem.settings.time", document.getElementById("settingsTimeInput").value);
            window.localStorage.setItem("chem.settings.useBGroup", document.getElementById("useBGroup").checked);
            window.localStorage.setItem("chem.settings.elemCond", document.getElementById("settingsElementCondition").value);
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
            window.localStorage.setItem("chem.settings.time", document.getElementById("settingsTimeInput").value);
            window.localStorage.setItem("chem.settings.useBGroup", document.getElementById("useBGroup").checked);
            window.localStorage.setItem("chem.settings.elemCond", document.getElementById("settingsElementCondition").value);

            swapContent(createPeriodicQuiz());
            let allElements = Object.keys(chemicalElements);
            allElements = allElements.filter((n) => {
                let e = chemicalElements[n];
                return eval(window.localStorage.getItem("chem.settings.elemCond"));
            });
            for (let elem of allElements) {
                const element = document.getElementById("periodicTableElement" + chemicalElements[elem].x + "_" + chemicalElements[elem].y).firstChild;
                element.dataset.elementId = chemicalElements[elem].s;
            }
            for (let i = 0; i < 20; i++) {
                let randomElement = allElements.random();

                while (chemicalElements[randomElement].b && window.localStorage.getItem("chem.settings.useBGroup") == "false") {
                    randomElement = allElements.random();
                }

                chosenElements.push(randomElement);
                allElements = allElements.filter((e) => e !== randomElement);
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
    allElements = allElements.filter((e) => {
        return eval(window.localStorage.getItem("chem.settings.elemCond"));
    });

    for (let i = 0; i < 20; i++) {
        let randomElement = allElements.random();

        while (chemicalElements[randomElement].b && window.localStorage.getItem("chem.settings.useBGroup") == "false") {
            randomElement = allElements.random();
        }
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
            let skip = false;
            if (window.localStorage.getItem("chem.settings.useBGroup") == "false") {
                for (const element in chemicalElements) {
                    const propElement = chemicalElements[element];
                    if (propElement.x == x && propElement.y == y && !propElement.b) {
                        skip = true;
                        break;
                    }
                }
            }

            const col = document.createElement("th");
            const button = document.createElement("button");

            button.innerText = "";

            if ((window.localStorage.getItem("chem.settings.useBGroup") == "false" && skip) || window.localStorage.getItem("chem.settings.useBGroup") == "true")
                button.onclick = () => clickCallback(x, y);
            else button.innerText = "X";

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
