export const genOption = (data = [] as any) => {
    return {
        visualMap: VISUAL_MAP,
        series: genSeries(data)
    }
}

export const genSeries = (data: any) => {
    return [{
        type: 'map',
        mapType: 'china',
        roam: false,
        left: 0,
        right: 0,
        top: 0,
        label: LABEL,
        itemStyle: ITEM_STYLE,
        animation: true,
        data: data
    }]
}

export const VISUAL_MAP = {
    show: false,
    min: 1000,
    max: 10000,
    inRange: {
        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    },
    text: ['High', 'Low'],
    calculable: false
}

export const LABEL = {
    normal: {
        show: false,
        textStyle: {
            color: 'rgb(185, 220, 227)',
            fontSize: 10
        }
    },
    emphasis: {
        show: false,
        textStyle: {
            color: 'rgb(185, 220, 227)',
            fontSize: 10
        }
    }
}

export const ITEM_STYLE = {
    normal: {
        borderColor: '#ffffff',
        areaColor: 'rgb(20,28,52)'
    },
    emphasis: {
        areaColor: 'rgb(20,28,52)'
    }
}