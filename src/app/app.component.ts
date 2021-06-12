import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'img-upload-app';

  imgChangeEvt:any = '';
  cropImagePreview:any = '';

  onFileChange(event:any):void {
    this.imgChangeEvt = event;
  }

  cropImage(e:ImageCroppedEvent){
    this.cropImagePreview = e.base64;
  }

  imgLoad(){
    //display cropper tool
  }

  initCropper(){
    // initialize cropper
  }

  imgFailed(){
    // error message
  }
}
