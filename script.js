document.addEventListener('DOMContentLoaded', function () {
    Highcharts.setOptions({
        colors: ['#E0218A', '#ED5C9B', '#F18DBC', '#F7B9D7', '#FACDE5'],
    });

    /*Actual Charts*/
    const skinTone = Highcharts.chart('skinTone', {
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
            text: 'Skin Tone',
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
                        name: 'Light Medium',
                        y: Math.round(((330 / 462) * 100) * 100) / 100
                    },
                    {
                        name: 'Light',
                        y: Math.round(((57 / 462) * 100) * 100) / 100
                    },
                    {
                        name: 'Medium',
                        y: Math.round(((44 / 462) * 100) * 100) / 100
                    },
                    {
                        name: 'Medium Deep',
                        y: Math.round(((13 / 462) * 100) * 100) / 100
                    },
                    {
                        name: 'Deep',
                        y: Math.round(((17 / 462) * 100) * 100) / 100
                    },
                    {
                        name: 'Green',
                        y: Math.round(((1 / 462) * 100) * 100) / 100
                    },
                ]
            }
        ]
    });

    const eyeColor = Highcharts.chart('eyeColor', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Eye Color',
        },
        xAxis: {
            categories: ['Category 1', 'Category 2', 'Category 3']
        },
        yAxis: {
            title: {
                text: 'Category Quantities',
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

    const hairColor = Highcharts.chart('hairColor', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Hair Color',
        },
        xAxis: {
            categories: ['Category 1', 'Category 2', 'Category 3']
        },
        yAxis: {
            title: {
                text: 'Category Quantities',
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

    const gender = Highcharts.chart('gender', {
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
            text: 'Gender',
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
                        name: 'Female',
                        y: Math.round(((311 / 522) * 100) * 100) / 100
                    },
                    {
                        name: 'Male',
                        y: Math.round(((211 / 522) * 100) * 100) / 100
                    },
                ]
            }
        ]
    });
});
