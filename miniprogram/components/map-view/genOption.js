"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeries = exports.getDefaultConfig = exports.genOption = void 0;
var define_1 = require("../../utils/define");
var genOption = function (data) {
    if (data === void 0) { data = []; }
    return __assign(__assign({}, exports.getDefaultConfig()), { series: exports.getSeries(data) });
};
exports.genOption = genOption;
var getDefaultConfig = function () {
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
            map: define_1.MapEnum.MapType.CHINA,
            itemStyle: {
                borderColor: '#461CE5',
                borderWidth: 2.5
            }
        },
    };
};
exports.getDefaultConfig = getDefaultConfig;
var getSeries = function (data) {
    return [{
            type: 'map',
            mapType: define_1.MapEnum.MapType.CHINA,
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
        }];
};
exports.getSeries = getSeries;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuT3B0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2VuT3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBRXJDLElBQU0sU0FBUyxHQUFHLFVBQUMsSUFBZ0I7SUFBaEIscUJBQUEsRUFBQSxPQUFPLEVBQVM7SUFDdEMsNkJBQ08sd0JBQWdCLEVBQUUsS0FDckIsTUFBTSxFQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDLElBQzFCO0FBQ0wsQ0FBQyxDQUFBO0FBTFksUUFBQSxTQUFTLGFBS3JCO0FBRU0sSUFBTSxnQkFBZ0IsR0FBRztJQUM1QixPQUFPO1FBQ0gsU0FBUyxFQUFFO1lBQ1AsSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztZQUNyQixRQUFRLEVBQUUsS0FBSztZQUNmLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE9BQU8sRUFBRTtnQkFDTCxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUM7YUFDckI7U0FDSjtRQUNELEdBQUcsRUFBRTtZQUNELElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLENBQUM7WUFDUCxLQUFLLEVBQUUsQ0FBQztZQUNSLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLGdCQUFPLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDMUIsU0FBUyxFQUFFO2dCQUNQLFdBQVcsRUFBRSxTQUFTO2dCQUN0QixXQUFXLEVBQUUsR0FBRzthQUNuQjtTQUNKO0tBQ0osQ0FBQTtBQUNMLENBQUMsQ0FBQTtBQXpCWSxRQUFBLGdCQUFnQixvQkF5QjVCO0FBRU0sSUFBTSxTQUFTLEdBQUcsVUFBQyxJQUFTO0lBQy9CLE9BQU8sQ0FBQztZQUNKLElBQUksRUFBRSxLQUFLO1lBQ1gsT0FBTyxFQUFFLGdCQUFPLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDOUIsSUFBSSxFQUFFLEtBQUs7WUFDWCxJQUFJLEVBQUUsQ0FBQztZQUNQLEtBQUssRUFBRSxDQUFDO1lBQ1IsR0FBRyxFQUFFLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFO29CQUNKLEtBQUssRUFBRTt3QkFDSCxJQUFJLEVBQUUsS0FBSztxQkFDZDtvQkFDRCxXQUFXLEVBQUUsd0JBQXdCO29CQUNyQyxTQUFTLEVBQUUsZUFBZTtpQkFDN0I7Z0JBQ0QsUUFBUSxFQUFFO29CQUNOLEtBQUssRUFBRTt3QkFDSCxJQUFJLEVBQUUsS0FBSztxQkFDZDtvQkFDRCxTQUFTLEVBQUUsZUFBZTtpQkFDN0I7YUFDSjtZQUNELFNBQVMsRUFBRSxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUExQlksUUFBQSxTQUFTLGFBMEJyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcEVudW0gfSBmcm9tIFwiLi4vLi4vdXRpbHMvZGVmaW5lXCJcblxuZXhwb3J0IGNvbnN0IGdlbk9wdGlvbiA9IChkYXRhID0gW10gYXMgYW55KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZ2V0RGVmYXVsdENvbmZpZygpLFxuICAgICAgICBzZXJpZXM6IGdldFNlcmllcyhkYXRhKVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRDb25maWcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmlzdWFsTWFwOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMixcbiAgICAgICAgICAgIHRleHQ6IFsnSGlnaCcsICdMb3cnXSxcbiAgICAgICAgICAgIHJlYWx0aW1lOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGN1bGFibGU6IHRydWUsXG4gICAgICAgICAgICBpblJhbmdlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFsnIzQ2MUNFNSddXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdlbzoge1xuICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIG1hcDogTWFwRW51bS5NYXBUeXBlLkNISU5BLFxuICAgICAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjNDYxQ0U1JyxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMi41XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VyaWVzID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIHJldHVybiBbe1xuICAgICAgICB0eXBlOiAnbWFwJyxcbiAgICAgICAgbWFwVHlwZTogTWFwRW51bS5NYXBUeXBlLkNISU5BLFxuICAgICAgICByb2FtOiBmYWxzZSxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgxMTMsMTM4LDE3NCwgMC4zKScsXG4gICAgICAgICAgICAgICAgYXJlYUNvbG9yOiAncmdiKDIwLDI4LDUyKSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbXBoYXNpczoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhcmVhQ29sb3I6ICdyZ2IoMjAsMjgsNTIpJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhbmltYXRpb246IHRydWUsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICB9XVxufSJdfQ==