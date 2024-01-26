import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, Legend, Tooltip } from 'chart.js/auto'

ChartJS.register(
    Tooltip, Legend
) 

    
const Lines = ({color, fillColor}) => {    
    const [Chartdata, setChartData] = useState({                    
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets:[{
            labels: "Users",
            data: ["7.00", "16.000", "5.000", "26.000", '15.000', '45.000', '15.000', '23.000', '35.000', '14.000', '30.000', '26.000'],
            borderRadius:50,
            borderColor: color,
            borderWidth: 2,
            pointRadius: 0, // Set pointRadius to 0 to remove the circles
            pointHoverRadius: 0, // Set pointHoverRadius to 0 to remove hover circles
            backgroundColor:fillColor,
            fill: true,
        }]
    })

    const options = {
        responsive:true,
        maintainAspectRatio: false,
        type:'line',
        scales: {
            x: {
                // beginAtZero: false,

                grid: {
                  drawBorder: false,
                  display: false,
                  zeroLineWidth: false,
                  color: (ctx) =>{
                    const lines = ctx.chart.scales.y.ticks.length-1; 
                    return "green"
                  }
                  // Set to false to hide vertical grid lines
                
                },

                ticks:{
                    color: "#ffffff"
                  }

            },
          y: {
            beginAtZero: true,
            grid: {
               display: false,
                lineWidth: 0,
                // drawBorder:false,
                
              },
              border:{
                dash:[10, 10],
                color:"#EAEAEA"
              },
              grace: "10%",
            ticks: {
                color: "#ffffff",
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
              item[0].element._model.backgroundColor = '#EAEAEA';
              chart.update();
            }
          },
        
        },
        layout: {
           padding: {
                // left: 20, // Set left padding for the entire chart
                // right: 20, // Set right padding for the entire chart
                // top: 20, // Set top padding for the entire chart
                // bottom: 20, // Set bottom padding for the entire chart
      },
        },
        responsive: true,
        // maintainAspectRatio: false,
      };

     
    const getGradient= (chart) =>{
        const {ctx, chartArea: {top, bottom, left, right} } = chart
        const gradientSegment = ctx.createLinearGradient(0, top, 0, bottom)
        gradientSegment.addColorStop(0.5, "#34CAA5 ");
        gradientSegment.addColorStop(0.75, "#  ")       
        gradientSegment.addColorStop(0.75, "#34caa418  ") 

        return gradientSegment;


    }

    return (
        <div className='w-[100px] h-[70px] overflow-hidden' >
            <Line data={Chartdata} options={options}/>
        </div>
    )
}

export default Lines