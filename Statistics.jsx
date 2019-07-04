import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
class Statistics extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         id: '',
         name: '',
         email: ''
      }
      this.pie_option = {
         chart: {
             plotBackgroundColor: null,
             plotBorderWidth: null,
             plotShadow: false,
             type: 'pie'
         },
         title: {
             text: 'Devices Location shares'
         },
         tooltip: {
             pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
         },
         plotOptions: {
             pie: {
                 allowPointSelect: true,
                 cursor: 'pointer',
                 dataLabels: {
                     enabled: true,
                     format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                     style: {
                         color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                     }
                 }
             }
         },
         series: [{
             name: 'Brands',
             colorByPoint: true,
             data: [{
                 name: 'SJ',
                 y: 69,
                 sliced: true,
                 selected: true
             }, {
                 name: 'BGL',
                 y: 20
             }, {
                 name: 'OTT',
                 y: 8
             }, {
                 name: 'Others',
                 y: 3
             }]
         }]
     }
      this.stack_options ={

         chart: {
             type: 'column'
         },
     
         title: {
             text: 'Message Trending'
         },
     
         xAxis: {
             categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday']
         },
     
         yAxis: {
             allowDecimals: false,
             min: 0,
             gridLineWidth: 0,
             title: {
                 text: 'Number of Messages'
             }
         },
     
         tooltip: {
             formatter: function () {
                 return '<b>' + this.x + '</b><br/>' +
                     this.series.name + ': ' + this.y + '<br/>' +
                     'Total: ' + this.point.stackTotal;
             }
         },
     
         plotOptions: {
             column: {
                 stacking: 'normal'
             }
         },
     
         series: [{
             name: 'error',
             data: [5, 3, 4, 7, 2,1],
             stack: 'total',
             'color':'#fd397a'
         }, {
             name: 'warn',
             data: [3, 4, 4, 2, 5,4],
             stack: 'total',
             color:'#ffb822'
         }, {
            name: 'info',
            data: [3, 4, 4, 2, 5,4],
            stack: 'total',
            'color':'#5867dd'
        }, {
         name: 'debug',
         data: [3, 4, 4, 2, 5,4],
         stack: 'total',
         color:'#1dc9b7'
     }]
     }
   }
   render() {
      return (
         <div style={{display:'-webkit-inline-box',width:'30%',height:'40%',marginLeft:'-150px'}}>
           <HighchartsReact highcharts={Highcharts} options={this.stack_options} />
           <HighchartsReact highcharts={Highcharts} options={this.pie_option} />
         </div>
      )
   }
}

export default Statistics;