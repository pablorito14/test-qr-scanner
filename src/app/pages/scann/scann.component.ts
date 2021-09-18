import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scann',
  templateUrl: './scann.component.html',
  styleUrls: ['./scann.component.css']
})
export class ScannComponent implements OnInit {
  scanResult:string = 'Código no leido';
  constructor() { }

  ngOnInit(): void {
  }

  onCodeResult(result:string){
    this.scanResult = result;
  }

}
