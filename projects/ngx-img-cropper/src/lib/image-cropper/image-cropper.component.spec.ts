import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImageCropperComponent } from './image-cropper.component';
import { CropperSettings } from './cropper-settings';

describe('ImageCropperComponent', () => {
  let component: ImageCropperComponent;
  let fixture: ComponentFixture<ImageCropperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCropperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCropperComponent);
    component = fixture.componentInstance;
    component.settings = new CropperSettings();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
