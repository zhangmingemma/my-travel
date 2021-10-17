import FootprintsMgr from "../../models/FootprintsMgr";

Page({
    
    data: {
        cityList: [] as IGeoCell['properties'][]
    },

    async onLoad() {
        await FootprintsMgr.getAllCitys()
    },
});
