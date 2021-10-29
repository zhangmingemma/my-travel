"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genOption = void 0;
var genOption = function (mapType, data) {
    if (data === void 0) { data = []; }
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
                        areaColor: 'rgb(40,35,80)'
                    }
                },
                animation: true,
                data: data
            }]
    };
};
exports.genOption = genOption;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuT3B0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2VuT3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU0sU0FBUyxHQUFHLFVBQUMsT0FBYyxFQUFFLElBR3ZDO0lBSHVDLHFCQUFBLEVBQUEsT0FBTyxFQUc5QztJQUNDLE9BQU87UUFDSCxTQUFTLEVBQUU7WUFDUCxJQUFJLEVBQUUsS0FBSztZQUNYLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLEVBQUU7WUFDUCxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO1lBQ3JCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsVUFBVSxFQUFFLElBQUk7WUFDaEIsT0FBTyxFQUFFO2dCQUNMLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUNwQjtTQUNKO1FBQ0QsR0FBRyxFQUFFO1lBQ0QsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsQ0FBQztZQUNQLEtBQUssRUFBRSxDQUFDO1lBQ1IsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsT0FBTztZQUNaLFNBQVMsRUFBRTtnQkFDUCxXQUFXLEVBQUUsUUFBUTtnQkFDckIsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsU0FBUyxFQUFFLGVBQWU7YUFDN0I7U0FDSjtRQUNELE1BQU0sRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxLQUFLO2dCQUNYLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixJQUFJLEVBQUUsS0FBSztnQkFDWCxJQUFJLEVBQUUsQ0FBQztnQkFDUCxLQUFLLEVBQUUsQ0FBQztnQkFDUixHQUFHLEVBQUUsQ0FBQztnQkFDTixTQUFTLEVBQUU7b0JBQ1AsTUFBTSxFQUFFO3dCQUNKLEtBQUssRUFBRTs0QkFDSCxJQUFJLEVBQUUsS0FBSzt5QkFDZDt3QkFDRCxXQUFXLEVBQUUsd0JBQXdCO3dCQUNyQyxTQUFTLEVBQUUsZUFBZTtxQkFDN0I7b0JBQ0QsUUFBUSxFQUFFO3dCQUNOLEtBQUssRUFBRTs0QkFDSCxJQUFJLEVBQUUsS0FBSzt5QkFDZDt3QkFFRCxTQUFTLEVBQUUsZUFBZTtxQkFDN0I7aUJBQ0o7Z0JBQ0QsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsSUFBSSxFQUFFLElBQUk7YUFDYixDQUFDO0tBQ0wsQ0FBQTtBQUNMLENBQUMsQ0FBQTtBQXZEWSxRQUFBLFNBQVMsYUF1RHJCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdlbk9wdGlvbiA9IChtYXBUeXBlOnN0cmluZywgZGF0YSA9IFtdIGFzIHtcbiAgIG5hbWU6IHN0cmluZyxcbiAgIHZhbHVlOiBudW1iZXIgXG59W10pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB2aXN1YWxNYXA6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgICAgIHRleHQ6IFsnSGlnaCcsICdMb3cnXSxcbiAgICAgICAgICAgIHJlYWx0aW1lOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGN1bGFibGU6IHRydWUsXG4gICAgICAgICAgICBpblJhbmdlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFsnb3JhbmdlJ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2VvOiB7XG4gICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbWFwOiBtYXBUeXBlLFxuICAgICAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdvcmFuZ2UnLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAzLFxuICAgICAgICAgICAgICAgIGFyZWFDb2xvcjogJ3JnYigyMCwyOCw1MiknXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgIHR5cGU6ICdtYXAnLFxuICAgICAgICAgICAgbWFwVHlwZTogbWFwVHlwZSxcbiAgICAgICAgICAgIHJvYW06IGZhbHNlLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDExMywxMzgsMTc0LCAwLjMpJyxcbiAgICAgICAgICAgICAgICAgICAgYXJlYUNvbG9yOiAncmdiKDQwLDM1LDgwKSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVtcGhhc2lzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyBhcmVhQ29sb3I6ICdyZ2IoMjAsMjgsNTIpJ1xuICAgICAgICAgICAgICAgICAgICBhcmVhQ29sb3I6ICdyZ2IoNDAsMzUsODApJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbmltYXRpb246IHRydWUsXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH1dXG4gICAgfVxufSJdfQ==