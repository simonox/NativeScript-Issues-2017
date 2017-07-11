/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./bundle-config");
var application = require("application");
application.on(application.launchEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    }
    else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);
    }
});
application.on(application.suspendEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    }
    else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});
application.on(application.resumeEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    }
    else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});
application.on(application.exitEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    }
    else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});
application.start({ moduleName: 'main-page' });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7OztBQUVGLDJCQUF5QjtBQUN6Qix5Q0FBMkM7QUFHM0MsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFVBQVUsSUFBSTtJQUNsRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNmLDZFQUE2RTtRQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsa0VBQWtFO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxVQUFVLElBQUk7SUFDbkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDZix1RUFBdUU7UUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsbURBQW1EO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxVQUFVLElBQUk7SUFDbEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDZix1RUFBdUU7UUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsbURBQW1EO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxVQUFVLElBQUk7SUFDaEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDZix1RUFBdUU7UUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsbURBQW1EO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUUvQzs7O0VBR0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLnRzIGZpbGUgaXMgdGhlIGVudHJ5IHBvaW50IHRvIHlvdXIgYXBwbGljYXRpb24uXG5Zb3UgY2FuIHVzZSB0aGlzIGZpbGUgdG8gcGVyZm9ybSBhcHAtbGV2ZWwgaW5pdGlhbGl6YXRpb24sIGJ1dCB0aGUgcHJpbWFyeVxucHVycG9zZSBvZiB0aGUgZmlsZSBpcyB0byBwYXNzIGNvbnRyb2wgdG8gdGhlIGFwcOKAmXMgZmlyc3QgbW9kdWxlLlxuKi9cblxuaW1wb3J0IFwiLi9idW5kbGUtY29uZmlnXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICdhcHBsaWNhdGlvbic7XG5cblxuYXBwbGljYXRpb24ub24oYXBwbGljYXRpb24ubGF1bmNoRXZlbnQsIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgaWYgKGFyZ3MuYW5kcm9pZCkge1xuICAgICAgICAvLyBGb3IgQW5kcm9pZCBhcHBsaWNhdGlvbnMsIGFyZ3MuYW5kcm9pZCBpcyBhbiBhbmRyb2lkLmNvbnRlbnQuSW50ZW50IGNsYXNzLlxuICAgICAgICBjb25zb2xlLmxvZyhcIkxhdW5jaGVkIEFuZHJvaWQgYXBwbGljYXRpb24gd2l0aCB0aGUgZm9sbG93aW5nIGludGVudDogXCIgKyBhcmdzLmFuZHJvaWQgKyBcIi5cIik7XG4gICAgfSBlbHNlIGlmIChhcmdzLmlvcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIEZvciBpT1MgYXBwbGljYXRpb25zLCBhcmdzLmlvcyBpcyBOU0RpY3Rpb25hcnkgKGxhdW5jaE9wdGlvbnMpLlxuICAgICAgICBjb25zb2xlLmxvZyhcIkxhdW5jaGVkIGlPUyBhcHBsaWNhdGlvbiB3aXRoIG9wdGlvbnM6IFwiICsgYXJncy5pb3MpO1xuICAgIH1cbn0pO1xuXG5hcHBsaWNhdGlvbi5vbihhcHBsaWNhdGlvbi5zdXNwZW5kRXZlbnQsIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgaWYgKGFyZ3MuYW5kcm9pZCkge1xuICAgICAgICAvLyBGb3IgQW5kcm9pZCBhcHBsaWNhdGlvbnMsIGFyZ3MuYW5kcm9pZCBpcyBhbiBhbmRyb2lkIGFjdGl2aXR5IGNsYXNzLlxuICAgICAgICBjb25zb2xlLmxvZyhcIkFjdGl2aXR5OiBcIiArIGFyZ3MuYW5kcm9pZCk7XG4gICAgfSBlbHNlIGlmIChhcmdzLmlvcykge1xuICAgICAgICAvLyBGb3IgaU9TIGFwcGxpY2F0aW9ucywgYXJncy5pb3MgaXMgVUlBcHBsaWNhdGlvbi5cbiAgICAgICAgY29uc29sZS5sb2coXCJVSUFwcGxpY2F0aW9uOiBcIiArIGFyZ3MuaW9zKTtcbiAgICB9XG59KTtcblxuYXBwbGljYXRpb24ub24oYXBwbGljYXRpb24ucmVzdW1lRXZlbnQsIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgaWYgKGFyZ3MuYW5kcm9pZCkge1xuICAgICAgICAvLyBGb3IgQW5kcm9pZCBhcHBsaWNhdGlvbnMsIGFyZ3MuYW5kcm9pZCBpcyBhbiBhbmRyb2lkIGFjdGl2aXR5IGNsYXNzLlxuICAgICAgICBjb25zb2xlLmxvZyhcIkFjdGl2aXR5OiBcIiArIGFyZ3MuYW5kcm9pZCk7XG4gICAgfSBlbHNlIGlmIChhcmdzLmlvcykge1xuICAgICAgICAvLyBGb3IgaU9TIGFwcGxpY2F0aW9ucywgYXJncy5pb3MgaXMgVUlBcHBsaWNhdGlvbi5cbiAgICAgICAgY29uc29sZS5sb2coXCJVSUFwcGxpY2F0aW9uOiBcIiArIGFyZ3MuaW9zKTtcbiAgICB9XG59KTtcblxuYXBwbGljYXRpb24ub24oYXBwbGljYXRpb24uZXhpdEV2ZW50LCBmdW5jdGlvbiAoYXJncykge1xuICAgIGlmIChhcmdzLmFuZHJvaWQpIHtcbiAgICAgICAgLy8gRm9yIEFuZHJvaWQgYXBwbGljYXRpb25zLCBhcmdzLmFuZHJvaWQgaXMgYW4gYW5kcm9pZCBhY3Rpdml0eSBjbGFzcy5cbiAgICAgICAgY29uc29sZS5sb2coXCJBY3Rpdml0eTogXCIgKyBhcmdzLmFuZHJvaWQpO1xuICAgIH0gZWxzZSBpZiAoYXJncy5pb3MpIHtcbiAgICAgICAgLy8gRm9yIGlPUyBhcHBsaWNhdGlvbnMsIGFyZ3MuaW9zIGlzIFVJQXBwbGljYXRpb24uXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVUlBcHBsaWNhdGlvbjogXCIgKyBhcmdzLmlvcyk7XG4gICAgfVxufSk7XG5cbmFwcGxpY2F0aW9uLnN0YXJ0KHsgbW9kdWxlTmFtZTogJ21haW4tcGFnZScgfSk7XG5cbi8qXG5EbyBub3QgcGxhY2UgYW55IGNvZGUgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQgYXMgaXQgd2lsbCBub3RcbmJlIGV4ZWN1dGVkIG9uIGlPUy5cbiovXG4iXX0=