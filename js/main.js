'use strict';
/*----------------------------------------------------------------------------------------------------------------------
                                                   Initialisation
----------------------------------------------------------------------------------------------------------------------*/

var LEVELS = 6;

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
        "message0": "Versturen met getal %1",
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
        "message0": "Heeft zelf verstuurd vorig tijdslot",
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
        "message0": "Getal verstuurd vorig tijdslot",
        "output": "Number",
        "colour": 160,
        "tooltip": "Geeft de controle informatie terug van het systeem dat succesvol gestuurd heeft in het vorige tijdslot.",
        "helpUrl": ""
    },
    {
        "type": "math_random_chance",
        "message0": "Kans van %1 %%",
        "args0": [
            {
                "type": "input_value",
                "name": "CHANCE",
                "check": "Number"
            }
        ],
        "inputsInline": true,
        "output": "Boolean",
        "colour": 230,
        "tooltip": "Geeft waar of niet waar terug met de opgegeven willekeurige kans",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['system_has_queue'] = function () {
    return ['hasQueue(currentTimeslot(), currentSystem())', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_queue_length'] = function () {
    return ['queueLength(currentTimeslot(), currentSystem())', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_no_send'] = function () {
    return 'return false;\n';
};

Blockly.JavaScript['system_send'] = function () {
    return 'return true;\n';
};

Blockly.JavaScript['system_send_control'] = function (block) {
    var control = Blockly.JavaScript.valueToCode(block, 'CONTROL', Blockly.JavaScript.ORDER_ATOMIC);
    return 'return ' + control + ';\n'
};

Blockly.JavaScript['system_sender'] = function () {
    return ['hasSend(currentTimeslot()-1, currentSystem())', Blockly.JavaScript.ORDER_FUNCTION_CALL];
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

Blockly.JavaScript['math_random_chance'] = function (block) {
    var chance = Blockly.JavaScript.valueToCode(block, 'CHANCE', Blockly.JavaScript.ORDER_ATOMIC);
    return ['Math.random() * 100 < ' + chance, Blockly.JavaScript.ORDER_RELATIONAL];
};

Blockly.JavaScript.addReservedWords(
    'highlightBlock,send,nextSystem,nextTimeslot,highlightSystem,hasQueue,isEmptySend,isSuccess,isCollision,' +
    'currentSystem,currentTimeslot,systemCount,alert,log,infiniteLoopCount'
);
Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';

function initApi(interpreter, scope) {
    interpreter.setProperty(scope, 'highlightBlock', interpreter.createNativeFunction(function (blockId) {
        return highlightBlock(blockId);
    }));

    interpreter.setProperty(scope, 'highlightSystem', interpreter.createNativeFunction(function (systemId) {
        return highlightSystem(systemId);
    }));

    interpreter.setProperty(scope, 'send', interpreter.createNativeFunction(function (result) {
        return send(result);
    }));

    interpreter.setProperty(scope, 'nextSystem', interpreter.createNativeFunction(function () {
        return nextSystem();
    }));

    interpreter.setProperty(scope, 'nextTimeslot', interpreter.createNativeFunction(function () {
        return nextTimeslot();
    }));

    interpreter.setProperty(scope, 'hasQueue', interpreter.createNativeFunction(function (timeslot, systemId) {
        return hasQueue(timeslot, systemId);
    }));

    interpreter.setProperty(scope, 'queueLength', interpreter.createNativeFunction(function (timeslot, systemId) {
        return queueLength(timeslot, systemId);
    }));

    interpreter.setProperty(scope, 'hasSend', interpreter.createNativeFunction(function (timeslot, systemId) {
        return hasSend(timeslot, systemId);
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

    interpreter.setProperty(scope, 'levelCompleted', interpreter.createNativeFunction(function () {
        return levelCompleted();
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
var resumeButton = document.getElementById('resumeButton');
var stepButton = document.getElementById('stepButton');
var speedSelect = document.getElementById('speedSelect');
var speedRange = document.getElementById('speedRange');

var headerTable = document.getElementById('headerTable');
var tableHead = document.getElementById('tableHead');
var bodyTable = document.getElementById('bodyTable');
var tableBody = document.getElementById('tableBody');

var simulationHelp = document.getElementById('simulationHelp');
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

function restoreWorkspace() {
    if (window.location.hash.length > 1) {
        loadWorkspaceFromDatabase(window.location.hash.substring(1));
    } else {
        try {
            restoreBlocks();
        } catch (e) {
            console.error("Couldn't restore blocks:", e);
            workspace.clear();
        }
    }
    backupOnUnload();
}

restoreWorkspace();

function initNavigation() {
    var html = navLevels.innerHTML;
    var lines = html.split('\n');
    for (var i = 1; i <= LEVELS; i++) {
        lines.splice(i + 1, 0, '<button onclick="setLevel(' + i + ');">' + i + '</button>');
    }
    navLevels.innerHTML = lines.join('\n');
}

initNavigation();

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

/*----------------------------------------------------------------------------------------------------------------------
                                                       Utilities
----------------------------------------------------------------------------------------------------------------------*/

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

function postJson(url, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText));
    };
    xhr.send(JSON.stringify(data));
}

/*----------------------------------------------------------------------------------------------------------------------
                                                       Workspace
----------------------------------------------------------------------------------------------------------------------*/

function removeAttributes(workspace, xml) {
    xml.querySelectorAll("*").forEach(function (block) {
        block.removeAttribute('x');
        block.removeAttribute('y');
        block.removeAttribute('id');
    });
}

function serializeWorkspace(sanitize) {
    var xml = Blockly.Xml.workspaceToDom(workspace);
    if (sanitize) {
        removeAttributes(workspace, xml);
    }
    return Blockly.Xml.domToText(xml);
}

function saveWorkspaceToDatabase() {
    var data = {'workspace': serializeWorkspace(true)};
    postJson('/api/workspace/create.php', data, function (response) {
        var hash = response['id'];
        window.location.hash = hash;
        monitorChanges();
        alert('Deel je blokken via deze koppeling:\n\n%1'.replace('%1', window.location.href));
    });
}

function monitorChanges() {
    var startDom = serializeWorkspace(true);

    function change() {
        var newDom = serializeWorkspace(true);
        if (startDom !== newDom) {
            window.location.hash = '';
            workspace.removeChangeListener(change);
        }
    }

    workspace.addChangeListener(change);
}

function saveWorkspaceToFile() {
    var data = serializeWorkspace(true);
    var blob = new Blob([data], {type: 'application/xml'});
    saveAs(blob, "workspace.xml")
}

function loadWorkspaceFromDatabase(hash) {
    getJson('/api/workspace/read_one.php?id=' + hash, function (response) {
        loadWorkspace(response['workspace']);
        monitorChanges();
    });
}

function loadWorkspaceFromFile(file) {
    var reader = new FileReader();
    reader.onload = function () {
        loadWorkspace(reader.result);
    };
    reader.readAsText(file);
}

function loadWorkspace(text) {
    var dom = Blockly.Xml.textToDom(text);
    workspace.clear();
    Blockly.Xml.domToWorkspace(dom, workspace);
}

function restoreBlocks() {
    var url = window.location.href.split('#')[0];
    if (window.localStorage[url]) {
        loadWorkspace(window.localStorage[url])
    }
}

function backupOnUnload() {
    window.addEventListener('unload', function () {
        var url = window.location.href.split('#')[0];
        window.localStorage.setItem(url, serializeWorkspace(false));
    }, false);
}

/*----------------------------------------------------------------------------------------------------------------------
                                                         Levels
----------------------------------------------------------------------------------------------------------------------*/

var level;
var systemCount = 0;
var queueData = {};

var text = [""];
var currentText = 0;

function setLevel(newLevel) {
    if (level !== newLevel) {
        history.pushState({level: newLevel}, 'MAC Protocollen', '?level=' + newLevel);
        loadLevel();
    }
}

function loadLevel() {
    var levelParam = parseInt(getParam('level'));
    level = levelParam ? levelParam : 1;

    getJson('levels/' + level + '.json', function (response) {
        systemCount = response["system_count"];
        queueData = response["queue_data"];
        workspace.updateToolbox(response["toolbox"]); // TODO: Add advanced mode
        text = response["text"];
        currentText = 0;
        updateNavigation();
        updateTableHead();
        updateHelp();
        codeChanged();
        resetSystem();
    });
}

function levelCompleted() {
    var score = calculateScore();
    submitScore(score, systemQueue, systemData);
    if (level < LEVELS) {
        if (confirm('Score: ' + score + '\nLevel gehaald! Wil je naar het volgende level gaan?')) {
            setLevel(level + 1);
        }
    } else {
        alert('Score: ' + score + '\nLevel gehaald!');
    }
}

function submitScore(score, queue, data) {
    var stats = {
        "score": score,
        "queue": queue,
        "data": data
    };
    postJson('/api/score/create.php', stats, function (response) {
        console.log(response);
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
        for (var i = currentSystems + 1; i <= systemCount; i++) {
            tableHead.insertCell(i).innerHTML = 'Systeem ' + i;
        }
    } else {
        for (var j = currentSystems; j > systemCount; j--) {
            tableHead.deleteCell(j);
        }
    }
    onresize();
}

function updateHelp() {
    if (text === undefined) {
        simulationHelp.hidden = true;
        blocklyArea.style.width = "70%";
    } else {
        simulationHelp.hidden = false;
        blocklyArea.style.width = "50%";
        if (text.length <= 1) {
            previousButton.hidden = true;
            nextButton.hidden = true;
        } else {
            previousButton.hidden = false;
            nextButton.hidden = false;
        }
        changeText()
    }
    onresize();
}

function changeText() {
    simulationText.innerHTML = text[currentText];
    previousButton.disabled = currentText <= 0;
    nextButton.disabled = currentText >= text.length - 1;
}

function previousText() {
    if (currentText > 0) {
        currentText -= 1;
    }
    changeText();
}

function nextText() {
    if (currentText < text.length - 1) {
        currentText += 1;
    }
    changeText();
}

loadLevel();
window.onpopstate = loadLevel;

/*----------------------------------------------------------------------------------------------------------------------
                                                       Simulation
----------------------------------------------------------------------------------------------------------------------*/

var systemQueue;
var systemData;
var currentSystem;
var currentTimeslot;

var newHighlight;

function resetSystem() {
    systemQueue = [];
    systemQueue[0] = [];
    for (var i = 0; i < systemCount; i++) {
        systemQueue[0][i] = 0;
    }
    systemData = [];
    currentTimeslot = -1;
    tableBody.innerHTML = '';
}

function send(value) {
    sendData(value);
    nextSystem();
}

function sendData(value) {
    systemData[currentTimeslot][currentSystem] = value;
    tableBody.rows[currentTimeslot].cells[currentSystem + 1].className = value !== false ? 'blue' : 'gray';
    tableBody.rows[currentTimeslot].cells[currentSystem + 1].innerText = queueLength(currentTimeslot, currentSystem);
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

function highlightBlock(blockId) {
    newHighlight = true;
    return workspace.highlightBlock(blockId);
}

function highlightSystem(systemId) {
    for (var i = 0; i < systemCount; i++) {
        tableHead.cells[i + 1].className = systemId === i ? 'blue' : '';
    }
}

function updateQueue() {
    var previousTimeslot = currentTimeslot - 1;
    if (currentTimeslot > 0) {
        systemQueue.push(systemQueue[previousTimeslot].slice());
    }
    if (previousTimeslot >= 0) {
        var sendCell = tableBody.rows[previousTimeslot].cells[systemCount + 1];
        if (isEmptySend(previousTimeslot)) {
            sendCell.innerHTML = '-';
            sendCell.className = 'yellow';
        } else if (isSuccess(previousTimeslot)) {
            var control = getControl(previousTimeslot);
            sendCell.innerHTML = control === undefined ? '&check;' : '&check; ' + control;
            sendCell.className = 'green';
            var sender = getSender(previousTimeslot);
            if (hasQueue(currentTimeslot, sender)) {
                systemQueue[currentTimeslot][sender] -= 1;
            }
        } else {
            sendCell.innerHTML = '&cross;';
            sendCell.className = 'red';
        }
    }
    addQueueData(currentTimeslot);
}

function addQueueData(timeslot) {
    var newData = queueData[timeslot];
    var currentQueue = systemQueue[timeslot];
    if (newData) {
        for (var i = 0; i < currentQueue.length; i++) {
            currentQueue[i] += newData[i];
        }
    }
}

function noMoreQueue() {
    return currentTimeslot >= maxQueueTimeslot() && totalQueue(currentTimeslot) === 0;
}

function totalQueue(timeslot) {
    return systemQueue[timeslot].reduce(function (a, b) {
        return a + b;
    }, 0);
}

function maxQueueTimeslot() {
    return Math.max.apply(null, Object.keys(queueData));
}

function queueLength(timeslot, systemId) {
    return systemQueue[timeslot][systemId];
}

function hasQueue(timeslot, systemId) {
    return queueLength(timeslot, systemId) > 0;
}

function sendCount(timeslot) {
    if (timeslot < 0) {
        return 0;
    }
    var sendCount = 0;
    var timeslotData = systemData[timeslot];
    for (var i = 0; i < timeslotData.length; i++) {
        if (timeslotData[i] !== false) {
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
            if (timeslotData[i] !== false) {
                return i;
            }
        }
    }
}

function getControl(timeslot) {
    if (isSuccess(timeslot)) {
        var timeslotData = systemData[timeslot];
        for (var i = 0; i < timeslotData.length; i++) {
            if (timeslotData[i] !== false && timeslotData[i] !== true) {
                return timeslotData[i];
            }
        }
    }
}

function hasSend(timeslot, systemId) {
    return systemData[timeslot][systemId] !== false
}

/*----------------------------------------------------------------------------------------------------------------------
                                                        Score
----------------------------------------------------------------------------------------------------------------------*/
function calculateScore() {
    return (calculateEfficiency() * calculateFairness()).toFixed(2);
}

function calculateEfficiency() {
    var dataSlots = 0;
    var successes = 0;
    for (var timeslot = 0; timeslot < currentTimeslot; timeslot++) {
        if (totalQueue(timeslot) > 0) {
            dataSlots += 1;
            if (isSuccess(timeslot)) {
                successes += 1;
            }
        }
    }
    return successes / dataSlots;
}

function countQueue(timeslot) {
    var count = 0;
    for (var system = 0; system < systemCount; system++) {
        if (hasQueue(timeslot, system)) {
            count++;
        }
    }
    return count;
}

function calculateFairness() {
    var systemFairness = [];
    for (var system = 0; system < systemCount; system++) {
        systemFairness[system] = 0;
        for (var timeslot = 0; timeslot < currentTimeslot; timeslot++) {
            if (hasQueue(timeslot, system)) {
                systemFairness[system] -= 1 / countQueue(timeslot);
                if (hasSend(timeslot, system) && isSuccess(timeslot)) {
                    systemFairness[system] += 1;
                }
            }
        }
    }
    return 1000 - systemFairness.reduce(function (a, b) {
        return a + Math.abs(b);
    });
}

/*----------------------------------------------------------------------------------------------------------------------
                                                      Execution
----------------------------------------------------------------------------------------------------------------------*/
var blocklyCode = null;
var code = null;
var myInterpreter = null;
var runner = null;

function codeChanged() {
    var newCode = Blockly.JavaScript.workspaceToCode(workspace);
    if (blocklyCode === newCode) {
        // Code hasn't changed
        return;
    }
    blocklyCode = newCode;

    var variableCode = '';
    var systemCode;
    var splitCode = blocklyCode.split('\n\n\n');
    if (splitCode.length === 1) {
        systemCode = splitCode[0];
    } else if (splitCode.length === 2) {
        var variableNames = splitCode[0].slice(4, -1).split(', ');
        systemCode = splitCode[1];

        for (var i = 0; i < variableNames.length; i++) {
            var variableName = variableNames[i];
            variableCode += 'var ' + variableName + ' = [];\n';
            var variableRegex = new RegExp('\\b' + variableName + '\\b', 'g');
            var newVariableName = variableName + '[currentSystem()]';
            systemCode = systemCode.replace(variableRegex, newVariableName);
        }
    } else {
        console.error("Couldn't parse Blockly code:\n" + blocklyCode);
        systemCode = blocklyCode;
    }
    code = variableCode +
        "var infiniteLoopCount = 0;\n" +
        "while (nextTimeslot()) {\n" +
        "    for (var i = 0; i < systemCount(); i++) {\n" +
        "        var result = simulateSystem();\n" +
        "        if (result === undefined) {\n" +
        "            result = false;\n" +
        "        }\n" +
        "        send(result);\n" +
        "    }\n" +
        "    if (isSuccess(currentTimeslot())) {\n" +
        "        infiniteLoopCount = 0;\n" +
        "    } else if (++infiniteLoopCount > 100){\n" +
        "        nextTimeslot();\n" +
        "        alert('100 timeslots niet succesvol verstuurd, simulatie gestopt.');\n" +
        "        break;\n" +
        "    }\n" +
        "}\n" +
        "if (infiniteLoopCount <= 100) {\n" +
        "    levelCompleted();\n" +
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

function run() {
    if (myInterpreter) {
        var hasMore = true;
        switch (speedSelect.value) {
            case 'timeslot':
                var oldTimeslot = currentTimeslot;
                while (hasMore && oldTimeslot === currentTimeslot) {
                    hasMore = myInterpreter.step();
                }
                break;
            case 'system':
                var oldSystem = currentSystem;
                while (hasMore && oldSystem === currentSystem) {
                    hasMore = myInterpreter.step();
                }
                break;
            case 'block':
                hasMore = step();
                break;
        }
        if (hasMore) {
            runner = setTimeout(run, speedRange.value);
        } else if (myInterpreter) {
            resetInterpreter();
        }
    }
}

function runInterpreter() {
    resetInterpreter();
    resetSystem();
    myInterpreter = new Interpreter(code, initApi);
    startRunner();
}

function resetInterpreter() {
    stopRunner();
    resumeButton.disabled = true;
    stepButton.disabled = true;
    myInterpreter = null;
    workspace.highlightBlock(null);
    for (var i = 0; i < systemCount; i++) {
        tableHead.cells[i + 1].className = '';
    }
}

function startRunner() {
    if (runner === null) {
        runButton.innerText = "Stop!";
        runButton.className = "red";
        runButton.onclick = stopRunner;
        resumeButton.disabled = true;
        stepButton.disabled = true;
        runner = setTimeout(run, 0);
    }
}

function stopRunner() {
    if (runner) {
        clearTimeout(runner);
        runner = null;
        runButton.innerText = "Simuleer!";
        runButton.className = "green";
        runButton.onclick = runInterpreter;
        resumeButton.disabled = false;
        stepButton.disabled = false;
    }
}

function step() {
    if (myInterpreter) {
        var hasMore = true;
        newHighlight = false;
        while (hasMore && !newHighlight) {
            hasMore = myInterpreter.step();
        }
        if (!hasMore) {
            resetInterpreter();
        }
        return hasMore;
    }
}
