import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { userData } from '../UserData'
import { Chart as ChartJS } from 'chart.js/auto'
const Charts = () => {

    const [Chartdata, setChartData] = useState({
        labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets:[{
            labels: "Users Gained",
            data: userData.map((data) => data.amount),
            backgroundColor: '#34CAA51A'
        }]
    })

    return (
        <div>
            <Bar data={Chartdata}/>
        </div>
    )
}

export default Charts