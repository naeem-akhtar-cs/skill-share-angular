import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GoogleSigninService } from './google-signin.service';

@Component({
  selector: 'GMailComponent',
  templateUrl: './app.GMailComponent.html',
  styleUrls: ['./app.GMailComponent.css'],
})
export class GMailComponent implements OnInit {
  title = 'web-project';
  user!: gapi.auth2.GoogleUser;
  router: any;
  constructor(
    private signInService: GoogleSigninService,
    private ref: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.signInService.obserable().subscribe((user) => {});
  }
  signIn() {
    this.signInService.signIn();
  }
  signOut() {
    this.signInService.signOut();
  }
}
