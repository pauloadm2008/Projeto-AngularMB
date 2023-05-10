import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MessagesService } from 'src/app/service/messages.service';
import { MomentService } from 'src/app/service/moment.service';
@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  btnText = 'Compartilhar!';

  constructor(private momentService: MomentService, private messagesService: MessagesService ) { }

ngOnInit(): void {}

 async createHandler(moment: Moment) {
   const formData = new FormData()

   formData.append("title", moment.title)
   formData.append("description", moment.description)

   if(moment.image) {
    formData.append("image", moment.image);
   }

   await this.momentService.createMoment(formData).subscribe();

   this.messagesService.add("Momento adicionado com sucesso!")




}

}
