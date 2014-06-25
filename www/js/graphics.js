$(function () {
    Highcharts.setOptions({
        //colors: ['#072542', '#D6D6D5', '#516171', '#081624', '#E3981B', '#507043','#7B6D89']
        colors:['#334D5C','#45B29D','#EFC94C','#E27A3F','#DF4949','#df4949']
    });
       var chart1= $('#graphic-1').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'No. of deaths by track'
            },
            xAxis: {
                categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014'],
                startonTick: true,
                min: 0
            },
            yAxis: {
                title: {
                    text: 'No. of deaths'
                },
                min:0
            },            
            tooltip: {
                formatter: function() {
                    if(this.x != 0)
                    {                       
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'<br/>'+
                        'Total: '+ this.point.stackTotal;
                    }
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal' ,
                    datalabels:{
                        enabled:true,
                        formatter: function() {
                        if(this.x != 0)
                            {                       
                            return x;
                            }
                        }                        
                    }                    
                }
            },
            series: [            
            {
                name: 'Sugar Corp.',
                data: [0,0,0,0,1,0,0]
            },
            {
                name: 'n/a',
                data:[0,0,0,0,1,1,3]
            },            
            {
                name: 'CSX',
                data: [7,2,2,0,4,3,0]
            },
            {
                name: 'FEC',
                data: [6,7,5,7,5,6,1]
            }
            ]
        });

      var chart2 =$('#graphic-2').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotShadow: false,
                borderWidth: 0
            },
            title: {
                text: 'No. of deaths by location'
            },
            tooltip: {
                pointFormat: '<b>{point.y}</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}',
                        distance:-15,
                        inside: true,
                        style: {
                            color: 'white',
                            fontWeight:'bold'
                        }
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: '',
                data: [
                    ['Crossing (Pedestrian)',11],
                    ['Crossing (Vehicle)',  7],
                    ['Other',   3],                    
                    ['Unknown', 6],
                    ['Tracks',33]
                ]
            }]
        });
        
       var chart3 = $('#graphic-3').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,
            plotShadow: false
        },
        title: {
            text: null
        },
        tooltip: {
            pointFormat: '<b>{point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y}',
                    style: {
                        color: 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '',
            data: [
                ['White',   41],
                ['Black',   20]
            ]
        }]
    });
    var chart4=$('#graphic-4').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: null
        },
        tooltip: {
            pointFormat: '<b>{point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y}',
                    style: {
                        color: 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '',
            data: [
                ['Male',   53],
                ['Female', 8]
            ]
        }]
    });



});