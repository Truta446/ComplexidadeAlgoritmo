const myChart2 = echarts.init(document.getElementById('main'));

function geraGraficoGrafos() {
    option = {
        title: {
            text: 'Graph Djisktra'
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                type: 'graph',
                layout: 'none',
                symbolSize: 50,
                roam: true,
                label: {
                    normal: {
                        show: true
                    }
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                    normal: {
                        textStyle: {
                            fontSize: 20
                        }
                    }
                },
                data: [{
                    name: '1',
                    x: 300,
                    y: 300
                }, {
                    name: '2',
                    x: 800,
                    y: 300
                }, {
                    name: '3',
                    x: 550,
                    y: 100
                }, {
                    name: '4',
                    x: 550,
                    y: 500
                }],
                links: [{
                    source: 0,
                    target: 1,
                    symbolSize: [5, 20],
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 5,
                            curveness: 0.2
                        }
                    }
                }, {
                    source: '2',
                    target: '1',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: { curveness: 0.2 }
                    }
                }, {
                    source: '1',
                    target: '3'
                }, {
                    source: '2',
                    target: '3'
                }, {
                    source: '2',
                    target: '4'
                }, {
                    source: '1',
                    target: '4'
                }],
                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 2,
                        curveness: 0
                    }
                }
            }
        ]
    };

    myChart2.setOption(option);
}