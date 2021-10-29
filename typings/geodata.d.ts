// single geodata record
declare interface IGeoCell {
    _id: string,
    type: string,
    geometry: {
        coordinates: number[][][][],
        type: string
    },
    properties: {
        acroutes: number[],
        adcode: number,
        center: number[],
        centroid: number[],
        childrenNum: number,
        level: string,
        isCity?: boolean,
        name: string,
        parentAdcode: number,
        alias: string,
        subFeatureIndex: number
    }
}

// getAllCitys resp
declare interface IProvinceCell {
    name: string,
    adcode: number,
    chooseCityCount?: number,
    list: {
        name: string,
        alias: string,
        adcode: number,
        parentAdcode: number,
        isCity: boolean,
        isChoose?: boolean
    }[]
}

// Footprint data
declare interface IFootPrintCell {
    adcode: number,
    name: string,
    isCity: boolean,
    parentAdcode: number
}