import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent {
  @Input() heading: string;

  @Input() columns = 2;

  public get columnsTemplate(): string {
    return `repeat(${this.columns}, 1fr)`;
  }
}
