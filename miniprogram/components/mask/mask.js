"use strict";
Component({
    properties: {
        banClickOutside: {
            type: Boolean,
            value: false
        },
        animateType: {
            type: String,
            value: 'trans-from-bottom',
        },
        show: {
            type: Boolean,
            observer: function (val) {
                if (val) {
                    this.postData([{
                            condIf: true
                        }, {
                            condShow: true
                        }], 20);
                }
                else {
                    this.postData([{
                            condShow: false
                        }, {
                            condIf: false
                        }], 250);
                }
            }
        },
    },
    data: {
        condIf: false,
        condShow: false,
    },
    observers: {
        condShow: function (val) {
            var _this = this;
            if (!val) {
                setTimeout(function () {
                    !_this.data.condShow && _this.triggerEvent('animationfinish');
                }, 350);
            }
        },
    },
    methods: {
        touchMask: function () {
            !this.data.banClickOutside && this.setData({
                show: false
            });
            this.triggerEvent('hidemask', {});
        },
        preventPageScroll: function () {
            return false;
        },
        postData: function (datas, interval) {
            var _this = this;
            if (datas === void 0) { datas = []; }
            if (interval === void 0) { interval = 0; }
            var run = function () {
                if (datas.length) {
                    _this.setData(datas.splice(0, 1)[0]);
                }
                if (datas.length) {
                    setTimeout(run, interval);
                }
            };
            run();
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsQ0FBQztJQUNOLFVBQVUsRUFBRTtRQUNSLGVBQWUsRUFBRTtZQUNiLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtRQUNELFdBQVcsRUFBRTtZQUNULElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLG1CQUFtQjtTQUM3QjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLFVBQVUsR0FBRztnQkFDbkIsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUNYLE1BQU0sRUFBRSxJQUFJO3lCQUNmLEVBQUU7NEJBQ0MsUUFBUSxFQUFFLElBQUk7eUJBQ2pCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtpQkFDVjtxQkFBTTtvQkFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQ1gsUUFBUSxFQUFFLEtBQUs7eUJBQ2xCLEVBQUU7NEJBQ0MsTUFBTSxFQUFFLEtBQUs7eUJBQ2hCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtpQkFDWDtZQUNMLENBQUM7U0FDSjtLQUNKO0lBRUQsSUFBSSxFQUFFO1FBQ0YsTUFBTSxFQUFFLEtBQUs7UUFDYixRQUFRLEVBQUUsS0FBSztLQUNsQjtJQUVELFNBQVMsRUFBRTtRQUNQLFFBQVEsWUFBQyxHQUFHO1lBQVosaUJBTUM7WUFMRyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNOLFVBQVUsQ0FBQztvQkFDUCxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDaEUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2FBQ1Y7UUFDTCxDQUFDO0tBQ0o7SUFFRCxPQUFPLEVBQUU7UUFDTCxTQUFTO1lBQ0wsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN2QyxJQUFJLEVBQUUsS0FBSzthQUNkLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ3JDLENBQUM7UUFDRCxpQkFBaUI7WUFDYixPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQ0QsUUFBUSxFQUFFLFVBQVUsS0FBVSxFQUFFLFFBQVk7WUFBbEMsaUJBVVQ7WUFWbUIsc0JBQUEsRUFBQSxVQUFVO1lBQUUseUJBQUEsRUFBQSxZQUFZO1lBQ3hDLElBQU0sR0FBRyxHQUFHO2dCQUNSLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDZCxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZDO2dCQUNELElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDZCxVQUFVLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUM3QjtZQUNMLENBQUMsQ0FBQztZQUNGLEdBQUcsRUFBRSxDQUFDO1FBQ1YsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGJhbkNsaWNrT3V0c2lkZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBhbmltYXRlVHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICd0cmFucy1mcm9tLWJvdHRvbScsXG4gICAgICAgIH0sXG4gICAgICAgIHNob3c6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0RGF0YShbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZElmOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRTaG93OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1dLCAyMClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3REYXRhKFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kU2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZElmOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XSwgMjUwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YToge1xuICAgICAgICBjb25kSWY6IGZhbHNlLFxuICAgICAgICBjb25kU2hvdzogZmFsc2UsXG4gICAgfSxcblxuICAgIG9ic2VydmVyczoge1xuICAgICAgICBjb25kU2hvdyh2YWwpIHtcbiAgICAgICAgICAgIGlmICghdmFsKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmRhdGEuY29uZFNob3cgJiYgdGhpcy50cmlnZ2VyRXZlbnQoJ2FuaW1hdGlvbmZpbmlzaCcpO1xuICAgICAgICAgICAgICAgIH0sIDM1MClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICB0b3VjaE1hc2soKSB7XG4gICAgICAgICAgICAhdGhpcy5kYXRhLmJhbkNsaWNrT3V0c2lkZSAmJiB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2hpZGVtYXNrJywge30pXG4gICAgICAgIH0sXG4gICAgICAgIHByZXZlbnRQYWdlU2Nyb2xsKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0RGF0YTogZnVuY3Rpb24gKGRhdGFzID0gW10sIGludGVydmFsID0gMCkge1xuICAgICAgICAgICAgY29uc3QgcnVuID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKGRhdGFzLnNwbGljZSgwLCAxKVswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkYXRhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChydW4sIGludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcnVuKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==