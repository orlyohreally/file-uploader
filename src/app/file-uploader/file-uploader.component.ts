import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit {
  isDraggedOver = false;
  files: File[];
  totalFilesCount = 0;
  @Output() filesLoaded = new EventEmitter<File[]>();

  constructor() {}

  ngOnInit(): void {}

  handleDrop(event: DragEvent) {
    this.stopDefault(event);
    this.isDraggedOver = false;
    this.totalFilesCount = event.dataTransfer.files.length;
    this.files = this.getImages(event.dataTransfer.files);
    this.filesLoaded.emit(this.files);
  }

  handleDragOver(event: Event) {
    this.stopDefault(event);
    this.isDraggedOver = true;
  }

  handleDragEnter() {
    this.isDraggedOver = true;
  }

  handleDragLeave() {
    this.isDraggedOver = false;
  }

  onFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    this.totalFilesCount = fileInput.files.length;
    this.files = this.getImages(fileInput.files);
    this.filesLoaded.emit(this.files);
  }

  getImages(files: FileList): File[] {
    return Array.from(files).filter(
      (file) => ['image/png', 'image/jpeg'].indexOf(file.type) > -1
    );
  }

  private stopDefault(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }
}
