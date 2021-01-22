"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var genOption_1 = require("./genOption");
var echarts = require('./ec-canvas/echarts');
Component({
    properties: {},
    data: {
        ec: {},
        option: {},
    },
    attached: function () {
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
                echarts.registerMap('china', china);
                chart.setOption(_this.data.option);
                return chart;
            };
            return init;
        },
        genOption: function () {
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXAtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUF1QztBQUV2QyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQTtBQUU5QyxTQUFTLENBQUM7SUFDTixVQUFVLEVBQUUsRUFFWDtJQUNELElBQUksRUFBRTtRQUNGLEVBQUUsRUFBRSxFQUFFO1FBQ04sTUFBTSxFQUFFLEVBQUU7S0FDYjtJQUNELFFBQVE7SUFNUixDQUFDO0lBQ0QsUUFBUTtJQUNSLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDTCxTQUFTLEVBQVQ7WUFBQSxpQkFlQztZQWRHLElBQU0sSUFBSSxHQUFHLFVBQUMsTUFBVSxFQUFFLEtBQVksRUFBRSxNQUFhLEVBQUUsR0FBVTtnQkFDN0QsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFO29CQUNyQyxLQUFLLEVBQUUsS0FBSztvQkFDWixNQUFNLEVBQUUsTUFBTTtvQkFDZCxnQkFBZ0IsRUFBRSxHQUFHO29CQUNyQixRQUFRLEVBQUUsUUFBUTtpQkFDckIsQ0FBQyxDQUFDO2dCQUNILEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFTLEVBQUUsQ0FBQTtnQkFDOUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDdEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQ25DLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDakMsT0FBTyxLQUFLLENBQUE7WUFDaEIsQ0FBQyxDQUFBO1lBQ0QsT0FBTyxJQUFJLENBQUE7UUFDZixDQUFDO1FBQ0QsU0FBUztRQUVULENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdlbk9wdGlvbiB9IGZyb20gJy4vZ2VuT3B0aW9uJ1xuLy8gaW1wb3J0IHsgY2hpbmEgfSBmcm9tICcuL2RhdGEnXG5jb25zdCBlY2hhcnRzID0gcmVxdWlyZSgnLi9lYy1jYW52YXMvZWNoYXJ0cycpXG5cbkNvbXBvbmVudCh7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgZWM6IHt9LFxuICAgICAgICBvcHRpb246IHt9LCBcbiAgICB9LFxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgICAvLyB0aGlzLnNldERhdGEoe1xuICAgICAgICAvLyAgICAgZWM6IHtcbiAgICAgICAgLy8gICAgICAgICBvbkluaXQ6IHRoaXMuaW5pdENoYXJ0KClcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSlcbiAgICB9LFxuICAgIGRldGFjaGVkKCkge1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBpbml0Q2hhcnQoKSB7XG4gICAgICAgICAgICBjb25zdCBpbml0ID0gKGNhbnZhczphbnksIHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlciwgZHByOm51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJ0ID0gZWNoYXJ0cy5pbml0KGNhbnZhcywgbnVsbCwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBkZXZpY2VQaXhlbFJhdGlvOiBkcHIsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyOiAnY2FudmFzJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5vcHRpb24gPSBnZW5PcHRpb24oKVxuICAgICAgICAgICAgICAgIGNhbnZhcy5zZXRDaGFydChjaGFydClcbiAgICAgICAgICAgICAgICBlY2hhcnRzLnJlZ2lzdGVyTWFwKCdjaGluYScsIGNoaW5hKVxuICAgICAgICAgICAgICAgIGNoYXJ0LnNldE9wdGlvbih0aGlzLmRhdGEub3B0aW9uKVxuICAgICAgICAgICAgICAgIHJldHVybiBjaGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluaXRcbiAgICAgICAgfSxcbiAgICAgICAgZ2VuT3B0aW9uKCkge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=