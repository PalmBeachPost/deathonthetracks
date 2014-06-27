function loadGraphics() {
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
                name: 'SCFE-freight',
                data: [0,0,0,0,1,0,0]
            },
            {
                name: 'Not available',
                data:[0,0,0,0,0,1,2]
            },            
            {
                name: 'CSX-Tri-Rail',
                data: [7,2,2,0,5,3,0]
            },
            {
                name: 'FEC',
                data: [6,7,5,7,5,6,2]
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
                    ['Crossing-Pedestrian',10],
                    ['Crossing-Vehicle', 8],
                    ['Jumped from train', 3],                    
                    ['Not available', 7],
                    ['Between crossings',33]
                ]
            }]
        });
}