import FootprintsMgr from "../../../../models/FootprintsMgr";
import { hideLoading, showLoading } from "../../../../utils/alert";
import { MapEnum } from "../../../../utils/define";
import { genOption } from "./genOption";

Component({
    data: {
        mapData: {} as {
            type: String,
            features: IGeoCell[]
        },
        mapOption: {},
        mapType: MapEnum.MapType.CHINA
    },

    methods: {
        async onLoad() {
            await this.initMapData()
        },

        async initMapData() {
            showLoading()
            const outlines = await FootprintsMgr.getUserMap()
            if (outlines) {
                this.setData({
                    mapOption: genOption(this.data.mapType, [{
                        name: '海南省',
                        value: 1
                    }, {
                        name: '内蒙古自治区',
                        value: 1
                    }]),
                    mapData: {
                        type: "FeatureCollection",
                        features: outlines
                    }
                })
                hideLoading()
            }
        },

        onAdd() {
            wx.navigateTo({
                url: `/pages/select/select`
            })
        }
    }
});
