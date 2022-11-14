import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexPie4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [42, 47, 52, 58],

      options: {
        chart: {
          // width: 300,
          type: "polarArea",
          sparkline: {
            enabled: true,
          },
        },
        labels: ["VIP", "Reguler", "Exclusive", "Economic"],
        fill: {
          opacity: 1,
          colors: ["#363062", "#21b830", "#EB8153", "#ffe600"],
        },
        stroke: {
          width: 0,
          colors: undefined,
        },
        yaxis: {
          show: false,
        },
        legend: {
          position: "bottom",
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0,
            },
          },
        },
        theme: {
          monochrome: {
            enabled: true,
            shadeTo: "light",
            shadeIntensity: 0.6,
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart" className="apex-chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="polarArea"
          height={251}
          // width={300}
        />
      </div>
    );
  }
}

export default ApexPie4;
