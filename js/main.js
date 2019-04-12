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
    return ['id()', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_timeslot'] = function () {
    return ['timeslot()', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_collision'] = function () {
    return ['collision()', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_has_data'] = function () {
    return ['has_data(id())', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_send'] = function () {
    return ['send(id());\n', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['system_no_send'] = function () {
    return ['no_send(id());\n', Blockly.JavaScript.ORDER_FUNCTION_CALL];
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

var current_system = 0;
var current_timeslot = 0;
var collision_previous_timeslot = false;
var system_data = [];

function initApi(interpreter, scope) {
    interpreter.setProperty(scope, 'highlightBlock', interpreter.createNativeFunction(function (id) {
        return workspace.highlightBlock(id);
    }));

    interpreter.setProperty(scope, 'id', interpreter.createNativeFunction(function () {
        return current_system;
    }));

    interpreter.setProperty(scope, 'timeslot', interpreter.createNativeFunction(function () {
        return current_timeslot;
    }));

    interpreter.setProperty(scope, 'collision', interpreter.createNativeFunction(function () {
        return collision_previous_timeslot;
    }));

    interpreter.setProperty(scope, 'has_data', interpreter.createNativeFunction(function (id) {
        return system_data[id] > 0;
    }));

    interpreter.setProperty(scope, 'send', interpreter.createNativeFunction(function (id) {
        return send(id);
    }));

    interpreter.setProperty(scope, 'no_send', interpreter.createNativeFunction(function (id) {
        return no_send(id);
    }));
}

function send(id) {

}

function no_send(id) {

}

function codeChanged() {
    code = Blockly.JavaScript.workspaceToCode(workspace);
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
                    resetInterpreter()
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
