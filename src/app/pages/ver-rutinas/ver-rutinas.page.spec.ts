import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerRutinasPage } from './ver-rutinas.page';

describe('VerRutinasPage', () => {
  let component: VerRutinasPage;
  let fixture: ComponentFixture<VerRutinasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerRutinasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerRutinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
