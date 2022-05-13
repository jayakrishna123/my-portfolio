import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  resumeDownloadLink = '#'; // Add download link here
  githubLink = '#'; // Hardcode github link here
  twitterlink = 'https://jayacv.000webhostapp.com/'; // hardcode
  linkedinLink = '#'; // hardocode again :)
  constructor() { }

  ngOnInit(): void {
  }

}
