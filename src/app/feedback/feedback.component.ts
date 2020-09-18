import { Component, OnInit } from '@angular/core';
import { Feedback } from '../model/Feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  customerFeedback = new Feedback();
  constructor() { }

  ngOnInit(): void {
  }

  saveFeedback() {
    console.log(this.customerFeedback);
  }

}
