"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var genOption_1 = require("./genOption");
var china_1 = require("./china");
var echarts = require('./ec-canvas/echarts');
Component({
    properties: {},
    data: {
        ec: {},
        option: {},
    },
    attached: function () {
        this.setData({
            ec: {
                onInit: this.initChart()
            }
        });
    },
    detached: function () {
    },
    methods: {
        initChart: function () {
            var _this = this;
            var init = function (canvas, width, height, dpr) {
                var chart = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr,
                    renderer: 'canvas'
                });
                _this.data.option = genOption_1.genOption();
                canvas.setChart(chart);
                echarts.registerMap('china', china_1.china);
                chart.setOption(_this.data.option);
                return chart;
            };
            return init;
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXAtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUF1QztBQUN2QyxpQ0FBK0I7QUFDL0IsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUE7QUFFOUMsU0FBUyxDQUFDO0lBQ04sVUFBVSxFQUFFLEVBRVg7SUFDRCxJQUFJLEVBQUU7UUFDRixFQUFFLEVBQUUsRUFBRTtRQUNOLE1BQU0sRUFBRSxFQUFFO0tBQ2I7SUFDRCxRQUFRO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULEVBQUUsRUFBRTtnQkFDQSxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRTthQUMzQjtTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxRQUFRO0lBQ1IsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLFNBQVMsRUFBVDtZQUFBLGlCQWVDO1lBZEcsSUFBTSxJQUFJLEdBQUcsVUFBQyxNQUFVLEVBQUUsS0FBWSxFQUFFLE1BQWEsRUFBRSxHQUFVO2dCQUM3RCxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0JBQ3JDLEtBQUssRUFBRSxLQUFLO29CQUNaLE1BQU0sRUFBRSxNQUFNO29CQUNkLGdCQUFnQixFQUFFLEdBQUc7b0JBQ3JCLFFBQVEsRUFBRSxRQUFRO2lCQUNyQixDQUFDLENBQUM7Z0JBQ0gsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcscUJBQVMsRUFBRSxDQUFBO2dCQUM5QixNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUN0QixPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxhQUFLLENBQUMsQ0FBQTtnQkFDbkMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUNqQyxPQUFPLEtBQUssQ0FBQTtZQUNoQixDQUFDLENBQUE7WUFDRCxPQUFPLElBQUksQ0FBQTtRQUNmLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdlbk9wdGlvbiB9IGZyb20gJy4vZ2VuT3B0aW9uJ1xuaW1wb3J0IHsgY2hpbmEgfSBmcm9tICcuL2NoaW5hJ1xuY29uc3QgZWNoYXJ0cyA9IHJlcXVpcmUoJy4vZWMtY2FudmFzL2VjaGFydHMnKVxuXG5Db21wb25lbnQoe1xuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGVjOiB7fSxcbiAgICAgICAgb3B0aW9uOiB7fSwgXG4gICAgfSxcbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGVjOiB7XG4gICAgICAgICAgICAgICAgb25Jbml0OiB0aGlzLmluaXRDaGFydCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBkZXRhY2hlZCgpIHtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaW5pdENoYXJ0KCkge1xuICAgICAgICAgICAgY29uc3QgaW5pdCA9IChjYW52YXM6YW55LCB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXIsIGRwcjpudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFydCA9IGVjaGFydHMuaW5pdChjYW52YXMsIG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgZGV2aWNlUGl4ZWxSYXRpbzogZHByLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXJlcjogJ2NhbnZhcydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEub3B0aW9uID0gZ2VuT3B0aW9uKClcbiAgICAgICAgICAgICAgICBjYW52YXMuc2V0Q2hhcnQoY2hhcnQpXG4gICAgICAgICAgICAgICAgZWNoYXJ0cy5yZWdpc3Rlck1hcCgnY2hpbmEnLCBjaGluYSlcbiAgICAgICAgICAgICAgICBjaGFydC5zZXRPcHRpb24odGhpcy5kYXRhLm9wdGlvbilcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hhcnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbml0XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIl19