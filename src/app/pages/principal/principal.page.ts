import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {BackgroundMode} from '@ionic-native/background-mode/ngx';
import {Platform} from '@ionic/angular';
import {DataLocalService} from '../../services/data-local.service';




@Component({
    selector: 'app-principal',
    templateUrl: './principal.page.html',
    styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

// Valores
    /*
    idInterval;
    distance = 0;
    floorUp = 0;
    floorDown = 0;
    // Booleanos permisos
    pasosBool = false;
    distanceBool = false;
    floorBool = false;
    */
    start: boolean;
    PedometerData: any;
    stepCount: any = 0;
    startDate: Date;
    endDate: Date;

    opciones = {
        slidesPerView: 1.3,
    };


    constructor(private background: BackgroundMode,
                private plt: Platform,
                private ngzone: NgZone,
                public refdect: ChangeDetectorRef,
                private dataService: DataLocalService) {
        this.background.enable();
        // this.watchSteps();

    }

    ngOnInit() {

    }
/*
    watchSteps() {
        this.pedo.startPedometerUpdates()
            .subscribe((data: IPedometerData) => {

                this.stepCount = data.numberOfSteps;
                this.dataService.guardarPasos(this.stepCount);
                // this.startDate = new Date(this.PedometerData.startDate);
                // this.endDate = new Date(this.PedometerData.endDate);
                if (this.stepCount == 100) {
                    alert('Yes! Your have completed 100 steps');
                }
                this.refdect.detectChanges();
            });

    }
*/
}
