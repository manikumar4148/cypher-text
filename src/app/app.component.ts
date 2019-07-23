import { Component } from '@angular/core';
import SimpleCrypto from "simple-crypto-js";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data:any=[];
  chiperText:any;
  decipherText:any;
  _secretKey = "some-unique-key";
  encryptt(){
    // console.log(this.data);
    var plainText=this.data.estring;
    var simpleCrypto = new SimpleCrypto(this._secretKey);
    this.chiperText = simpleCrypto.encrypt(plainText);
    console.log(this.chiperText);
 }
 decryptt(){
  
  var chiperText=this.data.dstring;
var simpleCrypto = new SimpleCrypto(this._secretKey);
  this.decipherText = simpleCrypto.decrypt(chiperText);
  console.log(this.decipherText); 
 }
}
