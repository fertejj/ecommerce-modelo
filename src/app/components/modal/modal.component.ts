import { Component } from '@angular/core';
import { ModalSwitchService } from '../../services/modal-switch.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
constructor(private modalSwitchService: ModalSwitchService){}

closeModal(){
  this.modalSwitchService.$modal.emit(false)
}

}
