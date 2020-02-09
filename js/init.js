'use strict';

// Levels

var LEVELS = [
    {
        "system_count": 1,
        "queue_data": {
            "0":[15]
        },
        "toolbox": "<xml id=\"toolbox\"><category name=\"Systeem\" colour=\"#5ba5a5\"><block type=\"system_send\"></block><block type=\"system_no_send\"></block></category></xml>",
        "text": [
            "Gebruik het <svg width=\"83px\" height=\"24px\"><g><path class=\"blocklyPathDark\" transform=\"translate(1,1)\" fill=\"#498470\" d=\"m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 82.74870300292969 v 24 H 8 a 8,8 0 0,1 -8,-8 z\"></path><path class=\"blocklyPath\" stroke=\"none\" fill=\"#5ba58c\" d=\"m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 82.74870300292969 v 24 H 8 a 8,8 0 0,1 -8,-8 z\"></path><path class=\"blocklyPathLight\" stroke=\"#8cc0af\" d=\"m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 82.24870300292969 M 82.24870300292969,0.5 M 2.6966991411008934,21.303300858899107 A 7.5,7.5 0 0,1 0.5,16 V 8\"></path><text class=\"blocklyText\" y=\"12.5\" transform=\"translate(10,5)\">Versturen</text></g></svg> blok om een systeem data te laten versturen.<br><br>Klik op de Simuleer! knop om de simulatie te starten."
        ]
    },
    {
        "system_count": 2,
        "queue_data": {
            "0":[10,10]
        },
        "toolbox": "<xml id=\"toolbox\"><category name=\"Systeem\" colour=\"#5ba5a5\"><block type=\"system_send\"></block><block type=\"system_no_send\"></block></category><category name=\"Logica\" colour=\"#5C81A6\"><block type=\"controls_if\"></block></category><category name=\"Rekenen\" colour=\"#5C68A6\"><block type=\"math_random_chance\"><value name=\"CHANCE\"><shadow type=\"math_number\"><field name=\"NUM\">50</field></shadow></value></block></category></xml>",
        "text": [
            "Als twee systemen tegelijk proberen te versturen mislukt het, omdat ze door elkaar heen \"praten\". Dit noemen we een collisie.<br><br>De makkelijkste manier om collisies te voorkomen is door de systemen een willekeurige kans geven te versturen. Dit zorgt ervoor dat ze niet telkens tegelijk proberen te versturen.",
            "Alles wat in het <svg width=\"100px\" height=\"63px\"><g><path class=\"blocklyPathDark\" transform=\"translate(1,1)\" fill=\"#496684\" d=\"m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 98.07441711425781 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 4 H 98.07441711425781 l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8 v 8 a 8,8 0 0,0 8,8 H 98.07441711425781 v 10 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z\"></path><path class=\"blocklyPath\" stroke=\"none\" fill=\"#5b80a5\" d=\"m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 98.07441711425781 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 4 H 98.07441711425781 l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8 v 8 a 8,8 0 0,0 8,8 H 98.07441711425781 v 10 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z\"></path><path class=\"blocklyPathLight\" stroke=\"#8ca6c0\" d=\"m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 97.57441711425781 M 97.57441711425781,0.5 M 93.07441711425781,19.3 l 3.68,-2.1 M 97.57441711425781,24.5 M 70.06400947417215,46.01040764008565 a 8.5,8.5 0 0,0 6.0104076400856545,2.4895923599143455 H 97.57441711425781 M 2.6966991411008934,55.30330085889911 A 7.5,7.5 0 0,1 0.5,50 V 8\"></path><g class=\"blocklyIconGroup\" display=\"block\" transform=\"translate(10,5)\"><rect class=\"blocklyIconShape\" rx=\"4\" ry=\"4\" height=\"16\" width=\"16\"></rect><path class=\"blocklyIconSymbol\" d=\"m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z\"></path><circle class=\"blocklyIconShape\" r=\"2.7\" cx=\"8\" cy=\"8\"></circle></g><g transform=\"translate(37,5)\"><text class=\"blocklyText\" y=\"12.5\">als</text></g><g transform=\"translate(10,29)\"><text class=\"blocklyText\" y=\"12.5\">voer&nbsp;uit</text></g></g></svg> blok staat wordt alleen uitgevoerd als hetgene wat in het bovenste gedeeldte staat waar is.<br><br>Het tandwiel kan gebruikt worden om het blok uit te breiden.",
            "Het <svg width=\"168px\" height=\"37px\"><g><path class=\"blocklyPathDark\" transform=\"translate(1,1)\" fill=\"#495284\" d=\"m 0,0 H 20 H 158.4652557373047 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 125.43017578125,5 h -38.306365966796875 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.306365966796875 z\"></path><path class=\"blocklyPath\" stroke=\"none\" fill=\"#5b67a5\" d=\"m 0,0 H 20 H 158.4652557373047 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 125.43017578125,5 h -38.306365966796875 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.306365966796875 z\"></path><path class=\"blocklyPathLight\" stroke=\"#8c95c0\" d=\"m 0.5,0.5 H 19.5 M 19.5,0.5 H 157.9652557373047 M 0.5,35.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1 M 125.93017578125,5.5 v 27 h -38.306365966796875 M 82.02380981445313,24.3 l 3.68,-2.1\"></path><g data-id=\"mcsvBhUmrgVSPXPK#s56\" transform=\"translate(88.12380981445312,6)\"><path class=\"blocklyPathDark\" transform=\"translate(1,1)\" fill=\"#bdc2db\" d=\"m 0,0 H 36.306365966796875 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z\"></path><path class=\"blocklyPath\" stroke=\"none\" fill=\"#bdc2db\" d=\"m 0,0 H 36.306365966796875 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z\"></path><path class=\"blocklyPathLight\" d=\"m 0.5,0.5 H 35.806365966796875 M 35.806365966796875,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1\" style=\"display: none;\"></path><g class=\"blocklyEditableText\" transform=\"translate(10,5)\" style=\"cursor: text;\"><rect rx=\"4\" ry=\"4\" x=\"-5\" y=\"0\" height=\"16\" width=\"26.306365966796875\"></rect><text class=\"blocklyText\" y=\"12.5\">50</text></g></g><g transform=\"translate(10,10)\"><text class=\"blocklyText\" y=\"12.5\">Kans&nbsp;van</text></g><g transform=\"translate(135.43017578125,10)\"><text class=\"blocklyText\" y=\"12.5\">%</text></g></g></svg> blok geeft waar of niet waar terug met de gegeven kans.<br><br>Dit kan gecombineerd worden met het als blok om iets uit te voeren met een gegeven kans."
        ]
    },
    {
        "system_count": 4,
        "queue_data": {
            "0":[5,5,5,5]
        },
        "toolbox": "<xml id=\"toolbox\"><category name=\"Systeem\" colour=\"#5ba5a5\"><block type=\"system_has_queue\"></block><block type=\"system_send\"></block><block type=\"system_no_send\"></block><block type=\"system_sender\"></block><block type=\"system_empty_send\"></block><block type=\"system_collision\"></block><block type=\"system_success\"></block></category><category name=\"Logica\" colour=\"#5C81A6\"><block type=\"controls_if\"></block><block type=\"logic_operation\"><field name=\"OP\">AND</field></block><block type=\"logic_negate\"></block></category><category name=\"Rekenen\" colour=\"#5C68A6\"><block type=\"math_random_chance\"><value name=\"CHANCE\"><shadow type=\"math_number\"><field name=\"NUM\">50</field></shadow></value></block></category></xml>",
        "text": [
            "Nu hebben we 4 systemen die tegelijk iets proberen te versturen.<br><br>In plaats van allemaal willekeurig data te versturen en te hopen dat het goed gaat, kunnen we ook iemand laten uitpraten nadat die een keer succesvol verstuurd heeft. Dit zorgt ervoor dat het sneller gaat.<br><br>Hiervoor kunnen we de nieuwe blokken in de categorieën systeem en logica gebruiken."
        ]
    },
    {
        "system_count": 4,
        "queue_data": {
            "0":[5,5,5,5],
            "20":[5,5,5,5]
        },
        "toolbox": "<xml id=\"toolbox\"><category name=\"Systeem\" colour=\"#5ba5a5\"><block type=\"system_has_queue\"></block><block type=\"system_queue_length\"></block><block type=\"system_send\"></block><block type=\"system_send_control\"><value name=\"CONTROL\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow></value></block><block type=\"system_no_send\"></block><block type=\"system_sender\"></block><block type=\"system_empty_send\"></block><block type=\"system_collision\"></block><block type=\"system_success\"></block><block type=\"system_control\"></block></category><category name=\"Logica\" colour=\"#5C81A6\"><block type=\"controls_if\"></block><block type=\"logic_compare\"><field name=\"OP\">EQ</field></block><block type=\"logic_operation\"><field name=\"OP\">AND</field></block><block type=\"logic_negate\"></block></category><category name=\"Rekenen\" colour=\"#5C68A6\"><block type=\"math_number\"><field name=\"NUM\">0</field></block><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><shadow type=\"math_number\"><field name=\"NUM\">1</field></shadow></value><value name=\"B\"><shadow type=\"math_number\"><field name=\"NUM\">1</field></shadow></value></block><block type=\"math_number_property\"><mutation divisor_input=\"false\"></mutation><field name=\"PROPERTY\">EVEN</field><value name=\"NUMBER_TO_CHECK\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow></value></block><block type=\"math_modulo\"><value name=\"DIVIDEND\"><shadow type=\"math_number\"><field name=\"NUM\">64</field></shadow></value><value name=\"DIVISOR\"><shadow type=\"math_number\"><field name=\"NUM\">10</field></shadow></value></block><block type=\"math_random_chance\"><value name=\"CHANCE\"><shadow type=\"math_number\"><field name=\"NUM\">50</field></shadow></value></block></category></xml>",
        "text": [
            "We kunnen ook het<br><svg width=\"194px\" height=\"37px\"><path class=\"blocklyPathDark\" transform=\"translate(1,1)\" fill=\"#498470\" d=\" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 163.27552795410156  v 5  V 5  V 32  V 32  V 36  h -185.27552795410156 a 8 8 0 0,1 -8,-8 z\n M 153.12234497070312,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 30.153182983398438  v -27 z\"></path><path class=\"blocklyPath\" stroke=\"none\" fill=\"#5ba58c\" d=\" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 163.27552795410156  v 5  V 5  V 32  V 32  V 36  h -185.27552795410156 a 8 8 0 0,1 -8,-8 z\n M 153.12234497070312,5  v 5  c 0,10  -8,-8  -8,7.5  s 8,-2.5  8,7.5  v 7  h 30.153182983398438  v -27 z\"></path><path class=\"blocklyPathLight\" stroke=\"#8cc0af\" d=\" m 0,0  m 0.5,8 a 7.5 7.5 0 0,1 8,-7.5  H 14.5  h 0.5  l 6,4  3,0  6,-4  H 192.77552795410156  H 192.77552795410156  M 0,36  m 2.6966991411008934,-2.6966991411008934 a 7.5 7.5 0 0,1 -2.1966991411008934,-5.303300858899107  V 8 \n M 183.77552795410156,5.5  v 27  h -30.153182983398438  M 153.12234497070312,10  m -5,14.3  l 3.68,-2.1 \"></path><g data-id=\"`[Am:6qCkqla}3F^}0Bl\" transform=\"translate(146.12234497070312,6)\"><path class=\"blocklyPathDark\" transform=\"translate(1,1)\" fill=\"#bdc2db\" d=\" m 8,0  h 28.153182983398438  v 5  V 5  V 21  V 21  V 25  h -28.153182983398438  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z\n\"></path><path class=\"blocklyPath\" stroke=\"none\" fill=\"#bdc2db\" d=\" m 8,0  h 28.153182983398438  v 5  V 5  V 21  V 21  V 25  h -28.153182983398438  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z\n\"></path><path class=\"blocklyPathLight\" d=\" m 8,0  m 0.5,0.5  H 35.65318298339844  H 35.65318298339844  M 8.5,24.5  M 8.5,24.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 \n\" style=\"display: none;\"></path><g class=\"blocklyEditableText\" transform=\"translate(13,5)\" style=\"cursor: text;\"><rect rx=\"4\" ry=\"4\" x=\"0\" y=\"0\" height=\"16\" width=\"18.153182983398438\"></rect><text class=\"blocklyText\" y=\"12.5\" x=\"5\">0</text></g></g><g transform=\"translate(10,10)\"><text class=\"blocklyText\" y=\"12.5\" x=\"0\">Versturen&nbsp;met&nbsp;getal</text></g></svg><br>blok gebruiken. Met dit blok kun je een getal meesturen met je boodschap. Als je vervolgens succesvol stuurt kan iedereen het getal zien met het <svg width=\"211px\" height=\"25px\"><path class=\"blocklyPathDark\" transform=\"translate(1,1)\" fill=\"#498470\" d=\" m 8,0  h 201.69639587402344  v 5  V 5  V 20  V 20  V 24  h -201.69639587402344  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z\n\"></path><path class=\"blocklyPath\" stroke=\"none\" fill=\"#5ba58c\" d=\" m 8,0  h 201.69639587402344  v 5  V 5  V 20  V 20  V 24  h -201.69639587402344  H 8  V 20  c 0,-10  -8,8  -8,-7.5  s 8,2.5  8,-7.5 z\n\"></path><path class=\"blocklyPathLight\" stroke=\"#8cc0af\" d=\" m 8,0  m 0.5,0.5  H 209.19639587402344  H 209.19639587402344  M 8.5,23.5  M 8.5,23.5  V 20  v -1.5  m -7.36,-0.5  q -1.52,-5.5  0,-11  m 7.36,1  V 0.5 \n\"></path><g transform=\"translate(18,5)\"><text class=\"blocklyText\" y=\"12.5\" x=\"0\">Getal&nbsp;verstuurd&nbsp;vorig&nbsp;tijdslot</text></g></svg> blok. Je kunt zelf afspreken wat dit getal betekent en waarvoor je het gebruikt. Je kunt bijvoorbeeld een getal sturen om te laten weten dat je klaar bent met sturen."
        ]
    },
    {
        "system_count": 4,
        "queue_data": {
            "0":[5,0,10,0],
            "5":[5,5,0,0],
            "10":[0,0,0,5],
            "15":[0,0,0,5],
            "20":[0,10,0,0],
            "25":[0,0,5,0]
        },
        "toolbox": "<xml id=\"toolbox\"><category name=\"Systeem\" colour=\"#5ba5a5\"><block type=\"system_has_queue\"></block><block type=\"system_queue_length\"></block><block type=\"system_send\"></block><block type=\"system_send_control\"><value name=\"CONTROL\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow></value></block><block type=\"system_no_send\"></block><block type=\"system_sender\"></block><block type=\"system_empty_send\"></block><block type=\"system_collision\"></block><block type=\"system_success\"></block><block type=\"system_control\"></block></category><category name=\"Logica\" colour=\"#5C81A6\"><block type=\"controls_if\"></block><block type=\"logic_compare\"><field name=\"OP\">EQ</field></block><block type=\"logic_operation\"><field name=\"OP\">AND</field></block><block type=\"logic_negate\"></block><block type=\"logic_boolean\"><field name=\"BOOL\">TRUE</field></block></category><category name=\"Rekenen\" colour=\"#5C68A6\"><block type=\"math_number\"><field name=\"NUM\">0</field></block><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><shadow type=\"math_number\"><field name=\"NUM\">1</field></shadow></value><value name=\"B\"><shadow type=\"math_number\"><field name=\"NUM\">1</field></shadow></value></block><block type=\"math_number_property\"><mutation divisor_input=\"false\"></mutation><field name=\"PROPERTY\">EVEN</field><value name=\"NUMBER_TO_CHECK\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow></value></block><block type=\"math_modulo\"><value name=\"DIVIDEND\"><shadow type=\"math_number\"><field name=\"NUM\">64</field></shadow></value><value name=\"DIVISOR\"><shadow type=\"math_number\"><field name=\"NUM\">10</field></shadow></value></block><block type=\"math_random_chance\"><value name=\"CHANCE\"><shadow type=\"math_number\"><field name=\"NUM\">50</field></shadow></value></block></category><category name=\"Variabelen\" colour=\"#A65C81\" custom=\"VARIABLE\"></category></xml>",
        "text": [
            "We kunnen nu ook variabelen maken. Deze kunnen we gebruiken om waardes op te slaan om ze later weer te gebruiken. Elk systeem houdt zijn eigen waardes bij. Ze kunnen dus verschillend zijn per systeem."
        ]
    },
    {
        "system_count": 4,
        "queue_data": {
            "0":[0,1,0,0],
            "1":[0,1,0,0],
            "2":[0,1,0,0],
            "3":[0,1,0,0],
            "4":[0,1,0,0],
            "5":[0,1,0,0],
            "6":[0,1,0,0],
            "7":[0,1,0,1],
            "8":[0,1,0,1],
            "9":[0,1,0,1],
            "10":[0,1,0,1],
            "11":[0,1,0,1],
            "12":[0,1,0,1],
            "13":[0,1,0,1],
            "14":[0,1,0,1],
            "15":[0,1,0,1],
            "16":[0,1,0,1],
            "17":[0,1,0,0],
            "18":[0,1,0,0],
            "19":[0,1,0,0],
            "20":[0,1,0,0],
            "21":[0,1,0,0],
            "22":[0,1,0,0],
            "23":[0,1,0,0],
            "24":[0,1,0,0],
            "25":[0,1,0,0],
            "26":[0,1,0,0],
            "27":[0,1,0,0],
            "28":[0,1,0,0],
            "29":[0,1,0,0],
            "30":[0,1,0,0],
            "31":[0,1,0,0],
            "32":[0,1,0,0],
            "33":[0,1,0,0],
            "52":[0,0,0,1],
            "53":[0,0,0,1],
            "54":[0,0,0,1],
            "55":[0,0,0,1],
            "56":[0,0,0,1],
            "57":[0,0,0,1],
            "58":[0,0,0,1],
            "59":[0,0,0,1],
            "60":[0,0,0,1],
            "61":[0,0,0,1],
            "96":[0,0,1,0],
            "97":[0,0,1,1],
            "98":[0,0,1,1],
            "99":[0,0,1,1],
            "100":[0,0,1,1],
            "101":[0,0,1,1],
            "102":[0,0,1,1],
            "103":[0,0,1,1],
            "104":[0,0,1,1],
            "105":[0,0,1,1],
            "106":[0,0,1,1],
            "107":[0,0,1,0],
            "108":[0,0,1,0],
            "109":[0,0,1,0],
            "110":[0,0,1,0],
            "111":[0,0,1,0],
            "112":[0,0,1,0],
            "113":[0,0,1,0],
            "114":[0,0,1,0],
            "115":[0,0,1,0],
            "116":[0,0,1,0],
            "117":[0,0,1,0],
            "118":[0,0,1,0],
            "119":[0,0,1,0],
            "120":[0,0,1,0],
            "121":[0,0,1,0],
            "122":[0,0,1,0],
            "123":[0,0,1,0],
            "124":[0,0,1,0],
            "125":[0,0,1,0],
            "126":[0,0,1,0],
            "127":[0,0,1,0],
            "128":[0,0,1,0],
            "129":[0,0,1,0],
            "142":[0,0,0,1],
            "143":[0,0,0,1],
            "144":[0,0,0,1],
            "145":[0,0,0,1],
            "146":[0,0,0,1],
            "147":[0,0,0,1],
            "148":[0,0,0,1],
            "149":[0,0,0,1],
            "150":[0,0,0,1],
            "151":[0,0,0,1],
            "187":[0,0,0,1],
            "188":[0,0,0,1],
            "189":[0,0,0,1],
            "190":[0,0,0,1],
            "191":[0,0,0,1],
            "192":[0,0,0,1],
            "193":[0,0,0,1],
            "194":[0,0,0,1],
            "195":[0,0,0,1],
            "196":[0,0,0,1],
            "232":[0,0,0,1],
            "233":[0,0,0,1],
            "234":[0,0,0,1],
            "235":[0,0,0,1],
            "236":[0,0,0,1],
            "237":[0,0,0,1],
            "238":[0,0,0,1],
            "239":[0,0,0,1],
            "240":[0,0,0,1],
            "241":[0,0,0,1],
            "246":[0,0,1,0],
            "247":[0,0,1,0],
            "248":[0,0,1,0],
            "249":[0,0,1,0],
            "250":[0,0,1,0],
            "251":[0,0,1,0],
            "252":[0,0,1,0],
            "253":[0,0,1,0],
            "254":[0,0,1,0],
            "255":[0,0,1,0],
            "256":[0,0,1,0],
            "257":[0,0,1,0],
            "258":[0,0,1,0],
            "259":[0,0,1,0],
            "260":[0,0,1,0],
            "261":[0,0,1,0],
            "262":[0,0,1,0],
            "263":[0,0,1,0],
            "264":[0,0,1,0],
            "265":[0,0,1,0],
            "266":[0,0,1,0],
            "267":[0,1,1,0],
            "268":[0,1,1,0],
            "269":[0,1,1,0],
            "270":[0,1,1,0],
            "271":[0,1,1,0],
            "272":[0,1,1,0],
            "273":[0,1,1,0],
            "274":[0,1,1,0],
            "275":[0,1,1,0],
            "276":[0,1,1,0],
            "277":[0,1,1,1],
            "278":[0,1,1,1],
            "279":[0,1,1,1],
            "280":[0,1,0,1],
            "281":[0,1,0,1],
            "282":[0,1,0,1],
            "283":[0,1,0,1],
            "284":[0,1,0,1],
            "285":[0,1,0,1],
            "286":[0,1,0,1],
            "287":[0,1,0,0],
            "288":[1,1,0,0],
            "289":[1,1,0,0],
            "290":[1,1,0,0],
            "291":[1,1,0,0],
            "292":[1,1,0,0],
            "293":[1,1,0,0],
            "294":[1,1,0,0],
            "295":[1,1,0,0],
            "296":[1,1,0,0],
            "297":[1,1,0,0],
            "298":[1,1,0,0],
            "299":[1,1,0,0],
            "300":[1,1,0,0],
            "301":[1,1,0,0],
            "302":[1,1,0,0],
            "303":[1,1,0,0],
            "304":[1,1,0,0],
            "305":[1,1,0,0],
            "306":[1,1,0,0],
            "307":[1,1,0,0],
            "308":[1,1,0,0],
            "309":[1,1,0,0],
            "310":[1,1,0,0],
            "311":[1,1,0,0],
            "312":[1,1,0,0],
            "313":[1,1,0,0],
            "314":[1,1,0,0],
            "315":[1,1,0,0],
            "316":[1,1,0,0],
            "317":[1,1,0,0],
            "318":[1,1,0,0],
            "319":[1,1,0,0],
            "320":[1,1,0,0],
            "321":[1,1,0,0],
            "322":[1,1,0,1],
            "323":[1,1,0,1],
            "324":[1,1,0,1],
            "325":[1,1,0,1],
            "326":[1,1,0,1],
            "327":[1,1,0,1],
            "328":[1,1,0,1],
            "329":[1,1,0,1],
            "330":[1,1,0,1],
            "331":[1,1,0,1],
            "332":[1,1,0,0],
            "333":[1,1,0,0],
            "334":[1,0,0,0],
            "335":[1,0,0,0],
            "336":[1,0,0,0],
            "337":[1,0,0,0],
            "338":[1,0,0,0],
            "339":[1,0,0,0],
            "340":[1,0,0,0],
            "341":[1,0,0,0],
            "342":[1,0,0,0],
            "343":[1,0,0,0],
            "344":[1,0,0,0],
            "345":[1,0,0,0],
            "346":[1,0,0,0],
            "347":[1,0,0,0],
            "348":[1,0,0,0],
            "349":[1,0,0,0],
            "350":[1,0,0,0],
            "351":[1,0,0,0],
            "352":[1,0,0,0],
            "353":[1,0,0,0],
            "354":[1,0,0,0],
            "355":[1,0,0,0],
            "356":[1,0,0,0],
            "357":[1,0,0,0],
            "358":[1,0,0,0],
            "359":[1,0,0,0],
            "360":[1,0,0,0],
            "361":[1,0,0,0],
            "362":[1,0,0,0],
            "363":[1,0,0,0],
            "364":[1,0,0,0],
            "365":[1,0,0,0],
            "366":[1,0,0,0],
            "367":[1,0,0,1],
            "368":[1,0,0,1],
            "369":[1,0,0,1],
            "370":[1,0,0,1],
            "371":[1,0,0,1],
            "372":[1,0,0,1],
            "373":[1,0,0,1],
            "374":[1,0,0,1],
            "375":[1,0,0,1],
            "376":[1,0,0,1],
            "377":[1,0,0,0],
            "378":[1,0,0,0],
            "379":[1,0,0,0],
            "380":[1,0,0,0],
            "381":[1,0,0,0],
            "382":[1,0,0,0],
            "383":[1,0,0,0],
            "384":[1,0,0,0],
            "385":[1,0,0,0],
            "386":[1,0,0,0],
            "387":[1,0,0,0],
            "396":[0,0,1,0],
            "397":[0,0,1,0],
            "398":[0,0,1,0],
            "399":[0,0,1,0],
            "400":[0,0,1,0],
            "401":[0,0,1,0],
            "402":[0,0,1,0],
            "403":[0,0,1,0],
            "404":[0,0,1,0],
            "405":[0,0,1,0],
            "406":[0,0,1,0],
            "407":[0,0,1,0],
            "408":[0,0,1,0],
            "409":[0,0,1,0],
            "410":[0,0,1,0],
            "411":[0,0,1,0],
            "412":[0,0,1,1],
            "413":[0,0,1,1],
            "414":[0,0,1,1],
            "415":[0,0,1,1],
            "416":[0,0,1,1],
            "417":[0,0,1,1],
            "418":[0,0,1,1],
            "419":[0,0,1,1],
            "420":[0,0,1,1],
            "421":[0,0,1,1],
            "422":[0,0,1,0],
            "423":[0,0,1,0],
            "424":[0,0,1,0],
            "425":[0,0,1,0],
            "426":[0,0,1,0],
            "427":[0,0,1,0],
            "428":[0,0,1,0],
            "429":[0,0,1,0],
            "457":[0,0,0,1],
            "458":[0,0,0,1],
            "459":[0,0,0,1],
            "460":[0,0,0,1],
            "461":[0,0,0,1],
            "462":[0,0,0,1],
            "463":[0,0,0,1],
            "464":[0,0,0,1],
            "465":[0,0,0,1],
            "466":[0,0,0,1],
            "502":[0,0,0,1],
            "503":[0,0,0,1],
            "504":[0,0,0,1],
            "505":[0,0,0,1],
            "506":[0,0,0,1],
            "507":[0,0,0,1],
            "508":[0,0,0,1],
            "509":[0,0,0,1],
            "510":[0,0,0,1],
            "511":[0,0,0,1],
            "546":[0,0,1,0],
            "547":[0,0,1,1],
            "548":[0,0,1,1],
            "549":[0,0,1,1],
            "550":[0,0,1,1],
            "551":[0,0,1,1],
            "552":[0,0,1,1],
            "553":[0,0,1,1],
            "554":[0,0,1,1],
            "555":[0,0,1,1],
            "556":[0,0,1,1],
            "557":[0,0,1,0],
            "558":[0,0,1,0],
            "559":[0,0,1,0],
            "560":[0,0,1,0],
            "561":[0,0,1,0],
            "562":[0,0,1,0],
            "563":[0,0,1,0],
            "564":[0,0,1,0],
            "565":[0,0,1,0],
            "566":[0,0,1,0],
            "567":[0,1,1,0],
            "568":[0,1,1,0],
            "569":[0,1,1,0],
            "570":[0,1,1,0],
            "571":[0,1,1,0],
            "572":[0,1,1,0],
            "573":[0,1,1,0],
            "574":[0,1,1,0],
            "575":[0,1,1,0],
            "576":[0,1,1,0],
            "577":[0,1,1,0],
            "578":[0,1,1,0],
            "579":[0,1,1,0],
            "580":[0,1,0,0],
            "581":[0,1,0,0],
            "582":[0,1,0,0],
            "583":[0,1,0,0],
            "584":[0,1,0,0],
            "585":[0,1,0,0],
            "586":[0,1,0,0],
            "587":[0,1,0,0],
            "588":[0,1,0,0],
            "589":[0,1,0,0],
            "590":[0,1,0,0],
            "591":[0,1,0,0],
            "592":[0,1,0,1],
            "593":[0,1,0,1],
            "594":[0,1,0,1],
            "595":[0,1,0,1],
            "596":[0,1,0,1],
            "597":[0,1,0,1],
            "598":[0,1,0,1],
            "599":[0,1,0,1],
            "600":[0,1,0,1],
            "601":[0,1,0,1],
            "602":[0,1,0,0],
            "603":[0,1,0,0],
            "604":[0,1,0,0],
            "605":[0,1,0,0],
            "606":[0,1,0,0],
            "607":[0,1,0,0],
            "608":[0,1,0,0],
            "609":[0,1,0,0],
            "610":[0,1,0,0],
            "611":[0,1,0,0],
            "612":[0,1,0,0],
            "613":[0,1,0,0],
            "614":[0,1,0,0],
            "637":[0,0,0,1],
            "638":[0,0,0,1],
            "639":[0,0,0,1],
            "640":[0,0,0,1],
            "641":[0,0,0,1],
            "642":[0,0,0,1],
            "643":[0,0,0,1],
            "644":[0,0,0,1],
            "645":[0,0,0,1],
            "696":[0,0,1,0],
            "697":[0,0,1,0],
            "698":[0,0,1,0],
            "699":[0,0,1,0],
            "700":[0,0,1,0],
            "701":[0,0,1,0],
            "702":[0,0,1,0],
            "703":[0,0,1,0],
            "704":[0,0,1,0],
            "705":[0,0,1,0],
            "706":[0,0,1,0],
            "707":[0,0,1,0],
            "708":[0,0,1,0],
            "738":[1,0,0,0],
            "739":[1,0,0,0],
            "740":[1,0,0,0],
            "741":[1,0,0,0],
            "742":[1,0,0,0],
            "743":[1,0,0,0],
            "744":[1,0,0,0],
            "745":[1,0,0,0],
            "746":[1,0,0,0],
            "747":[1,0,0,0],
            "748":[1,0,0,0],
            "749":[1,0,0,0],
            "750":[1,0,0,0],
            "751":[1,0,0,0],
            "752":[1,0,0,0],
            "753":[1,0,0,0],
            "754":[1,0,0,0],
            "755":[1,0,0,0],
            "756":[1,0,0,0],
            "757":[1,0,0,0],
            "758":[1,0,0,0],
            "759":[1,0,0,0],
            "760":[1,0,0,0],
            "761":[1,0,0,0],
            "762":[1,0,0,0],
            "763":[1,0,0,0],
            "764":[1,0,0,0],
            "765":[1,0,0,0],
            "766":[1,0,0,0],
            "767":[1,0,0,0],
            "768":[1,0,0,0],
            "769":[1,0,0,0],
            "770":[1,0,0,0],
            "771":[1,0,0,0],
            "772":[1,0,0,0],
            "773":[1,0,0,0],
            "774":[1,0,0,0],
            "775":[1,0,0,0],
            "776":[1,0,0,0],
            "777":[1,0,0,0],
            "778":[1,0,0,0],
            "779":[1,0,0,0],
            "780":[1,0,0,0],
            "781":[1,0,0,0],
            "782":[1,0,0,0],
            "783":[1,0,0,0],
            "784":[1,0,0,0],
            "785":[1,0,0,0],
            "786":[1,0,0,0]
        },
        "toolbox": "<xml id=\"toolbox\"><category name=\"Systeem\" colour=\"#5ba5a5\"><block type=\"system_has_queue\"></block><block type=\"system_queue_length\"></block><block type=\"system_send\"></block><block type=\"system_send_control\"><value name=\"CONTROL\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow></value></block><block type=\"system_no_send\"></block><block type=\"system_sender\"></block><block type=\"system_empty_send\"></block><block type=\"system_collision\"></block><block type=\"system_success\"></block><block type=\"system_control\"></block></category><category name=\"Logica\" colour=\"#5C81A6\"><block type=\"controls_if\"></block><block type=\"logic_compare\"><field name=\"OP\">EQ</field></block><block type=\"logic_operation\"><field name=\"OP\">AND</field></block><block type=\"logic_negate\"></block><block type=\"logic_boolean\"><field name=\"BOOL\">TRUE</field></block></category><category name=\"Rekenen\" colour=\"#5C68A6\"><block type=\"math_number\"><field name=\"NUM\">0</field></block><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><shadow type=\"math_number\"><field name=\"NUM\">1</field></shadow></value><value name=\"B\"><shadow type=\"math_number\"><field name=\"NUM\">1</field></shadow></value></block><block type=\"math_number_property\"><mutation divisor_input=\"false\"></mutation><field name=\"PROPERTY\">EVEN</field><value name=\"NUMBER_TO_CHECK\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow></value></block><block type=\"math_modulo\"><value name=\"DIVIDEND\"><shadow type=\"math_number\"><field name=\"NUM\">64</field></shadow></value><value name=\"DIVISOR\"><shadow type=\"math_number\"><field name=\"NUM\">10</field></shadow></value></block><block type=\"math_random_chance\"><value name=\"CHANCE\"><shadow type=\"math_number\"><field name=\"NUM\">50</field></shadow></value></block></category><category name=\"Variabelen\" colour=\"#A65C81\" custom=\"VARIABLE\"></category></xml>"
    }
];

// Define custom blocks

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

// Define javascript definitions for custom blocks

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

// Define functions for adding comments and highlights to blocks

function createSuper(block_type) {
    Blockly.JavaScript[block_type + '_super'] = Blockly.JavaScript[block_type];
}

function getSuper(block_type) {
    return Blockly.JavaScript[block_type + '_super'];
}

function addHighlightToStatement(block_type) {
    createSuper(block_type);
    Blockly.JavaScript[block_type] = function (block) {
        return 'highlightBlock("' + this.id + '");\n' + getSuper(block_type)(block);
    };
}

function addHighlightToExpression(block_type) {
    createSuper(block_type);
    Blockly.JavaScript[block_type] = function (block) {
        var code = getSuper(block_type)(block)[0];
        return ['setHighlight("' + this.id + '", ' + code + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };
}

function addCommentToExpression(block_type) {
    createSuper(block_type);
    Blockly.JavaScript[block_type] = function (block) {
        var code = getSuper(block_type)(block)[0];
        return ['setComment("' + this.id + '", ' + code + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };
}

// Add comments and highlights to blocks

addCommentToExpression('system_has_queue');
addCommentToExpression('system_queue_length');
addHighlightToStatement('system_no_send');
addHighlightToStatement('system_send');
addHighlightToStatement('system_send_control');
addCommentToExpression('system_sender');
addCommentToExpression('system_empty_send');
addCommentToExpression('system_collision');
addCommentToExpression('system_success');
addCommentToExpression('system_control');

addHighlightToStatement('controls_if');
addCommentToExpression('logic_compare');
addCommentToExpression('logic_operation');
addCommentToExpression('logic_negate');
addHighlightToExpression('logic_boolean');

addHighlightToExpression('math_number');
addCommentToExpression('math_arithmetic');
addCommentToExpression('math_number_property');
addCommentToExpression('math_modulo');
addCommentToExpression('math_random_chance');

addCommentToExpression('variables_get');
addHighlightToStatement('variables_set');

// Define native functions we can use in the interpreter

Blockly.JavaScript.addReservedWords(
    'highlightBlock,send,nextSystem,nextTimeslot,highlightSystem,hasQueue,isEmptySend,isSuccess,isCollision,' +
    'currentSystem,currentTimeslot,systemCount,alert,log,infiniteLoopCount'
);

function initApi(interpreter, scope) {
    interpreter.setProperty(scope, 'highlightBlock', interpreter.createNativeFunction(function (blockId) {
        return highlightBlock(blockId);
    }));

    interpreter.setProperty(scope, 'highlightSystem', interpreter.createNativeFunction(function (systemId) {
        return highlightSystem(systemId);
    }));

    interpreter.setProperty(scope, 'setHighlight', interpreter.createNativeFunction(function (blockId, result) {
        return setHighlight(blockId, result);
    }));

    interpreter.setProperty(scope, 'setComment', interpreter.createNativeFunction(function (blockId, result) {
        return setComment(blockId, result);
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
