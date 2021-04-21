// ---------------------------------------------------------------------------- !!! - - C H A R T - - !!!
const ajaxStat = (select, layout) => {
    $.ajax({
        type: 'POST',
        url: 'php/stat.php',
        data : {select:select},
        datatype: 'json',
        success: function (result) {
            // Est-ce que result contient au moins 1 chiffre de data ?
            const donnees = JSON.parse(result).datasets[0].data[0];
            if(!donnees) {
                stat_Reset();
                $('#modal_stat').modal('show');
            } else {
                const ctx = document.getElementById(select).getContext("2d");
                const myChart = new Chart(ctx,
                {
                    type: 'doughnut',
                    data: JSON.parse(result),
                    options: {
                        // title: {
                        //     display: true,
                        //     text: strUpFirst(select),
                        //     fontFamily:'DejaVu Sans',
                        //     fontSize:20,
                        //     fontColor:'#191E36',
                        //     fontStyle:'bold'
                        // },
                        // responsive: true,
                        legend: {
                            position: "right",
                            align: "start",
                            labels: {
                                boxWidth: 10
                            }
                        },
                        animation: {
                            duration: 2000
                        },
                        layout: {
                            padding: {
                                left: 0,
                                right: layout,
                                top: 0,
                                bottom: 0
                            }
                        },
                        plugins: {
                            // Nécéssite le plugin-datalabels en script dans stat.php
                            datalabels: {
                                formatter: (value, ctx) => {
                                    let sum = 0;
                                    let dataArr = ctx.chart.data.datasets[0].data;
                                    dataArr.map(data => {
                                        sum += data;
                                    });
                                    let percentage = (value*100 / sum).toFixed(2)+"%";
                                    return percentage;
                                },
                                color: '#fff',
                            }
                        }
                    }
                })
            }
        }
    })
}
