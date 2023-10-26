import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-single',
  template: `
    <section class="section">
      <div class="container has-text-centered">
        <div class="card" *ngIf="user">
          <img [src]="user.avatar_url" alt="" />
          <h1>{{ user.login }}</h1>
        </div>
      </div>
    </section>
  `,

  styles: []
})
export class UserSingleComponent {
  user: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      //grab username of url
      const username = params['username'];

      // use the userService to get data from gitHApi
      this.userService.getUser(username).subscribe(user => (this.user = user));
    });
  }
}
