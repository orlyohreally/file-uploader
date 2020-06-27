import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'file-uploader';
  files: File[];

  onFilesLoaded(files: File[]) {
    this.files = files;
  }
}
