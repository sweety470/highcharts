import React from 'react'
import {render } from 'react-dom'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

require('highcharts/modules/map')(Highcharts);

function BarChart (){
        var chart1 = ({
            chart: {
                renderTo: 'container',
                type: 'bar'
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, 
            {
                name: 'John',
                data: [5, 7, 3]
            }]
        });
    
    

    
    return(
        <div>
            <HighchartsReact highcharts={Highcharts} options={chart1} />
         </div>
    )
    }
export default BarChart;