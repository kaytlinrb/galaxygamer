import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { GamePipe } from '../game.pipe'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MemberService]
})
export class HomeComponent implements OnInit {
  filterByGame = 'allMembers';
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMember();
  }

    detailNavigation(clicked) {
      console.log(clicked);
      this.router.navigate(['members', clicked.$key]);
    }

  onChange(optionFromMenu) {
      this.filterByGame = optionFromMenu;
    }

}
