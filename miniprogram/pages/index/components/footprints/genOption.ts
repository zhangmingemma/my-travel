export const genOption = (mapType:string, data = [] as {
   name: string,
   value: number 
}[]) => {
    return {
        visualMap: {
            show: false,
            min: 1,
            max: 2,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#461CE5']
            }
        },
        geo: {
            show: true,
            left: 0,
            right: 0,
            top: 0,
            map: mapType,
            itemStyle: {
                borderColor: '#461CE5',
                borderWidth: 2.5
            }
        },
        series: [{
            type: 'map',
            mapType: mapType,
            roam: false,
            left: 0,
            right: 0,
            top: 0,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    borderColor: 'rgba(113,138,174, 0.3)',
                    areaColor: 'rgb(20,28,52)'
                },
                emphasis: {
                    label: {
                        show: false
                    },
                    areaColor: 'rgb(20,28,52)'
                }
            },
            animation: true,
            data: data
        }]
    }
}