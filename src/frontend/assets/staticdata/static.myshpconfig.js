window.importStaticConfigJsonP = `
{
    "components": {
        "pdoc-sectionpage": {
        },
        "pdoc-editor-commands": {
            "commandBlocks": [
                {
                    "label": "Markdown:",
                    "commands": [
                        {
                            "label": "<h1>",
                            "type": "rangeCommand",
                            "commandStart": "# ",
                            "commandEnd": "\\n"
                        },
                        {
                            "label": "<h2>",
                            "type": "rangeCommand",
                            "commandStart": "## ",
                            "commandEnd": "\\n"
                        },
                        {
                            "label": "<h3>",
                            "type": "rangeCommand",
                            "commandStart": "### ",
                            "commandEnd": "\\n"
                        },
                        {
                            "label": "<link>",
                            "type": "rangeCommand",
                            "commandStart": "[](",
                            "commandEnd": ")"
                        },
                        {
                            "label": "<bold>",
                            "type": "rangeCommand",
                            "commandStart": "**",
                            "commandEnd": "**"
                        },
                        {
                            "label": "<li>",
                            "type": "rangeCommand",
                            "commandStart": "   - ",
                            "commandEnd": "\\n"
                        },
                        {
                            "label": "<ol>",
                            "type": "rangeCommand",
                            "commandStart": "   1. ",
                            "commandEnd": "\\n"
                        },
                        {
                            "label": "<table>",
                            "type": "singleCommand",
                            "command": "\\nHead1 | Head2 | Head3\\n----|----|----\\nColumn1 | Column2 | Column3\\n\\n"
                        }
                    ]
                },
                {
                    "label": "Boxes:",
                    "commands": [
                        {
                            "label": "Box",
                            "type": "rangeCommand",
                            "commandStart": "<!---BOX styleclass--->\\n",
                            "commandEnd": "<!---/BOX styleclass--->\\n\\n"
                        },
                        {
                            "label": "Container",
                            "type": "rangeCommand",
                            "commandStart": "<!---CONTAINER id--->\\n",
                            "commandEnd": "<!---/CONTAINER id--->\\n\\n"
                        },
                        {
                            "label": "Style",
                            "type": "rangeCommand",
                            "commandStart": "<!---STYLE tag.style--->\\n",
                            "commandEnd": "<!---/STYLE tag.style--->\\n\\n"
                        },
                        {
                            "label": "Info",
                            "type": "rangeCommand",
                            "commandStart": "<!---BOX.INFO header--->\\ncontent\\n",
                            "commandEnd": "<!---/BOX.INFO--->\\n\\n"
                        },
                        {
                            "label": "Warn",
                            "type": "rangeCommand",
                            "commandStart": "<!---BOX.WARN header--->\\ncontent\\n",
                            "commandEnd": "<!---/BOX.WARN--->\\n\\n"
                        },
                        {
                            "label": "Alert",
                            "type": "rangeCommand",
                            "commandStart": "<!---BOX.ALERT header--->\\ncontent\\n",
                            "commandEnd": "<!---/BOX.ALERT--->\\n\\n"
                        }
                    ]
                },
                {
                    "label": "Extensions:",
                    "commands": [
                        {
                            "label": "Splitter",
                            "type": "singleCommand",
                            "command": " :|: "
                        },
                        {
                            "label": "Text-Toggler",
                            "type": "singleCommand",
                            "command": "<!---TOGGLER containerIdToToggle,text--->"
                        },
                        {
                            "label": "Icon-Toggler",
                            "type": "singleCommand",
                            "command": "<!---TOGGLER containerIdToToggle,icon--->"
                        },
                        {
                            "label": "Toggle-Lists-Text",
                            "type": "singleCommand",
                            "command": "<!---TOGGLER.AFTER ul:dps-md-ul,text--->"
                        },
                        {
                            "label": "Toggle-Lists-Icon",
                            "type": "singleCommand",
                            "command": "<!---TOGGLER.AFTER ul:dps-md-ul,icon--->"
                        },
                        {
                            "label": "Graph",
                            "type": "singleCommand",
                            "command": "\\n\`\`\`mermaid\\ngraph LR\\n      A --- B\\n      B-->C[fa:fa-ban forbidden]\\n      B-->D(fa:fa-spinner);\\n\`\`\`\\n"
                        },
                        {
                            "label": "Gantt",
                            "type": "singleCommand",
                            "command": "\\n\`\`\`mermaid\\ngantt\\n    title Urlaubsplanung Sommer 2015\\n    dateFormat  DD.MM.YYYY\\n\\n    section Urlaub1\\n    Alpen1               :alpen1     , 01.07.2015     , 7d\\n    Alpen2               :alpen2     , after alpen1   , 7d\\n\\n    section Urlaub/Ferien\\n    Alpen Hüttentour     :alpen3     , after alpen2     , 6d\\n    Sachsen              :sachsen    , after alpen3 , 3d\\n    Ferienende Schule    :holend     , 27.08.2015     , 1d\\n    Ötztal               :alpen4     , after sachsen    , 5d\\n\`\`\`\\n"
                        }
                    ]
                },
                {
                    "label": "Emojis:",
                    "commands": [
                        {
                            "label": "😃",
                            "type": "singleCommand",
                            "command": "&#128515;"
                        }
                    ]
                }
            ],
            "sampleDesc": "# Your-Markdown-Fellow sagt Guten Tag :-)\\nSchön das Du hierher gefunden hast!!!\\n\\nSolltest du nach einem einfachen Online-Markdown-Editor mit mächtigen Features gesucht haben:\\n\\n**Hier bist du Richtig**\\n\\nMdPad bietet Dir eine Vielzahl an Möglichkeiten bei (so hoffe ich) einfacher Bedienung :-)\\n\\nAlso viel Spaß!!!\\n\\n\\nPS: Anbei noch eine kurze Einführung in die Möglichkeiten.\\n\\n<!---TOC --->\\n\\n----------------------------\\n\\n# Überschrift Ebene 1\\nDas hier ist ganz normaler Fließtext.\\n- Aufzählung Ebene 1\\n  - Aufzählung Unterpunkt Ebene2 mit [Link + Label](http://daringfireball.net/projects/markdown/syntax).\\n\\n## Überschrift Ebene 2\\nEin schönes Feature ist der integrierte Diagramm-Editor.\\n- Mermaid-Sequenz-Diagramme\\n- Mermaid-Prozess-Diagramme\\n- Mermaid-Gantt-Diagramme\\n\`\`\`mermaid\\ngantt\\n    title Urlaubsplanung Sommer 2015\\n    dateFormat  DD.MM.YYYY\\n\\n    section Urlaub1\\n    Alpen1               :alpen1     , 01.07.2015     , 7d\\n    Alpen2               :alpen2     , after alpen1   , 7d\\n\\n    section Urlaub/Ferien\\n    Alpen Hüttentour     :alpen3     , after alpen2     , 6d\\n    Sachsen              :sachsen    , after alpen3 , 3d\\n    Ferienende Schule    :holend     , 27.08.2015     , 1d\\n    Ötztal               :alpen4     , after sachsen    , 5d\\n\`\`\`\\n\\n### Überschrift Ebene 3\\nSo kann man Code-Blöcke oder ähnliches einbinden.\\n\`\`\`\\nMasterplan\\n  System\\n     Default\\n\`\`\`\\nDas schöne ist, dass ein automatisches Syntaxhighlighting erfolgt, wenn er die Sprache erkennt.\\n\`\`\`\\n#!/bin/bash\\n// activate elements after 1 second\\nsetTimeout(function() {\\n    // activate speech recognition and others\\n    initLanguageSupport();\\n    a = a + 1;\\n\`\`\`\\n\\n#### Überschrift Ebene 4\\n\\nUnd auch die Einbindung von Bildern ist ganz einfach möglich :-)\\n\\n![Banner](assets/images/banner-big.jpg \\"Banner\\")\\n\\nUnd immer wieder gerne gesehen: *Tabellen*\\n\\nHead1 | Head2 | Head3\\n----|----|----\\nColumn1 | Column2 | Column3\\n\\nSoweit zu den Standard-Markdown-Features. Aber es gibt noch mehr Erweiterungen :-)\\n\\n----------------------------\\n\\n<!---STYLE li:dps-md-no-list-bullet--->\\n\\n<!---BOX--->\\n# Syntax-Erweiterungen\\n<!---TOGGLER thatsit,text--->\\n<!---CONTAINER thatsit--->\\n<!---STYLE p:dps-md-text-center--->\\nText center\\n\\n<!---/STYLE p:dps-md-text-center--->\\n\\n- Spalte1 Ue:|:text\\n- Spalte2 Ue:|:text\\n- Spalte3 Ue:|:text\\n- Spalte4 Ue:|:text\\n- Spalte5 Ue:|:text\\n\\n<!---/CONTAINER--->\\n<!---/BOX--->\\n\\n<!---BOX dps-md-background-info--->\\n### Box mit Hintergrundfarbe info\\n<!---TOGGLER management,icon--->\\n<!---CONTAINER management--->\\n<!---STYLE li ul splitter1 splitter2:dps-md-list-horiz--->\\n- Spalte1 Ue:|:text\\n- Spalte2 Ue:|:text\\n- Spalte3 Ue:|:text\\n- Spalte4 Ue:|:text\\n- Spalte5 Ue:|:text\\n<!---/STYLE li ul splitter1 splitter2:dps-md-list-horiz--->\\n<!---/CONTAINER--->\\n<!---/BOX--->\\n\\n<!---BOX dps-md-background-info--->\\n### Box mit Hintergrundfarbe info und anderem Icon\\n<!---TOGGLER management2,icon2--->\\n<!---CONTAINER management2--->\\n<!---STYLE li ul splitter1 splitter2:dps-md-list-horiz--->\\n- Spalte4 Ue:|:text\\n- Spalte5 Ue:|:text\\n<!---/STYLE li ul splitter1 splitter2:dps-md-list-horiz--->\\n<!---/CONTAINER--->\\n<!---/BOX--->\\n\\n<!---BOX.INFO Der Infoname--->\\nBla Blub\\n\\n<!---/BOX.INFO--->\\n\\n<!---BOX.ALERT Der Alertname--->\\nBla Blub\\n\\n<!---/BOX.ALERT--->\\n\\n<!---BOX.WARN Der Warnname--->\\nBla Blub\\n\\n<!---/BOX.WARN--->\\n\\n<!---/STYLE li:dps-md-no-list-bullet--->\\n\\nUnd so kann man ganz einfach an alle Listen des Styles \\"dps-md-list-horiz\\" einen Texttoggler anhaengen :-)\\n<!---TOGGLER.AFTER ul:dps-md-list-horiz,text--->\\n\\n### Checklisten\\nFür ganz strukturierte Leute gibt es einfache farbige Checklisten:\\n- **Aufgabenliste**\\n    - [OFFEN] - Aufgabe\\n    - [LATE] - Aufgabe\\n    - [RUNNING] - Aufgabe\\n    - [BLOCKED] - Aufgabe\\n    - [WARNING] - Aufgabe\\n    - [DONE] - Aufgabe\\n\\n- **Testergebnisse**\\n    - [TESTOPEN] - Testergebnis\\n    - [FAILED] - Testergebnis\\n    - [PASSED] - Testergebnis\\n\\n## Referenzen\\nWer mehr über die Möglichkeiten von Markdown bzw. der Diagramme erfahren möchte, findet auf den folgenden Seiten einen ganzen \\"Bunch\\" an Infos...\\n\\n- **Markdown**\\n    - Die Markdown-Syntax orientiert sich an [http://daringfireball.net/projects/markdown/syntax](http://daringfireball.net/projects/markdown/syntax)\\n- **Mermaid-Diagramme**\\n    - Die Syntax der Mermaid-Prozess-Diagramme folgt [http://knsv.github.io/mermaid/flowchart.html](http://knsv.github.io/mermaid/flowchart.html)\\n    - Die Syntax der Mermaid-Gantt-Diagramme folgt [http://knsv.github.io/mermaid/gantt.html](http://knsv.github.io/mermaid/gantt.html)\\n    - Und die Syntax der Mermaid-Sequenz-Diagramme folgt [http://knsv.github.io/mermaid/sequenceDiagram.html](http://knsv.github.io/mermaid/sequenceDiagram.html)\\n"
        }
    },
    "services": {
        "adminJobArea": {
            "jobsAllowed": false
        }
    }
}
`;

var script = document.createElement('script');
script.type='application/json';
script.id = 'assets/staticdata/static.myshpconfig.js';
var text = document.createTextNode(importStaticConfigJsonP);
script.appendChild(text);
document.head.appendChild(script);
