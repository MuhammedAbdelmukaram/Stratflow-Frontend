

export const data2 = {
    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderColor: 'rgba(0, 0, 0, 1)',
            pointBorderColor: 'rgba(0, 0, 0, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 4,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(0, 0, 0, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 59, 40, 85, 65, 59, 80, 81, 56],
        },
        {
            label: 'My Second dataset',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(0, 255, 0, 0.4)',
            borderColor: 'rgba(6, 173, 133,1)',
            borderDash: [10, 5],
            pointBorderColor: 'rgba(6, 173, 133,1)',
            pointBackgroundColor: 'rgba(6, 173, 133,1)',
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(6, 173, 133,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [30, 40, 50, 60, 50, 30, 55, 30, 40, 50, 60, 45],
        }
    ],
};



export const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: true,
            backgroundColor: (ctx) => {
                const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, ctx.chart.height);
                gradient.addColorStop(0, 'rgba(33, 37, 41, 0.2)');
                gradient.addColorStop(0.5, 'rgba(33, 37, 41, 0.1)');
                gradient.addColorStop(1, 'rgba(33, 37, 41, 0)');
                return gradient;
            },
            lineTension: 0.3,
            borderColor: '#212529',
            borderDash: [],
            borderDashOffset: 0,
            borderWidth: 1.5,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [75, 59, 80, 81, 56, 55, 85]
        },
    ],
};

export const options2 = {
    scales: {
        x: {
            ticks: {
                beginAtZero: false,
            },
            grid: {
                display: false,
            },
        },
        y: {
            min: 0,
            ticks: {
                beginAtZero: true,


            },
            grid: {
                drawBorder: false,
                display: false,
            },
        },
    },

    responsive: false,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: true,
            mode: 'nearest',
            intersect: false,
            callbacks: {
                title: function (tooltipItem, data) {
                    return data.labels[tooltipItem[0].index];
                },
                label: function (tooltipItem, data) {
                    let label = data.datasets[tooltipItem.datasetIndex].label || '';
                    if (label) {
                        label += ': ';
                    }
                    label += tooltipItem.yLabel;
                    return label;
                },
            },
        },
    },
};

export const options = {
    scales: {
        // to remove the labels
        scaleLineColor: 'transparent',
        x: {

            display: false,

            ticks: {
                display: false,
            },

            // to remove the x-axis grid
            grid: {
                drawBorder: false,
                display: false,
            },
        },
        // to remove the y-axis labels
        y: {

            display: false,
            ticks: {
                display: false,
                beginAtZero: true,
            },
            // to remove the y-axis grid
            grid: {
                drawBorder: false,
                display: false,
            },
        },

    },


    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: false,}
    },

    responsive: false,
    maintainAspectRatio: false,
    width: 140,
    height: 100,
};

export const BarOptions = {
    plugins: {
        title: {
            display: true,
            text: 'Flow Triggers',
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
            grid: {
                drawBorder: false,
                display: false,
            },

        },
        y: {
            stacked: true,
        },
    },
};


const labels = ['Flow1', 'Flow2', 'Flow3', 'Flow4', 'Flow5', 'Flow6', 'Flow7'];

const fakeData1 = [4, 10, 0, 10, 8, 0, 0];
const fakeData2 = [2, 0, 8, 10, 5, 0, 3];
const fakeData3 = [4, 5, 5, 0, 10, 3, 3];

export const BarData = {
    labels,
    datasets: [
        {
            label: 'Budget increase',
            data:fakeData1,
            backgroundColor: 'rgb(6,173,133)',
            barPercentage: 0.1, // Adjust as needed
            categoryPercentage: 0.8, // Adjust as needed
            borderRadius: {
                topLeft: 10,
                topRight: 10,
                bottomLeft: 10,
                bottomRight: 10
            }
        },
        {
            label: 'Budget decrease',
            data: fakeData2,
            backgroundColor: 'rgb(95,47,47)',
            barPercentage: 0.1, // Adjust as needed
            categoryPercentage: 0.8, // Adjust as needed
            borderRadius: {
                topLeft: 10,
                topRight: 10,
                bottomLeft: 10,
                bottomRight: 10
            }
        },
        {
            label: 'Pause',
            data: fakeData3,
            backgroundColor: 'rgb(208,212,8)',
            barPercentage: 0.1, // Adjust as needed
            categoryPercentage: 0.8, // Adjust as needed
            borderRadius: {
                topLeft: 10,
                topRight: 10,
                bottomLeft: 10,
                bottomRight: 10
            }
        },
    ],
};
