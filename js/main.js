/*----------------------------------------------------------------------------------------------------------------------
                                                    Initialisation
----------------------------------------------------------------------------------------------------------------------*/

BlocklyStorage.HTTPREQUEST_ERROR = 'Er is een probleem opgetreden tijdens het verwerken van het verzoek.\n';
BlocklyStorage.LINK_ALERT = 'Deel je blokken via deze koppeling:\n\n%1';
BlocklyStorage.HASH_ERROR = '\"%1\" komt helaas niet overeen met een opgeslagen bestand.';
BlocklyStorage.XML_ERROR = 'Je opgeslagen bestand kan niet geladen worden. Is het misschien gemaakt met een andere versie van Blockly?';

Blockly.defineBlocksWithJsonArray([
    {
        "type": "system_has_queue",
        "message0": "Heeft berichten",
        "output": "Boolean",
        "colour": 160,
        "tooltip": "Geeft terug of het systeem berichten heeft of niet.",
        "helpUrl": ""
    },
    {
        "type": "system_queue_length",
        "message0": "Aantal berichten",
        "output": "Number",
        "colour": 160,
        "tooltip": "Geeft terug hoeveel berichten het systeem heeft.",
        "helpUrl": ""
    },
    {
        "type": "system_timeslot",
        "message0": "Tijdslot",
        "output": "Number",
        "colour": 160,
        "tooltip": "Geeft het huidige tijdslot terug.",
        "helpUrl": ""
    },
    {
        "type": "system_count",
        "message0": "Aantal systemen",
        "output": "Number",
        "colour": 160,
        "tooltip": "Geeft het aantal systemen terug.",
        "helpUrl": ""
    },
    {
        "type": "system_no_send",
        "message0": "Niet versturen",
        "previousStatement": null,
        "colour": 160,
        "tooltip": "Laat het systeem niet versturen.",
        "helpUrl": ""
    },
    {
        "type": "system_send",
        "message0": "Versturen",
        "previousStatement": null,
        "colour": 160,
        "tooltip": "Laat het systeem een bericht versturen.",
        "helpUrl": ""
    },
    {
        "type": "system_send_control",
        "message0": "Versturen met controle informatie %1",
        "args0": [
            {
                "type": "input_value",
                "name": "CONTROL",
                "check": "Number"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 160,
        "tooltip": "Laat het systeem een bericht versturen met controle informatie.",
        "helpUrl": ""
    },
    {
        "type": "system_sender",
        "message0": "Heeft verstuurd vorig tijdslot",
        "output": "Boolean",
        "colour": 160,
        "tooltip": "Geeft terug of dit systeem heeft verstuurd in het vorige tijdslot.",
        "helpUrl": ""
    },
    {
        "type": "system_empty_send",
        "message0": "Niks verstuurd vorig tijdslot",
        "output": "Boolean",
        "colour": 160,
        "tooltip": "Geeft terug of er een niks verstuurd is in het vorige tijdslot.",
        "helpUrl": ""
    },
    {
        "type": "system_collision",
        "message0": "Collisie vorig tijdslot",
        "output": "Boolean",
        "colour": 160,
        "tooltip": "Geeft  terug of er een collisie is in het vorige tijdslot.",
        "helpUrl": ""
    },
    {
        "type": "system_success",
        "message0": "Succesvol verstuurd vorig tijdslot",
        "output": "Boolean",
        "colour": 160,
        "tooltip": "Geeft terug of er succesvol verstuurd is in het vorige tijdslot.",
        "helpUrl": ""
    },
    {
        "type": "system_control",
        "message0": "Controle informatie verstuurder vorig tijdslot",
        "output": "Number",
        "colour": 160,
        "tooltip": "Geeft de controle informatie terug van het systeem dat succesvol gestuurd heeft in het vorige tijdslot.",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['system_has_queue'] = function () {
    return ['hasQueue(currentSystem())', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_queue_length'] = function () {
    return ['queueLength(currentSystem())', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_timeslot'] = function () {
    return ['currentTimeslot()', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_count'] = function () {
    return ['systemCount()', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_no_send'] = function () {
    return 'return null;\n';
};

Blockly.JavaScript['system_send'] = function () {
    return 'return 0;\n';
};

Blockly.JavaScript['system_send_control'] = function (block) {
    var control = Blockly.JavaScript.valueToCode(block, 'CONTROL', Blockly.JavaScript.ORDER_ATOMIC);
    return 'return ' + control + ';\n'
};

Blockly.JavaScript['system_sender'] = function () {
    return ['isSender(currentSystem(), currentTimeslot()-1)', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_empty_send'] = function () {
    return ['isEmptySend(currentTimeslot()-1)', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_collision'] = function () {
    return ['isCollision(currentTimeslot()-1)', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_success'] = function () {
    return ['isSuccess(currentTimeslot()-1)', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_control'] = function () {
    return ['getControl(currentTimeslot()-1)', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript.addReservedWords(
    'highlightBlock,send,noSend,nextSystem,nextTimeslot,highlightSystem,hasQueue,isEmptySend,isSuccess,' +
    'isCollision,getSender,currentSystem,currentTimeslot,systemCount,alert,log,infiniteLoopCount'
);
Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';

function initApi(interpreter, scope) {
    interpreter.setProperty(scope, 'highlightBlock', interpreter.createNativeFunction(function (blockId) {
        return workspace.highlightBlock(blockId);
    }));

    interpreter.setProperty(scope, 'send', interpreter.createNativeFunction(function (result) {
        return send(result);
    }));

    interpreter.setProperty(scope, 'noSend', interpreter.createNativeFunction(function () {
        return noSend();
    }));

    interpreter.setProperty(scope, 'nextSystem', interpreter.createNativeFunction(function () {
        return nextSystem();
    }));

    interpreter.setProperty(scope, 'nextTimeslot', interpreter.createNativeFunction(function () {
        return nextTimeslot();
    }));

    interpreter.setProperty(scope, 'highlightSystem', interpreter.createNativeFunction(function (systemId) {
        return highlightSystem(systemId);
    }));

    interpreter.setProperty(scope, 'hasQueue', interpreter.createNativeFunction(function (systemId) {
        return hasQueue(systemId);
    }));

    interpreter.setProperty(scope, 'queueLength', interpreter.createNativeFunction(function (systemId) {
        return queueLength(systemId);
    }));

    interpreter.setProperty(scope, 'getSender', interpreter.createNativeFunction(function (timeslot) {
        return getSender(timeslot);
    }));

    interpreter.setProperty(scope, 'isSender', interpreter.createNativeFunction(function (systemId, timeslot) {
        return isSender(systemId, timeslot);
    }));

    interpreter.setProperty(scope, 'isEmptySend', interpreter.createNativeFunction(function (timeslot) {
        return isEmptySend(timeslot);
    }));

    interpreter.setProperty(scope, 'isCollision', interpreter.createNativeFunction(function (timeslot) {
        return isCollision(timeslot);
    }));

    interpreter.setProperty(scope, 'isSuccess', interpreter.createNativeFunction(function (timeslot) {
        return isSuccess(timeslot);
    }));

    interpreter.setProperty(scope, 'getControl', interpreter.createNativeFunction(function (timeslot) {
        return getControl(timeslot);
    }));

    interpreter.setProperty(scope, 'currentSystem', interpreter.createNativeFunction(function () {
        return currentSystem;
    }));

    interpreter.setProperty(scope, 'currentTimeslot', interpreter.createNativeFunction(function () {
        return currentTimeslot;
    }));

    interpreter.setProperty(scope, 'systemCount', interpreter.createNativeFunction(function () {
        return systemCount;
    }));

    interpreter.setProperty(scope, 'alert', interpreter.createNativeFunction(function (text) {
        return alert(text);
    }));

    interpreter.setProperty(scope, 'log', interpreter.createNativeFunction(function (text) {
        return console.log(text);
    }));
}

var navLevels = document.getElementById('levels');

var simulationVisualisation = document.getElementById('simulationVisualisation');
var simulationBody = document.getElementById('simulationBody');
var runButton = document.getElementById('runButton');
var speedCheck = document.getElementById('speedCheck');
var speedRange = document.getElementById('speedRange');

var headerTable = document.getElementById('headerTable');
var tableHead = document.getElementById('tableHead');
var bodyTable = document.getElementById('bodyTable');
var tableBody = document.getElementById('tableBody');

var simulationText = document.getElementById('simulationText');
var previousButton = document.getElementById('previousButton');
var nextButton = document.getElementById('nextButton');

var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv, {
    toolbox: document.getElementById('toolbox'),
    grid: {spacing: 25, length: 3, colour: '#ccc', snap: true},
    zoom: {controls: true, wheel: true, scaleSpeed: 1.05}
});

if (window.location.hash.length > 1) {
    BlocklyStorage.retrieveXml(window.location.hash.substring(1));
} else {
    try {
        BlocklyStorage.restoreBlocks();
    } catch (e) {
        console.error("Couldn't restore blocks:", e);
        workspace.clear();
    }
}
BlocklyStorage.backupOnUnload();

var onresize = function () {
    simulationBody.style.height = simulationVisualisation.clientHeight - headerTable.offsetHeight + 'px';
    headerTable.style.width = bodyTable.offsetWidth + 'px';

    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
};
addEventListener('resize', onresize, false);
Blockly.svgResize(workspace);

function getParam(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] === variable) {
            return pair[1];
        }
    }
}

function getJson(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText));
    };
    xhr.send();
}

/*----------------------------------------------------------------------------------------------------------------------
                                                      Simulation
----------------------------------------------------------------------------------------------------------------------*/

var level;
var systemCount = 0;
var queueData = {};

var text = [""];
var currentText = 0;

var code = null;
var myInterpreter = null;
var runner = null;

function setLevel(newLevel) {
    if (level !== newLevel) {
        history.pushState({level: newLevel}, 'MAC Protocollen', '?level=' + newLevel);
        loadLevel();
    }
}

function loadLevel() {
    var levelParam = parseInt(getParam('level'));
    level = levelParam ? levelParam : 1;

    getJson('levels/' + level + '.json', function (result) {
        systemCount = result["system_count"];
        queueData = result["queue_data"];
        workspace.updateToolbox(result["toolbox"]);
        text = result["text"];
        currentText = 0;
        updateNavigation();
        updateTableHead();
        updateText();
        codeChanged();
        resetSystem();
    });
}

function updateNavigation() {
    var children = navLevels.children;
    navLevels.firstElementChild.disabled = level === 1;
    navLevels.lastElementChild.disabled = level === children.length - 2;
    for (var i = 1; i < children.length - 1; i++) {
        children[i].className = i === level ? 'yellow' : '';
    }
}

function updateTableHead() {
    var currentSystems = tableHead.cells.length - 2;
    if (currentSystems < systemCount) {
        for (var i = currentSystems; i < systemCount; i++) {
            tableHead.insertCell(i + 1).innerHTML = 'Systeem ' + i;
        }
    } else {
        for (var j = currentSystems; j > systemCount; j--) {
            tableHead.deleteCell(j);
        }
    }
    onresize();
}

function updateText() {
    simulationText.innerHTML = text[currentText];
    previousButton.disabled = currentText <= 0;
    nextButton.disabled = currentText >= text.length - 1;
}

function previousText() {
    if (currentText > 0) {
        currentText -= 1;
    }
    updateText();
}

function nextText() {
    if (currentText < text.length - 1) {
        currentText += 1;
    }
    updateText();
}

loadLevel();
window.onpopstate = loadLevel;

var systemQueue;
var systemData;
var currentSystem;
var currentTimeslot;

function resetSystem() {
    systemQueue = [];
    for (var i = 0; i < systemCount; i++) {
        systemQueue[i] = 0;
    }
    systemData = [];
    currentTimeslot = -1;
    tableBody.innerHTML = '';
}

function send(value) {
    if (hasQueue(currentSystem)) {
        sendData(value);
    } else {
        console.log('Systeem ' + currentSystem + ' in timeslot ' + currentTimeslot +
            ' probeerde te versturen maar had geen data');
        sendData(null);
    }
    nextSystem();
}

function noSend() {
    sendData(null);
    nextSystem();
}

function sendData(value) {
    systemData[currentTimeslot][currentSystem] = value;
    tableBody.rows[currentTimeslot].cells[currentSystem + 1].className = value !== null ? 'green' : 'red';
}

function nextSystem() {
    currentSystem++;
    highlightSystem(currentSystem);
}

function nextTimeslot() {
    currentTimeslot++;
    updateQueue();
    if (!noMoreQueue()) {
        addRow();
        systemData.push([]);
        currentSystem = 0;
        highlightSystem(currentSystem);
        return true;
    } else {
        return false;
    }
}

function addRow() {
    var atBottom = simulationBody.scrollHeight - (simulationBody.clientHeight + simulationBody.scrollTop) <= 1;
    var row = tableBody.insertRow(currentTimeslot);
    row.insertCell(0).innerHTML = currentTimeslot;
    for (var i = 1; i < systemCount + 2; i++) {
        row.insertCell(i);
    }
    if (atBottom) {
        simulationBody.scrollTop = (simulationBody.scrollHeight - simulationBody.clientHeight) + 1;
    }
}

function highlightSystem(systemId) {
    for (var i = 0; i < systemCount; i++) {
        tableHead.cells[i + 1].className = systemId === i ? 'blue' : '';
    }
}

function updateQueue() {
    var previousTimeslot = currentTimeslot - 1;
    if (previousTimeslot >= 0) {
        var sendCell = tableBody.rows[previousTimeslot].cells[systemCount + 1];
        if (isEmptySend(previousTimeslot)) {
            sendCell.innerHTML = '-';
            sendCell.className = 'yellow';
        } else if (isSuccess(previousTimeslot)) {
            sendCell.innerHTML = '&check;';
            sendCell.className = 'green';
            var sender = getSender(previousTimeslot);
            systemQueue[sender] -= 1;
        } else {
            sendCell.innerHTML = '&cross;';
            sendCell.className = 'red';
        }
    }
    addQueueData(currentTimeslot);
}

function addQueueData(timeslot) {
    var newData = queueData[timeslot];
    if (newData) {
        for (var i = 0; i < systemQueue.length; i++) {
            systemQueue[i] += newData[i];
        }
    }
}

function noMoreQueue() {
    return currentTimeslot >= maxQueueTimeslot() && totalQueue() === 0;
}

function totalQueue() {
    return systemQueue.reduce(function (a, b) {
        return a + b;
    }, 0);
}

function maxQueueTimeslot() {
    return Math.max.apply(null, Object.keys(queueData));
}

function queueLength(systemId) {
    return systemQueue[systemId];
}

function hasQueue(systemId) {
    return systemQueue[systemId] > 0;
}

function sendCount(timeslot) {
    if (timeslot < 0) {
        return 0;
    }
    var sendCount = 0;
    var timeslotData = systemData[timeslot];
    for (var i = 0; i < timeslotData.length; i++) {
        if (timeslotData[i] !== null) {
            sendCount++
        }
    }
    return sendCount;
}

function isEmptySend(timeslot) {
    return sendCount(timeslot) === 0;
}

function isSuccess(timeslot) {
    return sendCount(timeslot) === 1;
}

function isCollision(timeslot) {
    return sendCount(timeslot) > 1;
}

function getSender(timeslot) {
    if (isSuccess(timeslot)) {
        var timeslotData = systemData[timeslot];
        for (var i = 0; i < timeslotData.length; i++) {
            if (timeslotData[i] !== null) {
                return i;
            }
        }
    }
}

function getControl(timeslot) {
    if (isSuccess(timeslot)) {
        var timeslotData = systemData[timeslot];
        for (var i = 0; i < timeslotData.length; i++) {
            if (timeslotData[i] !== null) {
                return timeslotData[i];
            }
        }
    }
}

function isSender(systemId, timeslot) {
    return systemId === getSender(timeslot);
}

function codeChanged() {
    var variableCode = '';
    var systemCode = '';

    var blocklyCode = Blockly.JavaScript.workspaceToCode(workspace);
    var splitCode = blocklyCode.split('\n\n\n');
    if (splitCode.length === 1) {
        systemCode = splitCode[0];
    } else if (splitCode.length === 2) {
        var variableNames = splitCode[0].slice(4, -1).split(', ');
        systemCode = splitCode[1];

        for (var i = 0; i < variableNames.length; i++) {
            var variableName = variableNames[i];
            variableCode += 'var ' + variableName + ' = [];\n';
            systemCode = systemCode.replace(new RegExp(variableName, 'g'), variableName + '[currentSystem()]');
        }
    } else {
        console.error("Couldn't parse Blockly code:\n" + blocklyCode);
        systemCode = blocklyCode;
    }
    code = variableCode +
        "var infiniteLoopCount = 0;\n" +
        "while (nextTimeslot()) {\n" +
        "    for (var i = 0; i < " + systemCount + "; i++) {\n" +
        "        var result = simulateSystem();\n" +
        "        if (result === undefined) {\n" +
        "            log('Geen versturen of niet versturen tegengekomen bij systeem ' +\n" +
        "                currentSystem() + ' in timeslot ' + currentTimeslot());\n" +
        "            noSend();\n" +
        "        } else if (result !== null) {\n" +
        "            send(result);\n" +
        "        } else {\n" +
        "            noSend();\n" +
        "        }\n" +
        "    }\n" +
        "   if (isSuccess(currentTimeslot())) {\n" +
        "      infiniteLoopCount = 0;\n" +
        "   } else if (++infiniteLoopCount > 100){\n" +
        "      nextTimeslot();\n" +
        "      alert('100 timeslots niet succesvol verstuurd, simulatie gestopt.');\n" +
        "      break;\n" +
        "   }\n" +
        "}\n" +
        "function simulateSystem() {\n" +
        systemCode +
        "}";
    resetInterpreter();
}

codeChanged();
workspace.addChangeListener(function (event) {
    if (!(event instanceof Blockly.Events.Ui)) {
        codeChanged();
    }
});

function checkChanged() {
    speedRange.disabled = !speedCheck.checked;
}

function runInterpreter() {
    if (!myInterpreter) {
        resetInterpreter();
        resetSystem();
        runButton.innerText = "Stop!";
        runButton.className = "red";
        runButton.onclick = resetInterpreter;
        myInterpreter = new Interpreter(code, initApi);
        runner = function () {
            if (myInterpreter) {
                var hasMore;
                var timeout;
                if (speedCheck.checked) {
                    hasMore = myInterpreter.step();
                    timeout = speedRange.value;
                } else {
                    hasMore = myInterpreter.run();
                    timeout = 0;
                }
                if (hasMore) {
                    setTimeout(runner, timeout);
                } else {
                    resetInterpreter();
                }
            }
        };
        runner();
    }
}

function resetInterpreter() {
    myInterpreter = null;
    if (runner) {
        clearTimeout(runner);
        runner = null;
    }
    workspace.highlightBlock(null);
    runButton.innerText = "Simuleer!";
    runButton.className = "green";
    runButton.onclick = runInterpreter;
}
