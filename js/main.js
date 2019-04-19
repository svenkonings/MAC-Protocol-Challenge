Blockly.defineBlocksWithJsonArray([
    {
        "type": "system_number",
        "message0": "Systeemnummer",
        "output": "Number",
        "colour": 160,
        "tooltip": "Geef het nummer van het systeem terug.",
        "helpUrl": ""
    },
    {
        "type": "system_timeslot",
        "message0": "Tijdslot",
        "output": "Number",
        "colour": 160,
        "tooltip": "Geeft het huidige tijdslot terug",
        "helpUrl": ""
    },
    {
        "type": "system_collision",
        "message0": "Collisie vorig tijdslot",
        "output": "Boolean",
        "colour": 160,
        "tooltip": "Geeft  terug of er een collisie was in het vorige tijdslot.",
        "helpUrl": ""
    },
    {
        "type": "system_has_data",
        "message0": "Heeft data",
        "output": "Boolean",
        "colour": 160,
        "tooltip": "Geeft terug of het systeem data heeft of niet.",
        "helpUrl": ""
    },
    {
        "type": "system_send",
        "message0": "Versturen",
        "previousStatement": null,
        "colour": 160,
        "tooltip": "Laat het systeem data versturen.",
        "helpUrl": ""
    },
    {
        "type": "system_no_send",
        "message0": "Niet versturen",
        "previousStatement": null,
        "colour": 160,
        "tooltip": "Laat het systeem niet versturen.",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['system_number'] = function () {
    return ['currentSystem()', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_timeslot'] = function () {
    return ['currentTimeslot()', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_collision'] = function () {
    return ['hasCollision(currentTimeslot()-1)', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_has_data'] = function () {
    return ['hasQueue(currentSystem())', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_send'] = function () {
    return 'return true;\n';
};

Blockly.JavaScript['system_no_send'] = function () {
    return 'return false;\n';
};

var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv, {
    toolbox: document.getElementById('toolbox'),
    grid: {spacing: 25, length: 3, colour: '#ccc', snap: true},
    zoom: {controls: true, wheel: true, scaleSpeed: 1.05}
});
setTimeout(BlocklyStorage.restoreBlocks, 0);
BlocklyStorage.backupOnUnload();

var onresize = function () {
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
onresize();
Blockly.svgResize(workspace);

Blockly.JavaScript.addReservedWords('highlightBlock');
Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';

var code = null;
var myInterpreter = null;
var runner = null;
var runButton = document.getElementById('runButton');
var speedRange = document.getElementById('speedRange');

var SYSTEM_COUNT = 4;
var QUEUE_DATA = {
    0: [5, 0, 10, 0],
    5: [5, 5, 0, 0],
    10: [0, 0, 0, 5],
    15: [0, 0, 0, 5],
    20: [0, 10, 0, 0],
    25: [0, 0, 5, 0]
};

var systemQueue;
var systemData;
var currentSystem;
var currentTimeslot;

function reset() {
    systemQueue = [0, 0, 0, 0];
    systemData = [];
    currentTimeslot = -1;
}

function send() {
    if (hasQueue(currentSystem)) {
        systemData[currentTimeslot][currentSystem] = true;
        // TODO: Update page
    } else {
        // TODO: Warning: System tried to sent but there was no data
        systemData[currentTimeslot][currentSystem] = false;
    }
    nextSystem();
}

function noSend() {
    systemData[currentTimeslot][currentSystem] = false;
    // TODO: Update page
    nextSystem();
}

function nextSystem() {
    currentSystem++;
    highlightSystem(currentSystem);
}

function nextTimeslot() {
    currentTimeslot++;
    updateQueue();
    if (!noMoreQueue()) {
        systemData.push([]);
        currentSystem = 0;
        highlightSystem(currentSystem);
        return true;
    } else {
        return false;
    }
}

function highlightSystem(systemId) {
    // TODO: Update page
}

function updateQueue() {
    var previousTimeslot = currentTimeslot - 1;
    if (previousTimeslot >= 0 && successfulSend(previousTimeslot)) {
        var sender = findFirstSend(previousTimeslot);
        systemQueue[sender] -= 1;
    }
    addQueueData(currentTimeslot);
}

function addQueueData(timeslot) {
    var newData = QUEUE_DATA[timeslot];
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
    return Math.max.apply(null, Object.keys(QUEUE_DATA));
}

function hasQueue(systemId) {
    return systemQueue[systemId] > 0;
}

function findFirstSend(timeslot) {
    var timeslotData = systemData[timeslot];
    for (var i = 0; i < timeslotData.length; i++) {
        if (timeslotData[i]) {
            return i;
        }
    }
}

function sendCount(timeslot) {
    var sendCount = 0;
    var timeslotData = systemData[timeslot];
    for (var i = 0; i < timeslotData.length; i++) {
        if (timeslotData[i]) {
            sendCount++
        }
    }
    return sendCount;
}

function successfulSend(timeslot) {
    return sendCount(timeslot) === 1;
}

function hasCollision(timeslot) {
    return sendCount(timeslot) > 1;
}

function initApi(interpreter, scope) {
    interpreter.setProperty(scope, 'highlightBlock', interpreter.createNativeFunction(function (blockId) {
        return workspace.highlightBlock(blockId);
    }));

    interpreter.setProperty(scope, 'reset', interpreter.createNativeFunction(function () {
        return reset();
    }));

    interpreter.setProperty(scope, 'send', interpreter.createNativeFunction(function () {
        return send();
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

    interpreter.setProperty(scope, 'hasCollision', interpreter.createNativeFunction(function (timeslot) {
        return hasCollision(timeslot);
    }));

    interpreter.setProperty(scope, 'currentSystem', interpreter.createNativeFunction(function () {
        return currentSystem;
    }));

    interpreter.setProperty(scope, 'currentTimeslot', interpreter.createNativeFunction(function () {
        return currentTimeslot;
    }));
}

function codeChanged() {
    // TODO: Warning if result is undefined
    code =
        "reset();\n" +
        "while (nextTimeslot()) {\n" +
        "    for (var i = 0; i < " + SYSTEM_COUNT + "; i++) {\n" +
        "        var result = simulateSystem();\n" +
        "        if (result) {\n" +
        "            send();\n" +
        "        } else {\n" +
        "            noSend();\n" +
        "        }\n" +
        "    }\n" +
        "}\n" +
        "function simulateSystem() {\n" +
        Blockly.JavaScript.workspaceToCode(workspace) +
        "}";
    resetInterpreter();
}

codeChanged();
workspace.addChangeListener(function (event) {
    if (!(event instanceof Blockly.Events.Ui)) {
        codeChanged();
    }
});

function runInterpreter() {
    if (!myInterpreter) {
        resetInterpreter();
        runButton.innerText = "Stop!";
        runButton.className = "red";
        runButton.onclick = resetInterpreter;
        myInterpreter = new Interpreter(code, initApi);
        runner = function () {
            if (myInterpreter) {
                var hasMore = myInterpreter.step();
                if (hasMore) {
                    setTimeout(runner, speedRange.max - speedRange.value);
                } else {
                    resetInterpreter();
                }
            }
        };
        setTimeout(runner, speedRange.max - speedRange.value);
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
