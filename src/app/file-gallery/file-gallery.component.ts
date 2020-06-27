import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-file-gallery',
  templateUrl: './file-gallery.component.html',
  styleUrls: ['./file-gallery.component.scss'],
})
export class FileGalleryComponent implements OnChanges {
  @Input() files: File[];

  filesPreviews = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.filesPreviews = [];
    if (!changes.files.currentValue) {
      return;
    }
    changes.files.currentValue.forEach((file: File) => this.readFile(file));
  }

  private readFile(imageFile: File) {
    const fileReader = new FileReader();
    fileReader.onload = (fileLoadedEvent) => {
      const srcData = fileLoadedEvent.target.result;
      this.filesPreviews = [...this.filesPreviews, srcData];
    };
    fileReader.readAsDataURL(imageFile);
  }
}
