import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [AppComponent],
        });

        await TestBed.compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('deve criar o componente', () => {
        expect(component).toBeTruthy();
    });
});
