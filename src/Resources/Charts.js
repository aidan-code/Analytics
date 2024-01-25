import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { userData } from '../UserData'
import { Chart as ChartJS, Legend, Tooltip } from 'chart.js/auto'

ChartJS.register(
    Tooltip, Legend
)
const Charts = () => {



    const [Chartdata, setChartData] = useState({
        labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets:[{
            labels: "Users Gained",
            data: ["7.00", "16.000", "5.000", "26.000", '15.000', '45.000', '15.000', '23.000', '35.000', '4.000', '30.000', '26.000'],
            borderRadius:50,
            borderWidth: 0,
            hoverBackgroundColor: (context) =>{
                const chart = context.chart;
                const { ctx, chartArea} = chart;

                if (!chartArea){
                    return null
                }

                if(context.dataIndex >= 0){
                    return getGradient(chart);
                } else {
                    return 'black'
                }
                
            },
            backgroundColor: '#34caa418 '
        }]
    })

    const options = {
        type:'bar',
        scales: {
            x: {
                // beginAtZero: false,

                grid: {
                  drawBorder: false,
                  display: false,
                  zeroLineWidth: 0,
                  // Set to false to hide vertical grid lines
                },
            },
          y: {
            beginAtZero: true,
            grid: {
               
                lineWidth: 0.5,
                // drawBorder:false,
                
              },
              border:{
                dash:[10, 10],
                color:"#EAEAEA"
              },
            ticks: {
                min:0,
                max:50.000,
                precision: 0, 
                // callback: function (value) {
                //     // Format the labels with thousand separators
                //     return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                //   },// Set the number of decimal places
              },
             
          },
        },
        plugins: {
          legend: {
            display: false,
            position: 'top',
          },

          onHover: (event, chart) => {
            const item = chart.getElementAtEvent(event);
    
            if (item.length > 0) {
              // Change color on hover
              item[0].element._model.backgroundColor = '#FF5722';
              chart.update();
            }
          },
        
        },
        layout: {
          padding: 10,
        },
        responsive: true,
        // maintainAspectRatio: false,
      };

     
    const getGradient= (chart) =>{
        const {ctx, chartArea: {top, bottom, left, right} } = chart
        const gradientSegment = ctx.createLinearGradient(0, top, 0, bottom)
        gradientSegment.addColorStop(0.5, "#34CAA5 ");
        gradientSegment.addColorStop(0.75, "#34caa418  ")       
        gradientSegment.addColorStop(0.75, "#34caa418  ") 

        return gradientSegment;


    }

    return (
        <div className='w-1/2 h-4/5 '>
            <Bar  data={Chartdata} options={options}/>
        </div>
    )
}

export default Charts