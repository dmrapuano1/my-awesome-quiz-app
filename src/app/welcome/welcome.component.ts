import { Component, OnInit } from '@angular/core';

// Tells the component what to use when script is called
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
