import Chart from 'react-apexcharts';

const option = {
    labels : ['Expense', 'Income'],
    colors: ['#213ebf', '#FD5E53'],
    chart : { width : '50px'},
    states: { hover : { filter:{
        type : 'none',
    }}},
    legend: {
        show : false,
    },
    dataLabels: {
        enabled : false,
    },
    hover:{model:null},
    plotOptions :{
        donut:{labels : {
            show:false,
        },}
    },
    fill:{
        colors : ['#213ebf', '#FD5E53'],
    },
    tootip:{
        enabled : true,
        theme : 'dark',
        style :{
            fontSize : '12px',
            fontFamily : undefined,
            backgroundColor : '#00000'
        }
    }
}


export default function TransactionChartSummary({expense = 100, income = 100}){

    return( <Chart
     options={option}
     series={[income,expense]}
     type='pie'
     width={'100%'}
     height={'100%'}
    />)
}