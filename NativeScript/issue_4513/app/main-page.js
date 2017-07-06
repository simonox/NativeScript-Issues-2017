"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("color");
function creatingView(args) {
    console.log("Creating view");
    var nativeView = new android.support.v7.widget.SwitchCompat(args.context);
    // const nativeView = new android.widget.Switch(args.context);
    args.view = nativeView;
}
exports.creatingView = creatingView;
function loaded(args) {
    console.log("Loaded");
    var color = new color_1.Color("#FF0000");
    console.log(args.object.nativeView.getThumbDrawable());
    args.object.nativeView.getThumbDrawable().setColorFilter(color.android, android.graphics.PorterDuff.Mode.SRC_IN);
}
exports.loaded = loaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsK0JBQThCO0FBSTlCLHNCQUE2QixJQUF5QjtJQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzdCLElBQU0sVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUUsOERBQThEO0lBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO0FBQzNCLENBQUM7QUFMRCxvQ0FLQztBQUVELGdCQUF1QixJQUFJO0lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckgsQ0FBQztBQU5ELHdCQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29sb3InO1xuXG5pbXBvcnQgeyBDcmVhdGVWaWV3RXZlbnREYXRhIH0gZnJvbSBcInVpL3BsYWNlaG9sZGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGluZ1ZpZXcoYXJnczogQ3JlYXRlVmlld0V2ZW50RGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgdmlld1wiKTtcbiAgICBjb25zdCBuYXRpdmVWaWV3ID0gbmV3IGFuZHJvaWQuc3VwcG9ydC52Ny53aWRnZXQuU3dpdGNoQ29tcGF0KGFyZ3MuY29udGV4dCk7XG4gICAgLy8gY29uc3QgbmF0aXZlVmlldyA9IG5ldyBhbmRyb2lkLndpZGdldC5Td2l0Y2goYXJncy5jb250ZXh0KTtcbiAgICBhcmdzLnZpZXcgPSBuYXRpdmVWaWV3O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVkKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIkxvYWRlZFwiKTtcbiAgICBsZXQgY29sb3IgPSBuZXcgQ29sb3IoXCIjRkYwMDAwXCIpO1xuXG4gICAgY29uc29sZS5sb2coYXJncy5vYmplY3QubmF0aXZlVmlldy5nZXRUaHVtYkRyYXdhYmxlKCkpO1xuICAgIGFyZ3Mub2JqZWN0Lm5hdGl2ZVZpZXcuZ2V0VGh1bWJEcmF3YWJsZSgpLnNldENvbG9yRmlsdGVyKGNvbG9yLmFuZHJvaWQsIGFuZHJvaWQuZ3JhcGhpY3MuUG9ydGVyRHVmZi5Nb2RlLlNSQ19JTik7XG59XG4iXX0=