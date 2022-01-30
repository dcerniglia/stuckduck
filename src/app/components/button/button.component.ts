import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sd-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText = "Default Text";
  @Output() onButtonClick: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
