import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-hora',
  templateUrl: './data-hora.component.html',
  styleUrls: ['./data-hora.component.scss']
})
export class DataHoraComponent implements OnInit {

  dataHora: Date;

  constructor() {
    this.dataHora = new Date();
    setInterval(()=> {
      this.dataHora = new Date();
    },1);
  }

  ngOnInit(): void {
  }

}
