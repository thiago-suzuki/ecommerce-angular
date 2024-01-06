import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call "send" when button is clicked', () => {
    jest.spyOn(component, 'send')
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button')
    button.click()
    expect(component.send).toHaveBeenCalled()
  });

  it('should call "send" with correct value when button is clicked', () => {
    jest.spyOn(component, 'send')
    component.control.setValue('teste')
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button')
    button.click()
    expect(component.send).toHaveBeenCalledWith('teste')
  });
});
