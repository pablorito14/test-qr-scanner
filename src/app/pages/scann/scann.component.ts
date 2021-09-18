import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-scann',
  templateUrl: './scann.component.html',
  styleUrls: ['./scann.component.css']
})
export class ScannComponent implements OnInit {
  // scanResult:string = 'Código no leido';
  // allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX ];
  // allowedFormats = [
  //   BarcodeFormat.EAN_13, 
  //   BarcodeFormat.QR_CODE, 
  //   BarcodeFormat.EAN_8,
  //   BarcodeFormat.CODE_39,
  //   BarcodeFormat.CODE_93,
  //   BarcodeFormat.CODE_128,
  //   BarcodeFormat.CODABAR
  // ];

  value: string = '';
  isError = false;

  onError(error:any) {
    console.error(error);
    this.isError = true;
  }

  abrirCamara:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  // onCodeResult(result:string){
  //   this.scanResult = result;
  // }

  // onCodeError(event:any){
  //   console.log('error',event);
  // }
  // onCodeFail(event:any){
  //   console.log('fail',event);
  // }

  toggleCamara(){
    this.abrirCamara = !this.abrirCamara;
  }

}
