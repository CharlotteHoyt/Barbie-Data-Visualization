document.addEventListener('DOMContentLoaded', function () {
    Highcharts.setOptions({
        colors: ['#E0218A', '#ED5C9B', '#F18DBC', '#F7B9D7', '#FACDE5'],
    });

    /*Skin Tone Chart*/
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

    /*Eye Color Chart*/
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
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Number of Characters',
            }
        },
        series: [{
            name: 'Count',
            dataSorting: {
                   enabled: true,
                   sortKey: 'y'
            },
            data: [
                   { name: 'Blue', y: 180 },
                   { name: 'Green', y: 58 }, 
                   { name: 'Deep', y: 5 },
                   { name: 'Brown', y: 164 },
                   { name: 'Deep Blue', y: 5 },
                   { name: 'Purple', y: 3 },
                   { name: 'Black', y: 1 },
                   { name: 'Hazel', y: 1 },
                   { name: 'Light Blue', y: 6 },
                   { name: 'Light Brown', y: 9 },
                   { name: 'Light Green', y: 3 },
                   { name: 'Light Teal', y: 3 },
                   { name: 'Gray', y: 3 },
                   { name: 'Teal', y: 3 }
                  ]
        }]
    });

    /*Hair Color Chart*/
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
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Number of Characters',
            }
        },
        series: [{
            name: 'Count',
            dataSorting: {
                   enabled: true,
                   sortKey: 'y'
            },
            data: [
                    { name: 'Blonde', y: 130 },
                    { name: 'Brown', y: 143 },
                    { name: 'Silver', y: 2 },
                    { name: 'Light Brown', y: 10 },
                    { name: 'Gray', y: 28 },
                    { name: 'Medium Brown', y: 1 },
                    { name: 'Dark Brown', y: 1 },
                    { name: 'Dark', y: 35 },
                    { name: 'Red', y: 21 },
                    { name: 'Light Gray', y: 7 },
                    { name: 'Dark Gray', y: 10 },
                    { name: 'Black', y: 1 },
                    { name: 'Orange', y: 1 },
                    { name: 'Dark Blonde', y: 3 },
                    { name: 'Deep Brown', y: 1 },
                    { name: 'Light Blonde', y: 6 },
                    { name: 'White', y: 4 },
                    { name: 'Purple', y: 5 },
                    { name: 'Gray/White', y: 1 },
                    { name: 'Purple/Orange', y: 1 },
                    { name: 'Blue/Yellow', y: 1 },
                    { name: 'Brown/Blue', y: 1 },
                    { name: 'Blonde/Pink', y: 1 },
                    { name: 'Red/Orange', y: 1 },
                    { name: 'Dark Brown/Pink', y: 1 },
                    { name: 'Dark Red', y: 2 },
                    { name: 'Pale Blonde', y: 1 },
                    { name: 'Blue/Silver', y: 1 },
                    { name: 'Hazel', y: 1 },
                    { name: 'Violet/Pink', y: 1 },
                    { name: 'Light Gray/White', y: 1 },
                    { name: 'Brown/Purple', y: 3 },
                    { name: 'Pink', y: 3 },
                    { name: 'Dark/White', y: 1 },
                    { name: 'Green', y: 1 },
                    { name: 'Blue', y: 1 },
                    { name: 'Dark/Blue', y: 1 },
                    { name: 'Dark Pink', y: 1 },
                    { name: 'Brown/Pink', y: 1 },
                    { name: 'Brown/Blonde', y: 1 },
                    { name: 'Rainbow', y: 1 },
                  ]
        }]
    });

    /*Gender Chart*/
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