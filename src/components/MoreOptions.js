import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

require("highcharts/modules/map")(Highcharts);

function MoreOptions() {
  var options = {
    chart: {
      backgroundColor: {
        linearGradient: [0, 0, 500, 500],
        stops: [
          [0, "rgb(255, 255, 255)"],
          [1, "rgb(240, 240, 255)"],
        ],
      },
      borderWidth: 2,
      plotBackgroundColor: "rgba(255, 255, 255, .9)",
      plotShadow: true,
      plotBorderWidth: 1,
    },
  };
  var chart1 = ({
    chart: {
      renderTo: "container",
    },
    xAxis: {
      type: "datetime",
    },
    series: [
      {
        data: [
          29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4,
        ],
        pointStart: Date.UTC(2010, 0, 1),
        pointInterval: 3600 * 1000, // one hour
      },
    ],
  });
  var chart2 = ({
    chart: {
      renderTo: "container2",
      type: "column",
    },
    xAxis: {
      type: "datetime",
    },
    series: [
      {
        data: [
          29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4,
        ],
        pointStart: Date.UTC(2010, 0, 1),
        pointInterval: 3600 * 1000, // one hour
      },
    ],
  });

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options,chart1} />
    </div>
  );
}
export default MoreOptions;
