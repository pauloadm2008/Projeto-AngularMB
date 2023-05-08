import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent {
  @Input() btnText!: string;

constructor() { }

ngOnInit(): void {}

subit() {
  console.log("Enviou formulário");
  }

momentForm!: FormGroup  

}
