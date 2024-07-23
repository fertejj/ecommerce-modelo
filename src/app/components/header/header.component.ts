import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import { ModalSwitchService } from '../../services/modal-switch.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  modalSwitch: boolean = false;

  constructor(private modalSwitchService: ModalSwitchService){}

  ngOnInit(): void {
    this.modalSwitchService.$modal.subscribe((valor) => {this.modalSwitch = valor})
  }


  openModal(){
    this.modalSwitch = !this.modalSwitch;
    console.log(this.modalSwitch)
  }

}
