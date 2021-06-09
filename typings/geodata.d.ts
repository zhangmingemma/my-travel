declare interface IGetGeoDataReq {
    count?: number,
    offset?: number,
    adcode?: number,
    parentAdcode?: number,
    level?: string
}

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
        parent: { adcode: number},
        subFeatureIndex: number
    }
}