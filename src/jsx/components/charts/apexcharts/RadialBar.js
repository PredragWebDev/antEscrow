import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexRedialBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [81],
      options: {
        chart: {
          height: 300,
          type: "radialBar",
          offsetY: -10,
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: "16px",
                color: undefined,
                offsetY: 120,
              },
              value: {
                offsetY: 0,
                fontSize: "34px",
                color: "#EB8153",
                formatter: function (val) {
                  return val + "%";
                },
              },
            },
          },
        },
        fill: {
          type: "gradient",
          colors: "#EB8153",
          gradient: {
            shade: "dark",
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91],
          },
        },
        stroke: {
          dashArray: 4,
          colors: "#EB8153",
        },
        labels: [""],
      },
    };
  }

  render() {
    return (
      <div id="chart" className="apex-chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={350}
        />
      </div>
    );
  }
}
export default ApexRedialBar;
