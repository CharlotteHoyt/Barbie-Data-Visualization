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
                        name: 'Deep',
                        y: Math.round(((17 / 462) * 100) * 100) / 100
                    },
                    {
                        name: 'Medium Deep',
                        y: Math.round(((13 / 462) * 100) * 100) / 100
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
        plotOptions: {
            bar: {
                colorByPoint: true
            }
        },
        title: {
            text: 'Eye Color',
        },
        xAxis: {
            categories: ['Blue', 
                         'Green', 
                         'Deep', 
                         'Brown', 
                         'Deep Blue', 
                         'Purple', 
                         'Black',
                         'Hazel',
                         'Light Blue',
                         'Light Brown',
                         'Light Green',
                         'Light Teal',
                         'Gray',
                         'Teal']
        },
        yAxis: {
            title: {
                text: 'Number of Characters With Eye Color',
            }
        },
        series: [{
            name: 'Count',
            dataSorting: {
                   enabled: true, // Enable sorting
                   sortKey: 'y' // Sort by the y-value (bar length). 
            },
            data: [180, 58, 5, 164, 5, 3, 1, 1, 6, 9, 3, 3, 3, 3]
        }]
    });

    const hairColor = Highcharts.chart('hairColor', {
        chart: {
            type: 'bar'
        },
        plotOptions: {
            bar: {
                colorByPoint: true
            }
        },
        title: {
            text: 'Hair Color',
        },
        xAxis: {
            categories: ['Blonde',
                         'Brown', 
                         'Silver',
                         'Light Brown',
                         'Gray',
                         'Medium Brown',
                         'Dark Brown',
                         'Dark',
                         'Redhair',
                         'Light Gray',
                         'Dark Gray',
                         'Black',
                         'Orange',
                         'Dark Blonde',
                         'Deep Brown',
                         'Light Blonde',
                         'Red',
                         'White',
                         'Purple',
                         'Gray/White',
                         'Purple/Orange',
                         'Blue/Yellow',
                         'Brown/Blue',
                         'Blonde/Pink',
                         'Red/Orange',
                         'Dark Brown/Pink',
                         'Dark Red',
                         'Pale Blonde',
                         'Blue/Silver',
                         'Hazel',
                         'Violet/Pink',
                         'Light Gray/White',
                         'Brown/Purple',
                         'Pink',
                         'Dark White',
                         'Green',
                         'Blue',
                         'Dark/Blue',
                         'Dark Pink',
                         'Brown/Pink',
                         'Brown/Blonde',
                         'Rainbow'
                        ]
        },
        yAxis: {
            title: {
                text: 'Number of Characters With Hair Color',
            }
        },
        series: [{
            name: 'Count',
            dataSorting: {
                   enabled: true, // Enable sorting
                   sortKey: 'y' // Sort by the y-value (bar length). 
            },
            data: [130, 143, 2, 10, 28, 1, 22, 35, 18, 7, 10, 1, 1, 3, 1, 6, 3, 4, 5, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1]
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
