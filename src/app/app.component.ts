import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'primelevel';
  date = new Date();
  ngOnInit() {
    this.date.setDate(new Date().getDate() + 1);
    console.log(this.date);
  }
}
