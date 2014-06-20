$(function () {
        $('#graphic-1').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'No. of deaths on train tracks in Palm Beach County'
            },
            subtitle: {
                text: 'Source: Fedor???'
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
                name: 'FEC',
                data: [6,7,5,7,5,6,1]
            },
            {
                name: 'CSX',
                data: [7,2,2,0,4,3,0]
            }
            ]
        });

    });