import "./Chart.css"
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from "chart.js"
import React from "react";
import { Line } from "react-chartjs-2";
ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

const Data = {
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
    datasets: [
        {
            label: "میلیارد تومان",
            data: [150, 175, 130, 150, 190, 220, 300, 280, 250, 265, 230, 200],
            fill: false,
            backgroundColor: "rgb(169,8,169)",
            borderColor: "rgb(108, 174, 246)"
        }
    ]
}



export default function myChart() {

    return (
        <div className="chart">
            <h1>نمودار درآمد ماهانه فروشگاه</h1>
            <div className="myChart">
                <Line
                    data={Data}
                />
            </div>
        </div>
    )
}