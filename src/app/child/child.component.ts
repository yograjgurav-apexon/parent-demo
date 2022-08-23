import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges {
  @Output() greetEvent = new EventEmitter();
  @Input() titleName = '';
  @Output() listItem = new EventEmitter();
  name: string = 'Raj';
  isToggled: boolean = true;
  message?: string;

  displayMessage() {
    alert(this.message);
  }

  constructor() {
    console.log({ constructor: 'Contructor' });
    this.message = 'Constructor created';
  }

  toggleList() {
    this.listItem.emit(this.isToggled);
  }

  ngOnDestroy(): void {
    console.log({ onDestroy: 'Destroyed' });
    // this.message = 'ngOnDestroy created';
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log({ onChanges: 'Changed', changes });
    console.log('onChanges', changes);
    // this.message = 'ngOnChanges created';
  }

  ngOnInit(): void {
    console.log({ onInIt: 'OnInit' });
  }

  myFunc() {
    console.log('Myfunc');
  }

  //yograj

  callParentGreet() {
    this.greetEvent.emit(this.name);
  }
}
