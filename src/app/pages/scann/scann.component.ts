import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

interface Producto{
  codigo:number;
  descripcion:string;
  categoria: string;
}

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
  
  // productos:Producto = {

  // }
  productos:Producto[] = [
    {
      codigo:7790170904606, 
      descripcion: 'Cafe La Morenita 170grs',
      categoria: 'Alimentos'
    },
    {
      codigo:9789877972986, 
      descripcion: 'Historia de 101 mujeres extraorinarias',
      categoria: 'Libros'
    },
    {
      codigo:7794000401419, 
      descripcion: 'Mayonesa Hellmann\'s 500grs',
      categoria: 'Alimentos'
    }


  ]
    
  

  value: string = '';
  isError = false;

  
  onError(error:any) {
    console.error(error);
    this.isError = true;
  }

  

  abrirCamara:boolean = false;
  constructor() {
  
  }

  ngOnInit(): void {
  }
  change:string='';
  desc:string = '';
  cat:string = '';

  buscarProducto(){
    let codigo = parseInt(this.value);
    let producto = this.productos.find(element => element.codigo == codigo);
    if(producto) {
      this.desc = producto.descripcion;
      this.cat = producto.categoria;
    }
  }

  buscar(){
    let codigo = parseInt(this.value);
    codigo = 9789877972986;
    let producto = this.productos.find(element => element.codigo == codigo);
    if(producto) {
      this.desc = producto.descripcion;
      this.cat = producto.categoria;
    }
      // this.change = producto.descripcion;
    console.log(producto);
  }

  toggleCamara(){
    this.abrirCamara = !this.abrirCamara;
  }

}
