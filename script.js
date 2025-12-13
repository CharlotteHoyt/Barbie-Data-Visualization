document.addEventListener('DOMContentLoaded', function () {
    Highcharts.setOptions({
        colors: ['#E0218A', '#ED5C9B', '#F18DBC', '#F7B9D7', '#FACDE5']
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

});