import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private MemberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, img: string, description: string, favGame: string) {
      const newMember: Member = new Member(name, img, description, favGame);
      this.MemberService.addMember(newMember);
    }

}
