let canvas = document.querySelector('#SODA-CHART')
let context = canvas.getContext('2d')

let chart = new Chart(context, {
    type : 'bar',
    data : {
        labels : ['coke', 'pepsi', 'either', 'neither'],
        datasets : [ {
            label: 'number of votes',
            data: (18,14,7,10),
            backgroundColor : ['red', 'green', 'yellow', 'blue']
        }

        ]
    },
    options: {
        scales:{
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }

})