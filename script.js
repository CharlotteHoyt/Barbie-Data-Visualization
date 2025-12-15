document.addEventListener('DOMContentLoaded', function () {
    /*Highcharts.createElement('link', {
        href: 'fonts.googleapis.com',
        rel: 'stylesheet',
        type: 'text/css'
    }, null, document.getElementsByTagName('head')[0]);*/

    Highcharts.setOptions({
        colors: ['#E0218A', '#ED5C9B', '#F18DBC', '#F7B9D7', '#FACDE5'],

        style: {
            fontFamily: 'Geologica, sans-serif'
        }
    });

    const testChart1 = Highcharts.chart('testChart1', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Test Chart 1'
        },
        xAxis: {
            categories: ['Category 1', 'Category 2', 'Category 3']
        },
        yAxis: {
            title: {
                text: 'Category Quantities'
            }
        },
        series: [{
            name: 'Item 1',
            data: [1, 0, 4]
        }, {
            name: 'Item 2',
            data: [5, 7, 3]
        }, {
            name: 'Item 3',
            data: [2, 4, 6]
        }, {
            name: 'Item 4',
            data: [1, 5, 7]
        }, {
            name: 'Item 5',
            data: [2, 4, 8]
        }]
    });

    const testChart2 = Highcharts.chart('testChart2', {
        chart: {
            type: 'pie',
            zooming: {
                type: 'xy'
            },
            panning: {
                enabled: true,
                type: 'xy'
            },
            panKey: 'shift'
        },
        title: {
            text: 'Test Chart 2'
        },
        tooltip: {
            valueSuffix: '%'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20
                }, {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f}%',
                    style: {
                        fontSize: '1.2em',
                        textOutline: 'none',
                        opacity: 0.7
                    },
                    filter: {
                        operator: '>',
                        property: 'percentage',
                        value: 10
                    }
                }]
            }
        },
        series: [
            {
                name: 'Percentage',
                colorByPoint: true,
                data: [
                    {
                        name: 'Category 1',
                        y: 33.2
                    },
                    {
                        name: 'Category 2',
                        y: 22.9
                    },
                    {
                        name: 'Category 3',
                        y: 11.1
                    },
                    {
                        name: 'Category 4',
                        y: 7.4
                    },
                    {
                        name: 'Category 5',
                        y: 25.4
                    },
                ]
            }
        ]
    });

    /*Highcharts.ajax({
        url: 'data/Barbieverse_Characters.csv',
        
        success: function(csvData) {
            const lines = csvData.split('\n');
            const seriesData = [];

            lines.forEach((line, index) => {
                if (index === 0) return;
                const [category, value1] = line.split(',');
                if (category) {
                    seriesData.push({
                        name: category,
                        y: parseFloat(value1)
                    });
                }
            });

            const testChart3 = Highcharts.chart('testChart3', {
                chart: {
                    type: 'pie',
                    zooming: {
                        type: 'xy'
                    },
                    panning: {
                        enabled: true,
                        type: 'xy'
                    },
                    panKey: 'shift'
                },
                title: {
                    text: 'Test Chart 2'
                },
                tooltip: {
                    valueSuffix: '%'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: [{
                            enabled: true,
                            distance: 20
                        }, {
                            enabled: true,
                            distance: -40,
                            format: '{point.percentage:.1f}%',
                            style: {
                                fontSize: '1.2em',
                                textOutline: 'none',
                                opacity: 0.7
                            },
                            filter: {
                                operator: '>',
                                property: 'percentage',
                                value: 10
                            }
                        }]
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Combined Value',
                    data: seriesData
                }]
            });
        }
    });*/

    const testChart3 = Highcharts.chart('testChart3', {
        data: {
            csv: 'data/Barbieverse_Characters.csv',
            firstRowAsNames: true, 
            itemDelimiter: ',',
            lineDelimiter: '\n',
        
            complete: function (options) {
                console.log("Data parsing complete. Series names loaded.");
            }
        },
        chart: {
            type: 'pie',
            zooming: {
                type: 'xy'
            },
            panning: {
                enabled: true,
                type: 'xy'
            },
            panKey: 'shift'
        },
        title: {
            text: 'Test Chart 3'
        },
        tooltip: {
            valueSuffix: '%'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20
                }, {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f}%',
                    style: {
                        fontSize: '1.2em',
                        textOutline: 'none',
                        opacity: 0.7
                    },
                    filter: {
                        operator: '>',
                        property: 'percentage',
                        value: 10
                    }
                }]
            }
        },
        series: [
            {
                name: 'Percentage',
                colorByPoint: true,
                data: [
                    {
                        name: 'Category 1',
                        y: 33.2
                    },
                    {
                        name: 'Category 2',
                        y: 22.9
                    },
                    {
                        name: 'Category 3',
                        y: 11.1
                    },
                    {
                        name: 'Category 4',
                        y: 7.4
                    },
                    {
                        name: 'Category 5',
                        y: 25.4
                    },
                ]
            }
        ]
    });

    const testChart4 = Highcharts.chart('testChart4', {
        data: {
            csv: 'data/Barbieverse_Characters.csv',
            firstRowAsNames: true, 
            itemDelimiter: ',',
            lineDelimiter: '\n',

            seriesMapping: [{
                Movie: 0, 
                Character_Identifier: 1, 
                Character_Name: 2,
                Barbie_Cast: 3,
                Skin_Tone: 4, 
                Eyes: 5,
                Hair: 6,
                Skin_Tone: 7,
                Eyes: 8, 
                Hair: 9,
                Gender: 10,
                Speaking_Voice: 11,
                Singing_Voice: 12
            }],
        
            complete: function (options) {
                console.log("Data parsing complete. Series names loaded.");
            }
        },
        chart: {
            type: 'column',
        },
        title: {
            text: 'Test Chart 4'
        },
        xAxis: {
            minTickInterval: 20
        },
        yAxis: {
            title: {
                text: 'Count'
            },
        },

    });

    const testChart5 = Highcharts.chart('testChart5', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Test Chart 5'
        },
        data: {
            csvURL: 'data/Barbieverse_Characters.csv'
            // csvURL: 'https://github.com/CharlotteHoyt/Barbie-Data-Visualization/blob/main/data/Barbieverse_Characters.csv'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y}%'
                }
            },
        },
        series: [{
            name: 'Gender'
        }]
    });

});

/*$(document).ready(function() {
    var options = {
        chart: {
            renderTo: 'container',
            type: 'pie'
        },
        title: {
            text: 'Test Chart'
        },
        series: [{
            data: []
        }]
    };

    $.get('data.csv', function(data) {
        var lines = data.split('\n');
        
        $.each(lines, function(lineNo, line) {
            if (lineNo > 0) { 
                var items = line.split(',');
                options.series[0].data.push([items[0], parseFloat(items[1])]); 
            }
        });

        var chart = new Highcharts.chart(options);
    });
});*/