import React from 'react'
import {render } from 'react-dom'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function Chart(){
    const options={
        chart: {
            type: 'spline'
          },
          title: {
            text: 'My chart'
          },
          series: [
            {
              data: [1,1,1,1,1,1]
            }
          ]
    }
    return(
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />

        </div>
    )
}
export default Chart;