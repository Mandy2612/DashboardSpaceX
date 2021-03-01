//Line chart 'Distance'
Chart.defaults.global.defaultFontColor = 'white';
var ctx = document.getElementById('linechart').getContext('2d');
var background_1 = ctx.createLinearGradient(0, 0, 0, 380);
    background_1.addColorStop(0, '#9C60FD');
    background_1.addColorStop(0.8, '#815FB8');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [0, 1, 2, 3, 4, 5, 6],
        datasets: [{
            label: 'Distance',
            backgroundColor: background_1,
            borderColor: false,
            data: [0, 5, 8, 15, 23, 26, 34],
            fill: true,
            pointRadius: 0,
            borderWidth: 1,
            offsetGridLines: false,
            responsive: true,
            
        }]
    },

    options: {
        legend:{
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                    color: 'white'
                },
                ticks: {
                    maxTicksLimit: 7,
                    fontSize: 12
                },
               scaleLabel: {
                    display: false
                },
            
          
            }],
            xAxes: [{
                gridLines: {
                   display: false,
                   color: 'white'
                },
                scaleLabel: {
                    display: false
                },  
                ticks: {
                    fontSize: 13
                }
            }]
        }

    }
});


//Half doughnut chart 'Fuel Gauge'
var ctx = document.getElementById('gaugeChart');
    var dashboardChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Empty', 'Full'],
            datasets: [{
                label: '%',
                data: [75,25],
                backgroundColor: [
                    'red',
                    'green'
                ],
                borderColor: [ 'white'
                ],
                borderWidth: 1,

            }]

        },
        options: {
            responsive: true,
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            },
            cutoutPercentage: 85,
            
        }
    });

// Dougnut chart 'My Day'
var ctx = document.getElementById('doughnutchart');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Sleeping', 'Eating', 'Drinking', 'Reading', 'Playing', 'Other'],
    datasets: [{
      label: '# of Day',
      data: [35, 18, 20, 10, 12, 5],
      backgroundColor: [
        'rgba(81, 19, 143, 0.6)',
        'rgba(120, 37, 204, 0.6)',
        'rgba(152, 76, 230, 0.6)',
        'rgba(175, 113, 240, 0.6)',
        'rgba(156, 96, 253, 0.6)',
        'rgba(223, 204, 255, 0.6)'
      ],
      borderColor: [
       'rgba(81, 19, 143, 1)',
        'rgba(120, 37, 204, 1)',
        'rgba(152, 76, 230, 1)',
        'rgba(175, 113, 240,1)',
        'rgba(156, 96, 253, 1)',
        'rgba(223, 204, 255, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
   legend:{
    display: false,
   }
    }
});

//Bar chart 'Stock of food'
var ctx = document.getElementById('barchart').getContext('2d');
var background_1 = ctx.createLinearGradient(0, 0, 0, 400);
    background_1.addColorStop(0.1, '#9C60FD');
    background_1.addColorStop(0.8, '#815FB8');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Bread', 'Fruit', 'Water', 'Snacks', 'Sauces'],
    datasets: [{
        data: [90, 65, 80, 70, 60],
        backgroundColor: background_1,
        hoverBackgroundColor: '#863bff'
    }]
  },
  options: {
    legend: false,
   responsive: true,
    scales: {
      xAxes: [{
        ticks: {
            maxRotation: 90,
            minRotation: 80,
            fontSize: 13,
        },
            barThickness: 'flex',
            minBarLength: 10,
            barPercentage: 0.7,  
            gridLines: {
                display: false,
                color: 'white'
        },
         
      }],
      
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontSize: 13,
          maxTicksLimit: 7,
        },
        barPercentage: 0.7,
         gridLines: {
          display: false,
          color: 'white'
      }

      }]
    }
  }
});

