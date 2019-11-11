import { Component } from '@angular/core';
import { ToastsService } from '../../services/toasts.service';

@Component({
  selector: 'toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css']
})
export class ToastsComponent {
  constructor(public toastsService: ToastsService) { }
}
