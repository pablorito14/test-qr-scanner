import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScannComponent } from './pages/scann/scann.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgxBarcodeScannerModule } from '@eisberg-labs/ngx-barcode-scanner';

@NgModule({
  declarations: [
    AppComponent,
    ScannComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule,
    NgxBarcodeScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
