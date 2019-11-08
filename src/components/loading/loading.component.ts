import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html'
})
export class Loading {
  @Input() display: boolean;
}
