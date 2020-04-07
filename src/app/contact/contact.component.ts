import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import * as $ from 'jquery';
import {ToastsService} from '../shared/toasts/toasts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  constructor(private toastService: ToastsService) {}
  private emailServiceId = 'cobizsupp@gmail.com';
  private emailTemplateId = 'template_tStaUmvL';
  private emailUserId = 'user_D20DRjAm3VTglgEt4Fcqa';

  public sendEmail(e: Event, contactForm: any) {
    e.preventDefault();
    emailjs.sendForm(this.emailServiceId, this.emailTemplateId, e.target as HTMLFormElement, this.emailUserId)
      .then((result: EmailJSResponseStatus) => {
        this.toastService.show('Success', 'Your message was received. Thanks for getting in contact!');
        contactForm.reset();
      }, (error) => {
        console.log(error.text);
        this.toastService.show('Error', 'Well this is embarrassing, an error happened. ');
      });
  }
}
