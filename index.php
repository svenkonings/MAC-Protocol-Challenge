<!DOCTYPE HTML>
<html lang="nl">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MAC Protocollen</title>
    <script src="js/blockly/blockly_compressed.js"></script>
    <script src="js/blockly/blocks_compressed.js"></script>
    <script src="js/blockly/javascript_compressed.js"></script>
    <script src="js/blockly/appengine/storage.js"></script>
    <script src="js/blockly/msg/js/nl.js"></script>
    <link rel="stylesheet" type="text/css" href="css/main.css" media="all"/>
</head>
<body>
<div id="simulation">
    <div id="simulationVisualisation">
        <table id="headerTable">
            <thead>
            <tr id="tableHead">
                <td>Timeslot</td>
                <td>Systeem 0</td>
                <td>Systeem 1</td>
                <td>Systeem 2</td>
                <td>Systeem 3</td>
                <td>Succes</td>
            </tr>
            </thead>
        </table>
        <div id="simulationBody">
            <table id="bodyTable">
                <tbody id="tableBody"></tbody>
            </table>
        </div>
    </div>
    <div id="simulationControls">
        <br>
        <button id="runButton" class="green" onclick="runInterpreter()">Simuleer!</button>
        <br><br>
        <label for="speedRange">Simulatie snelheid:</label>
        <br>
        <input id="speedRange" type="range" min="0" max="100" step="1" value="100">
    </div>
</div>
<div id="blocklyArea"></div>
<div id="blocklyDiv"></div>
<xml id="toolbox">
    <category name="Systeem" colour="#5ba5a5">
        <block type="system_id"></block>
        <block type="system_sender"></block>
        <block type="system_has_data"></block>
        <block type="system_timeslot"></block>
        <block type="system_count"></block>
        <block type="system_empty_send"></block>
        <block type="system_success"></block>
        <block type="system_collision"></block>
        <block type="system_send"></block>
        <block type="system_no_send"></block>
    </category>
    <category name="Vergelijken" colour="#5C81A6">
        <block type="controls_if"></block>
        <block type="logic_compare">
            <field name="OP">EQ</field>
        </block>
        <block type="logic_operation">
            <field name="OP">AND</field>
        </block>
        <block type="logic_negate"></block>
        <block type="logic_boolean">
            <field name="BOOL">TRUE</field>
        </block>
        <block type="logic_ternary"></block>
    </category>
    <category name="Herhalen" colour="#5CA65C">
        <block type="controls_repeat_ext">
            <value name="TIMES">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="controls_whileUntil">
            <field name="MODE">WHILE</field>
        </block>
        <block type="controls_for">
            <field name="VAR" id="|J?Hr.sg3YqcM7;r_lwy" variabletype="">i</field>
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
            <value name="BY">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="controls_flow_statements">
            <field name="FLOW">BREAK</field>
        </block>
    </category>
    <category name="Berekenen" colour="#5C68A6">
        <block type="math_number">
            <field name="NUM">0</field>
        </block>
        <block type="math_arithmetic">
            <field name="OP">ADD</field>
            <value name="A">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="B">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="math_number_property">
            <mutation divisor_input="false"></mutation>
            <field name="PROPERTY">EVEN</field>
            <value name="NUMBER_TO_CHECK">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="math_modulo">
            <value name="DIVIDEND">
                <shadow type="math_number">
                    <field name="NUM">64</field>
                </shadow>
            </value>
            <value name="DIVISOR">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="math_random_int">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block type="math_random_float"></block>
    </category>
    <category name="Variabelen" colour="#A65C81" custom="VARIABLE"></category>
</xml>
<script src="js/acorn_interpreter.js"></script>
<script src="js/main.js"></script>
</body>
</html>
