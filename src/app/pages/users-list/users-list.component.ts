import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';
import { ListService } from 'src/app/services/list.service';
import { UserSlim } from 'src/app/users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  // users: UserSlim[] = [];
  users: UserSlim[] = [];


  constructor(private router: Router, private listService: ListService, private detailsService: DetailsService) { }

  goToDetails({ id }: UserSlim) {
    this.router.navigate(['users-details'], {
      queryParams: {
        id,
      },
    });
  }

  async ngOnInit(): Promise<void> {
    // this.users = this.usersService.getUser();
    this.users = await this.listService.getCostumer();
  }
}
