import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';







const Chart = () => {
const [comment, setComment] = useState([]);

  

  useEffect(() => {
    fetch("https://api.github.com/repositories/19438/issues")
      .then(response => {
        return response.json();
      })
      .then(data => 
        
    
      setComment(data)
      
      );
  }, []);

const getName = localStorage.getItem("Name");
const getPassword = localStorage.getItem("Password");



const state = comment.map(info => {
   return {
    name:info.updated_at,
    y: info.comments
  }
});


const options = {
 
  chart: {
    type: getName === "John" && getPassword === '12345' ? "column"
        : getName ==="MICKY" && getPassword ==='98765' ? "pie"
        : false
},
title: {
    text: 'How many comments and the comments date is show with HighChart'
},
subtitle: {
    text: 'Click to Know the Api Source: <a href="https://api.github.com/repositories/19438/issues" target="_blank">Api Link</a>'
},
xAxis: {
    type: 'category'
},
yAxis: {
    title: {
        text: 'Comments Number'
    }

},
legend: {
    enabled: false
},
plotOptions: {
    series: {
        pointPadding: 0.4,
        borderWidth: 0,
        dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
        }
    }
},
tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
},

series: [
    {
        name: "Browsers",
        colorByPoint: true,
        data: state,
    }
],
};

  return( 
<>









<HighchartsReact highcharts={Highcharts} options={options} />;
<br/>
 <Link to="/">
     <h1>Back to Home</h1>
    </Link>
</>

  ) 
};

export default Chart;