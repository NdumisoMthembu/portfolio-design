import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
  toggleMenu() {
    let menu = document.querySelector("nav");
    let ul = document.querySelector("nav");
    menu.classList.toggle("active");
    ul.style.display = "block";

  }
}
