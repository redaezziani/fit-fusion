'use client';

import React from "react";
import Chart from "chart.js";

export default function BarChart() {
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels:   ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء'],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#4a5568",
            borderColor: "#4a5568",
            data: [30, 78, 56, 34],
            fill: false,
            barThickness: 8,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#0da2e7",
            borderColor: "#0da2e7",
            data: [27, 68, 86, 74],
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
            labels: {
                fontColor: "#9f9f9f",
            },
            align: "end",
            position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "#9f9f9f",
                zeroLineColor: "#9f9f9f",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
                ticks: {
                    fontColor: "#9f9f9f" ,
                    },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "#9f9f9f",
                zeroLineColor: "#9f9f9f",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <div className=" h-80 w-full mt-2 flex-auto">
          <div className="relative w-full h-full">
            <canvas id="bar-chart"></canvas>
          </div>
    </div>
  );
}