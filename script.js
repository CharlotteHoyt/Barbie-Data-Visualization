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
            /*dataSorting: {
                   enabled: true,
                   sortKey: 'y'
            },*/
            data: [180, // Blue
                   58, // Green
                   5, // Deep
                   164, // Brown
                   5, // Deep Blue
                   3, // Purple
                   1, // Black
                   1, // Hazel
                   6, // Light Blue
                   9, // Light Brown
                   3, // Light Green
                   3, // Light Teal
                   3, // Gray
                   3 // Teal
                  ]
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
            /*dataSorting: {
                   enabled: true,
                   sortKey: 'y'
            },*/
            data: [130, // Blonde
                   143, // Brown
                   2, // Silver
                   10, // Light Brown
                   28, // Gray
                   1, // Medium Brown
                   22, // Dark Brown
                   35, // Dark
                   18, // Redhair
                   7, // Light Gray
                   10, //Dark Gray
                   1, // Black
                   1, // Orange
                   3, // Dark Blonde
                   1, // Deep Brown
                   6, // Light Blonde
                   3, // Red
                   4, // White
                   5, // Purple
                   1, // Gray/White
                   1, // Purple/Orange
                   1, // Blue/Yellow
                   1, // Brown/Blue
                   1, // Blonde/Pink
                   1, // Red/Orange
                   1, // Dark Brown/Pink
                   2, // Dark Red
                   1, // Pale Blonde
                   1, // Blue/Silver
                   1, // Hazel
                   1, // Violet/Pink
                   1, // Light Gray/White
                   3, // Brown/Purple
                   3, // Pink
                   1, // Dark/White
                   1, // Green
                   1, // Blue
                   1, // Dark/Blue
                   1, // Dark Pink
                   1, // Brown/Pink
                   1, // Brown/Blonde
                   1 // Rainbow
                  ]
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
