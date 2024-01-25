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
            labels: "Users",
            data: ["7.00", "16.000", "5.000", "26.000", '15.000', '45.000', '15.000', '23.000', '35.000', '14.000', '30.000', '26.000'],
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
        maintainAspectRatio: false,
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
              grace: "10%",
            ticks: {
                stepSize:4,
                precision: 1,
                maxTicksLimit: 9,
              },
             
          },
        },

        plugins: {
            tooltip:{
                yAlign:'bottom',
                displayColors:false,
                callback: ((context, index) =>{
                    console.log(context)
                    let response;
                        if(context === 1){
                            response = "$5.000";
                        } else if (index === 2){
                            response ="$10.000"
                        } else if (index === 3){
                            response = "$20.000"
                        } else if (index === 4) {  
                            response = "$30.000"
                        }else if (index === 5){
                            response ="$40.000"
                        }else if (index === 6){
                             response = "$50.000";
                        } else {
                            response = "0"
                       
                        }
                           

                    return response;
                })
            },
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
           padding: {
                left: 20, // Set left padding for the entire chart
                right: 20, // Set right padding for the entire chart
                top: 10, // Set top padding for the entire chart
                bottom: 10, // Set bottom padding for the entire chart
      },
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
        <div className='w-1/2 h-96 border p-3 rounded-xl border-back'>
            <Bar  data={Chartdata} options={options}/>
        </div>
    )
}

export default Charts