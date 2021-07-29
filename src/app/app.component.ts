import { Component, VERSION } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  selectedFileBLOB
  constructor(
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
  
  }

  
  fileChangeEvent(fileInput: any) {

    if (fileInput.target.files && fileInput.target.files[0]) {

      const reader = new FileReader();
      reader.onload = (e: any) => {
        
		let blob = new Blob(fileInput.target.files, { type: fileInput.target.files[0].type });
        let url = window.URL.createObjectURL(blob);

        this.selectedFileBLOB = this.sanitizer.bypassSecurityTrustUrl(url);

      };
      reader.readAsDataURL(fileInput.target.files[0]);

    }
  }


  
}
// function fileChangeEvent(fileInput) {

//   if (fileInput.target.files && fileInput.target.files[0]) {

//     const reader = new FileReader();
//     reader.onload = (e) => {
      
//       // Create a Blog object for selected file & define MIME type
//       var blob = new Blob(fileInput.target.files, { type: fileInput.target.files[0].type });

//       // Create Blog URL 
//       var url = window.URL.createObjectURL(blob);

//       var element = document.getElementById("selected-file");

//       if (
//         fileInput.target.files[0].type === 'image/png' ||
//         fileInput.target.files[0].type === 'image/gif' ||
//         fileInput.target.files[0].type === 'image/jpeg'
//       ) {
//         // View Image using Base64 String
//         console.log(e.target.result);
//         var img = document.createElement("img");
//         img.src = e.target.result;
//         element.appendChild(img);
//       }

//       // Create Blog View Link
//       var a = document.createElement("a");
//       var linkText = document.createTextNode("View File");
//       a.target = "_blank";
//       a.appendChild(linkText);
//       a.href = url;
//       element.appendChild(a);

//     };
//     reader.readAsDataURL(fileInput.target.files[0]);

//   }
// }