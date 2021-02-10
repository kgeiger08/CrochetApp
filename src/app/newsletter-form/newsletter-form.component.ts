import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.css']
})
export class NewsletterFormComponent implements OnInit {
  signedUp: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSignupSubmitted(form: NgForm) {
    console.log(form);
    this.signedUp = 'You have successfully signed up!'
    form.reset();
  }

}
