import { TestBed } from '@angular/core/testing';
import { AccessDeniedComponent } from './access-denied.component';
describe('AccessDeniedComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AccessDeniedComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(AccessDeniedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=access-denied.component.spec.js.map