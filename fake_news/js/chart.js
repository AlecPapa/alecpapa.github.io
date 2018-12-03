window.onload = function() {

    var chart1 = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title: {
            text: "Chart1 - Majority say fake news has left Americans confused about basic facts"
        },
        subtitles: [{
            text: "% of U.S. adults who say completely made-up news has caused ____ about the basic facts of current evernts"
        }],
        axisY: {
            interval: 10,
            suffix: "%"
        },
        toolTip: {
            shared: true
        },
        data: [{
                type: "stackedBar100",
                toolTipContent: "{label}<br><b>{name}:</b> {y}%",
                showInLegend: true,
                name: "A great deal of confusion",
                dataPoints: [
                    { y: 64, label: "The confusion" }
                ]
            },
            {
                type: "stackedBar100",
                toolTipContent: "<b>{name}:</b> {y}%",
                showInLegend: true,
                name: "Some confusion",
                dataPoints: [
                    { y: 24, label: "The confusion" }
                ]
            },
            {
                type: "stackedBar100",
                toolTipContent: "<b>{name}:</b> {y}%",
                showInLegend: true,
                name: "Not much/no confusion",
                dataPoints: [
                    { y: 11, label: "The confusion" }
                ]
            }
        ]
    });
    chart1.render();

    var chart2 = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Chart2 - Majority are confident in their ability to recognize fake news"
        },
        subtitles: [{
            text: "% of U.S. adults who are ____ in their ability to recognize made-up news"
        }],
        data: [{
            type: "pie",
            startAngle: 270,
            yValueFormatString: "##0\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 39, label: "Very confident" },
                { y: 45, label: "Somewhat condident" },
                { y: 15, label: "Not very/at all confident" },
                { y: 1, label: "Don't know/refused" }
            ]
        }]
    });
    chart2.render();

    var chart3 = new CanvasJS.Chart("chartContainer3", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Chart3 - About a third say they often see made-up political news online; 51% say they see inaccurate news"
        },
        subtitles: [{
            text: "% of U.S. adults who say that they ..."
        }],
        axisY: {
            interval: 10,
            suffix: "%"
        },
        toolTip: {
            shared: true
        },
        data: [{
                type: "stackedBar100",
                toolTipContent: "{label}<br><b>{name}:</b> {y}%",
                showInLegend: true,
                name: "Often",
                dataPoints: [
                    { y: 32, label: "Completely made up" },
                    { y: 51, label: "Not fully accurate" }
                ]
            },
            {
                type: "stackedBar100",
                toolTipContent: "<b>{name}:</b> {y}%",
                showInLegend: true,
                name: "Sometimes",
                dataPoints: [
                    { y: 39, label: "Completely made up" },
                    { y: 27, label: "Not fully accurate" }
                ]
            },
            {
                type: "stackedBar100",
                toolTipContent: "<b>{name}:</b> {y}%",
                showInLegend: true,
                name: "Hardly ever/never",
                dataPoints: [
                    { y: 26, label: "Completely made up" },
                    { y: 19, label: "Not fully accurate" }
                ]
            }
        ]
    });
    chart3.render();

    var chart4 = new CanvasJS.Chart("chartContainer4", {
        theme: "light2",
        animationEnabled: true,
        title: {
            text: "Chart4 - About one in four report sharing fabricated news – whether aware at the time or not"
        },
        subtitles: [{
            text: "% of U.S. adults who think ____ have a great deal/some/little or no responsiblity in preventing completely make-up news from gaining attention"
        }],
        data: [{
            type: "bar",
            dataPoints: [
                { label: "Shared a political news story online they later found out was made up", y: 16, color: "#B17F87" },
                { label: "Shared a political news story online they knew at the time was made up", y: 14, color: "#B17F87" },
                { label: "Did either/both of these", y: 23, color: "#6C4047" }
            ]
        }]
    });
    chart4.render();

    var chart5 = new CanvasJS.Chart("chartContainer5", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Chart5,6 - Belief that fake news causes confusion shared widely"
        },
        subtitles: [{
            text: "% of U.S. adults who say completely made-up news has caused____confusion about basic facts of current events"
        }],
        axisY: {
            interval: 10,
            suffix: "%"
        },
        toolTip: {
            shared: true
        },
        data: [{
            type: "stackedBar100",
            toolTipContent: "{label}<br><b>{name}:</b> {y} %",
            showInLegend: true,
            name: "a great deal",
            dataPoints: [{
                y: 58,
                label: "65+"
            }, {
                y: 64,
                label: "50-64"
            }, {
                y: 66,
                label: "30-49"
            }, {
                y: 67,
                label: "AGES18-29"
            }, {
                y: 68,
                label: "WOMEN"
            }, {
                y: 61,
                label: "MEN"
            }, {
                y: 64,
                label: "TOTAL"
            }, ]
        }, {
            type: "stackedBar100",
            toolTipContent: "<b>{name}:</b> {y} %",
            showInLegend: true,
            name: "some",
            dataPoints: [{
                y: 29,
                label: "65+"
            }, {
                y: 23,
                label: "50-64"
            }, {
                y: 21,
                label: "30-49"
            }, {
                y: 26,
                label: "AGES18-29"
            }, {
                y: 23,
                label: "WOMEN"
            }, {
                y: 25,
                label: "MEN"
            }, {
                y: 24,
                label: "TOTAL"
            }, ]
        }, {
            type: "stackedBar100",
            toolTipContent: "<b>{name}:</b> {y} %",
            showInLegend: true,
            name: "not much",
            dataPoints: [{
                y: 6,
                label: "65+ "
            }, {
                y: 6,
                label: "50-64"
            }, {
                y: 9,
                label: "30-49"
            }, {
                y: 4,
                label: "AGES18-29"
            }, {
                y: 5,
                label: "WOMEN"
            }, {
                y: 8,
                label: "MEN"
            }, {
                y: 6,
                label: "TOTAL"
            }]
        }, {
            type: "stackedBar100",
            toolTipContent: "<b>{name}:</b> {y} %",
            showInLegend: true,
            name: "no",
            dataPoints: [{
                y: 5,
                label: "65+ "
            }, {
                y: 6,
                label: "50-64"
            }, {
                y: 4,
                label: "30-49"
            }, {
                y: 2,
                label: "AGES18-29"
            }, {
                y: 4,
                label: "WOMEN"
            }, {
                y: 5,
                label: "MEN"
            }, {
                y: 4,
                label: "TOTAL"
            }]
        }]
    });
    chart5.render();

    var chart6 = new CanvasJS.Chart("chartContainer6", {
        animationEnabled: true,
        theme: "light2",
        subtitles: [{
            text: "income"
        }],
        axisY: {
            interval: 10,
            suffix: "%"
        },
        toolTip: {
            shared: true
        },
        data: [{
            type: "stackedBar100",
            toolTipContent: "{label}<br><b>{name}:</b> {y} %",
            showInLegend: true,
            name: "a great deal",
            dataPoints: [{
                y: 58,
                label: "<$30000"
            }, {
                y: 65,
                label: "$30000-$74,999"
            }, {
                y: 73,
                label: ">$75000"
            }]
        }, {
            type: "stackedBar100",
            toolTipContent: "<b>{name}:</b> {y} %",
            showInLegend: true,
            name: "some",
            dataPoints: [{
                y: 25,
                label: "<$30000"
            }, {
                y: 18,
                label: "$30000-$74,999"
            }, {
                y: 19,
                label: ">$75000"
            }]
        }, {
            type: "stackedBar100",
            toolTipContent: "<b>{name}:</b> {y} %",
            showInLegend: true,
            name: "not much",
            dataPoints: [{
                y: 8,
                label: "<$30000"
            }, {
                y: 5,
                label: "$30000-$74,999"
            }, {
                y: 5,
                label: ">$75000"
            }]
        }, {
            type: "stackedBar100",
            toolTipContent: "<b>{name}:</b> {y} %",
            showInLegend: true,
            name: "no",
            dataPoints: [{
                y: 7,
                label: "<$30000"
            }, {
                y: 2,
                label: "$30000-$74,999"
            }, {
                y: 2,
                label: ">$75000"
            }]
        }]
    });
    chart6.render();

}