import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';
import { ListService } from 'src/app/services/list.service';
import { User } from 'src/app/users.model';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  user: User | undefined;

  constructor(private activatedRoute: ActivatedRoute, private listService: ListService, private detailsService: DetailsService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.queryParamMap.get('id');
    // this.user = this.usersService.getUserById(Number(id));
    this.user = this.detailsService.getUserById(Number(id));
  }

}
