import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlimentoFavPage } from './alimento-fav.page';

describe('AlimentoFavPage', () => {
  let component: AlimentoFavPage;
  let fixture: ComponentFixture<AlimentoFavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentoFavPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlimentoFavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
