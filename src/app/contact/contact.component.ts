import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  constructor() { }
  private emailServiceId = 'cobizsupp@gmail.com';
  private emailTemplateId = 'template_tStaUmvL';
  private emailUserId = 'user_D20DRjAm3VTglgEt4Fcqa';

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm(this.emailServiceId, this.emailTemplateId, e.target as HTMLFormElement, this.emailUserId)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
