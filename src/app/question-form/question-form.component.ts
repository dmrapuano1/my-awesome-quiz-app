import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from '../quiz.model';

// Tells the component what html/scss to use when the script is ran
@Component({
  // What the component is called when used elsewhere in app
  selector: 'app-question-form',
  // HTML to use
  templateUrl: './question-form.component.html',
  // SCSS to use
  styleUrls: ['./question-form.component.scss']
})

// What is rendered when called elsewhere in app
export class QuestionFormComponent implements OnInit {

  // Brings in Question
  @Input() question: Question;
  // Exported variable
  @Output() choiceMade = new EventEmitter<string>();

  // Defining form
  public form: FormGroup;

  // Set the choices up and listens for change in selection
  ngOnInit() {
    this.form = new FormGroup({
      choice: new FormControl()
    });

    this.form.valueChanges.subscribe(this.onChange);
  }

  // On change of selection, sets the value of choiceMade to selected value
  onChange = () => {
    this.choiceMade.emit(this.form.value.choice);
  }
}
