export const genOption = (mapType:string, data = [] as {
   name: string,
   value: number 
}[]) => {
    return {
        visualMap: {
            show: false,
            min: 1,
            max: 10,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['orange']
            }
        },
        geo: {
            show: true,
            left: 0,
            right: 0,
            top: 0,
            map: mapType,
            itemStyle: {
                borderColor: 'orange',
                borderWidth: 3,
                areaColor: 'rgb(20,28,52)'
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
                    areaColor: 'rgb(40,35,80)'
                },
                emphasis: {
                    label: {
                        show: false
                    },
                    // areaColor: 'rgb(20,28,52)'
                    areaColor: 'rgb(40,35,80)'
                }
            },
            animation: true,
            data: data
        }]
    }
}