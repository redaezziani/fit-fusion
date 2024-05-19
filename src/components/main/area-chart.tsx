'use client';
import React from "react";
import Chart from "chart.js";
import { useTheme } from "next-themes";

export default function ChartLine() {
    const {theme} = useTheme();
    React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels:   ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء'],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#0da2e7",
            borderColor: "#0da2e7",
            data: [65, 78, 66, 0],
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#4a5568",
            borderColor: "#4a5568",
            data: [40, 68, 86, 74],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
            display: false,
          },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: theme === "dark" ? "#9f9f9f" : "#9f9f9f",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
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
                fontColor: "#9f9f9f",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
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
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    
        <div className=" h-80 mt-2 w-full flex-auto">
          <div className="relative w-full h-full">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
  );
}