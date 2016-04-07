/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'open-sans, sans-serif': '<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'GDGSURATlo',
                            type: 'image',
                            rect: ['2364px', '167px', '620px', '620px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"GDGSURATlo.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['444px', '-750px', 'auto', 'auto', 'auto', 'auto'],
                            text: "NIT SURAT",
                            font: ['open-sans, sans-serif', [203, "px"], "rgba(55,71,79,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['789px', '-542px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Designers",
                            align: "left",
                            font: ['open-sans, sans-serif', [150, "px"], "rgba(127,127,127,1.00)", "400", "none solid rgb(55, 71, 79)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['712px', '-537px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Developers",
                            align: "left",
                            font: ['open-sans, sans-serif', [150, "px"], "rgba(121,121,121,1.00)", "400", "none solid rgb(55, 71, 79)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['744px', '-534px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Entrepreneurs",
                            align: "left",
                            font: ['open-sans, sans-serif', [152, "px"], "rgba(121,122,122,1.00)", "400", "none solid rgb(55, 71, 79)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['724px', '-698px', '1113px', '348px', 'auto', 'auto'],
                            text: "A Community<br>of Innovation!",
                            align: "left",
                            font: ['open-sans, sans-serif', [152, "px"], "rgba(122,122,122,1.00)", "400", "none solid rgb(55, 71, 79)", "normal", "break-word", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 8674,
                    autoPlay: true,
                    data: [
                        [
                            "eid71",
                            "left",
                            6076,
                            0,
                            "easeInOutQuad",
                            "${Text5}",
                            '712px',
                            '712px'
                        ],
                        [
                            "eid63",
                            "height",
                            8674,
                            0,
                            "easeInOutQuad",
                            "${GDGSURATlo}",
                            '620px',
                            '620px'
                        ],
                        [
                            "eid67",
                            "left",
                            5205,
                            0,
                            "easeInOutQuad",
                            "${Text4}",
                            '789px',
                            '789px'
                        ],
                        [
                            "eid93",
                            "color",
                            3940,
                            4060,
                            "easeInOutQuad",
                            "${Text5}",
                            'rgba(121,121,121,1.00)',
                            'rgba(122,122,122,1.00)'
                        ],
                        [
                            "eid48",
                            "color",
                            7000,
                            0,
                            "easeInOutQuad",
                            "${Text6}",
                            'rgba(121,122,122,1.00)',
                            'rgba(121,122,122,1.00)'
                        ],
                        [
                            "eid92",
                            "color",
                            5561,
                            0,
                            "easeInOutQuad",
                            "${Text4}",
                            'rgba(127,127,127,1.00)',
                            'rgba(127,127,127,1.00)'
                        ],
                        [
                            "eid11",
                            "left",
                            2000,
                            2000,
                            "easeInOutQuad",
                            "${Text}",
                            '444px',
                            '-1528px'
                        ],
                        [
                            "eid23",
                            "top",
                            5,
                            1995,
                            "easeInOutQuad",
                            "${Text}",
                            '-750px',
                            '430px'
                        ],
                        [
                            "eid64",
                            "width",
                            8674,
                            0,
                            "easeInOutQuad",
                            "${GDGSURATlo}",
                            '620px',
                            '620px'
                        ],
                        [
                            "eid80",
                            "left",
                            6946,
                            0,
                            "easeInOutQuad",
                            "${Text6}",
                            '744px',
                            '744px'
                        ],
                        [
                            "eid29",
                            "left",
                            2000,
                            2000,
                            "easeInOutQuad",
                            "${GDGSURATlo}",
                            '2364px',
                            '-36px'
                        ],
                        [
                            "eid37",
                            "top",
                            5000,
                            1000,
                            "easeInOutQuad",
                            "${Text5}",
                            '-537px',
                            '403px'
                        ],
                        [
                            "eid38",
                            "top",
                            6000,
                            1000,
                            "easeInOutQuad",
                            "${Text5}",
                            '403px',
                            '1455px'
                        ],
                        [
                            "eid65",
                            "top",
                            8674,
                            0,
                            "easeInOutQuad",
                            "${GDGSURATlo}",
                            '167px',
                            '167px'
                        ],
                        [
                            "eid41",
                            "top",
                            6000,
                            1000,
                            "easeInOutQuad",
                            "${Text6}",
                            '-534px',
                            '430px'
                        ],
                        [
                            "eid44",
                            "top",
                            7000,
                            1000,
                            "easeInOutQuad",
                            "${Text6}",
                            '430px',
                            '1382px'
                        ],
                        [
                            "eid32",
                            "top",
                            4000,
                            1000,
                            "easeInOutQuad",
                            "${Text4}",
                            '-542px',
                            '374px'
                        ],
                        [
                            "eid33",
                            "top",
                            5000,
                            205,
                            "easeInQuad",
                            "${Text4}",
                            '374px',
                            '430px'
                        ],
                        [
                            "eid68",
                            "top",
                            5205,
                            795,
                            "easeOutQuad",
                            "${Text4}",
                            '430px',
                            '1422px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("gdg%20animation_edgeActions.js");
})("EDGE-212317464");
