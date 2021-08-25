import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
require("highcharts/modules/exporting")(Highcharts);
import sampleData from "./sampleData";

// var data = [];
// sampleData.map((item) => {
//   data.push([item.priceChangePercent]);
// });
// console.log(data);

export default function Sample() {
  var priceChangePercent = [];
  var volumeChangePercent = [];
  var date = [];
  var timestamp = [];
  var real_data = [];
  var sixth_jan = [];

//   sampleData.map((item) => {
//     let date = new Date(item.date + " " + item.label).getTime();
//     if (new Date(item.date).getTime() < 1579717800000) {
//       real_data.push([date, item.priceChangePercent]);
//     }
//     if (new Date(item.date).getTime() == 1578249000000) {
//       sixth_jan.push([date,item.priceChangePercent]);
//     } else {
//       let date = new Date(item.date).getTime();
//       real_data.push([date, item.priceChangePercent]);
//     }
//   });
//   sampleData.map((item) => {
//     let date = new Date(item.date + " " + item.label).getTime();
//   });
//   console.log(sixth_jan)
//   console.log(real_data);
var whole_data=[]
  sampleData.map((item)=>{
    //   console.log(item)
    //   console.log([item.label])
      if ([item.label("[,:-]+")]){
          let w=new Date(`${item.date} ${item.label}`).getTime()
          console.log(w)
          console.log([w.priceChangePercent])
        whole_data.push([w,item.priceChangePercent])
      }else{
          let t=new Date(`{item.date}`).getTime()
        //   console.log(t)
      }
  })

  // var data=[];
  // const flatten=()=>{
  //     sampleData.map(item=>{
  //         var d=new Date(item.date).getTime()
  //         // d=item.date
  //         console.log(d)
  //         if(d===1590949800000){
  //             data.push([item.priceChangePercent])
  //         }
  //         else{
  //             data.push([item.priceChangePercent,item.volumeChangePercent])
  //         }
  //     })
  // }
  // flatten()
  // sampleData.map(item=>{
  //     console.log(item)
  // })
  var options = {
    chart: {
      zoomType: "x",
    },
    title: {
      text: "show object data",
    },
    // xAxis: {
    //   type: "datetime",
    // },
    yAxis: {
      title: {
        text: "priceChangePercent",
      },

      
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: true,
    },
    series: [
      {
        type: "area",
        name: "USD to EUR",
        data: sixth_jan,
      },
      {
        type: "area",
        name: "USD to EUR",
        data: real_data,
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
