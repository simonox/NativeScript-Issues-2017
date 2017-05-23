"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contacts = (function () {
    function Contacts(name) {
        this.name = name;
    }
    return Contacts;
}());
exports.Contacts = Contacts;
var GroupFooter = (function () {
    function GroupFooter(description) {
        this.description = description;
    }
    return GroupFooter;
}());
exports.GroupFooter = GroupFooter;
exports.ContactsListFakeData = [
    new Contacts("Parth Patel"),
    new Contacts("Tarek"),
    new Contacts("Tobias"),
    new Contacts("Rene"),
    new Contacts("Windzio"),
    new Contacts("Anika"),
    new Contacts("Besir"),
    new Contacts("contact1"),
    new Contacts("contact2"),
    new Contacts("COntact4"),
    new Contacts("contact1"),
    new Contacts("contact2"),
    new Contacts("COntact4"),
    new Contacts("contact1"),
    new Contacts("contact2"),
    new Contacts("Contact"),
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ja19kYXRhSXRlbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2NrX2RhdGFJdGVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQ0ksa0JBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUksQ0FBQztJQUN4QyxlQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSw0QkFBUTtBQUdyQjtJQUNJLHFCQUFtQixXQUFtQjtRQUFuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtJQUFJLENBQUM7SUFDL0Msa0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLGtDQUFXO0FBR2IsUUFBQSxvQkFBb0IsR0FDM0I7SUFDSSxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDM0IsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDO0lBQ3JCLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUN0QixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDcEIsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUNyQixJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDckIsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQ3hCLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQztJQUN4QixJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUM7SUFFeEIsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQ3hCLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQztJQUN4QixJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUM7SUFDeEIsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQ3hCLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQztJQUN4QixJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUM7Q0FFMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb250YWN0cyB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykgeyB9XG59XG5leHBvcnQgY2xhc3MgR3JvdXBGb290ZXIge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nKSB7IH1cbn1cbmV4cG9ydCB2YXIgQ29udGFjdHNMaXN0RmFrZURhdGEgPVxuICAgIFtcbiAgICAgICAgbmV3IENvbnRhY3RzKFwiUGFydGggUGF0ZWxcIiksXG4gICAgICAgIG5ldyBDb250YWN0cyhcIlRhcmVrXCIpLFxuICAgICAgICBuZXcgQ29udGFjdHMoXCJUb2JpYXNcIiksXG4gICAgICAgIG5ldyBDb250YWN0cyhcIlJlbmVcIiksXG4gICAgICAgIG5ldyBDb250YWN0cyhcIldpbmR6aW9cIiksXG4gICAgICAgIG5ldyBDb250YWN0cyhcIkFuaWthXCIpLFxuICAgICAgICBuZXcgQ29udGFjdHMoXCJCZXNpclwiKSxcbiAgICAgICAgbmV3IENvbnRhY3RzKFwiY29udGFjdDFcIiksXG4gICAgICAgIG5ldyBDb250YWN0cyhcImNvbnRhY3QyXCIpLFxuICAgICAgICBuZXcgQ29udGFjdHMoXCJDT250YWN0NFwiKSxcblxuICAgICAgICBuZXcgQ29udGFjdHMoXCJjb250YWN0MVwiKSxcbiAgICAgICAgbmV3IENvbnRhY3RzKFwiY29udGFjdDJcIiksXG4gICAgICAgIG5ldyBDb250YWN0cyhcIkNPbnRhY3Q0XCIpLFxuICAgICAgICBuZXcgQ29udGFjdHMoXCJjb250YWN0MVwiKSxcbiAgICAgICAgbmV3IENvbnRhY3RzKFwiY29udGFjdDJcIiksXG4gICAgICAgIG5ldyBDb250YWN0cyhcIkNvbnRhY3RcIiksXG5cbiAgICBdXG4iXX0=