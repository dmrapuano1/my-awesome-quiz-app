import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../questions.service';
import { Quiz, Answers, Choice, Question } from '../quiz.model';

// Tells the component what to use when script is called
@Component({
  // Name in other parts of app
  selector: 'app-questions',
  // HTML and SCSS to call
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {

  public quiz: Quiz;
  public answers: Answers;
  public questions: Question[];
  public currentQuestionIndex: number;

  showResults = false;

  // inject both the active route and the questions service
  constructor(private route: ActivatedRoute, private questionsService: QuestionsService) {}

  ngOnInit() {

    // read from the dynamic route and load the proper quiz data
    this.questionsService.getQuestions(this.route.snapshot.params.quizId)
      .subscribe(questions => {
        // initialize everything
        this.questions = questions;
        this.answers = new Answers();
        this.currentQuestionIndex = 0;
      });
  }

  // Gives value to user's choice on particular question
  updateChoice(choice: Choice) {
    this.answers.values[this.currentQuestionIndex] = choice;
  }

  // Logic to be called when user submits answer to a question
  nextOrViewResults() {
    // If the question was the last question, loads results
    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.showResults = true;
      return;
    }

    // Pushes user to next question
    this.currentQuestionIndex++;
  }

  // Sets all values to undefined to ensure no issues on subsequent quizzes
  reset() {
    this.quiz = undefined;
    this.questions = undefined;
    this.answers = undefined;
    this.currentQuestionIndex = undefined;
  }

}
