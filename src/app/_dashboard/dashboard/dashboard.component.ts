import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  protected users: { name: string, email: string, phone: string, address: string }[] = [
    { name: "John Doe", email: "john.doe@example.com", phone: "1234", address: "123 Elm St, Springfield" },
    { name: "Jane Smith", email: "jane.smith@example.com", phone: "5678", address: "456 Oak St, Metropolis" },
    { name: "Alice Johnson", email: "alice.johnson@example.com", phone: "9101", address: "789 Pine St, Gotham" },
    { name: "Bob Brown", email: "bob.brown@example.com", phone: "1121", address: "321 Maple St, Smallville" },
    { name: "Carol Davis", email: "carol.davis@example.com", phone: "3141", address: "654 Cedar St, Star City" }
];

protected navLeft: { label: string, icon: string, visible: boolean }[] = [
  { label: "Home", icon: "home", visible: true },
  { label: "Profile", icon: "user", visible: true },
  { label: "Messages", icon: "envelope", visible: true },
  { label: "Settings", icon: "cog", visible: true },
  { label: "Notifications", icon: "bell", visible: true },
  { label: "Logout", icon: "sign-out-alt", visible: true }
];

protected navRight: { label: string, icon: string, visible: boolean }[] = [
  { label: "Analytics", icon: "chart-bar", visible: true },
  { label: "Reports", icon: "file-alt", visible: true },
  { label: "Tasks", icon: "tasks", visible: true },
  { label: "Calendar", icon: "calendar-alt", visible: true },
  { label: "Support", icon: "life-ring", visible: true },
  { label: "Feedback", icon: "comment-alt", visible: true }
];

protected dashboardLegends: { label: string, count: number, countPercent: number, icon: string }[] = [
  { label: "Users", count: 1200, countPercent: 30, icon: "user" },
  { label: "Categories", count: 150, countPercent: 10, icon: "tags" },
  { label: "Products", count: 5000, countPercent: 40, icon: "box" },
  { label: "Orders", count: 800, countPercent: 20, icon: "shopping-cart" },
  { label: "Booked", count: 350, countPercent: 7, icon: "calendar-check" },
  { label: "Returned", count: 100, countPercent: 2, icon: "undo" }
];


}
