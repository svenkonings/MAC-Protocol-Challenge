var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv, {
    toolbox: document.getElementById('toolbox'),
    grid: {spacing: 25, length: 3, colour: '#ccc', snap: true},
    zoom: {controls: true, wheel: true, scaleSpeed: 1.05}
});
window.setTimeout(BlocklyStorage.restoreBlocks, 0);
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
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);

Blockly.JavaScript.addReservedWords('highlightBlock');
Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';

function initApi(interpreter, scope) {
    // Add an API function for the alert() block.
    var alertWrapper = function (text) {
        return alert(arguments.length ? text : '');
    };
    interpreter.setProperty(scope, 'alert', interpreter.createNativeFunction(alertWrapper));

    // Add an API function for the prompt() block.
    var promptWrapper = function (text) {
        return prompt(text);
    };
    interpreter.setProperty(scope, 'prompt', interpreter.createNativeFunction(promptWrapper));

    // Add an API function for highlighting blocks.
    var highlightWrapper = function (id) {
        return workspace.highlightBlock(id);
    };
    interpreter.setProperty(scope, 'highlightBlock', interpreter.createNativeFunction(highlightWrapper));
}

var code = null;
var myInterpreter = null;
var runner = null;
var runButton = document.getElementById('runButton');
var speedRange = document.getElementById('speedRange');

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