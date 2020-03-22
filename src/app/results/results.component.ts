import { Component, Input } from '@angular/core';
import { Answers } from '../quiz.model';

// Tells the component what to use when script is called
@Component({
  // What to call when using in other parts of app
  selector: 'app-results',
  // HTML and CSS to use
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

// Simply exports a list of user's answers. HTML used to make this display more.
export class ResultsComponent {
  @Input() answers: Answers;
}
