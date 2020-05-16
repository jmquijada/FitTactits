import {Component, OnInit} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

declare var window: any;

@Component({
    selector: 'app-tab4',
    templateUrl: 'tab4.page.html',
    styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

    tempImages: string [] = [];
    foto: any;

    constructor(private camera: Camera) {
    }

    ngOnInit() {

    }
    // Opciones para la foto
    camara() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.procesarImagen(options);


    }
    // Opciones para la galería
    libreria() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.procesarImagen(options);
    }
    // Procesar la foto
    procesarImagen(options: CameraOptions) {
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            const img = window.Ionic.WebView.convertFileSrc(imageData);
            console.log(img);

            this.tempImages.push(img);
        }, (err) => {
            // Handle error
        });
    }

}
