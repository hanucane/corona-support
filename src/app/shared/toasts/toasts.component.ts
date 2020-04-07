import { Component, OnInit } from '@angular/core';
import {ToastsService} from './toasts.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {

  constructor(public toastService: ToastsService) { }

  ngOnInit(): void {

  }

}
