import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADMIN, CUSTOMER, COMPANYID, QOUTE } from 'src/app/shared/constants';
import { CardModel } from 'src/app/shared/models';
import { Item } from 'src/models/item.model';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { ItemService } from 'src/services/item.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {


  items: Item[] =[];
  ADMIN = ADMIN;
  CUSTOMER = CUSTOMER;
  user: User;

  services: CardModel[];
  message: string;

  constructor(private itemService: ItemService,
    private accountService: AccountService,
    private router: Router,
  ) { 
    this.itemService.getItems(COMPANYID, QOUTE).subscribe(data => {
      this.items = data;
      this.services = [];
      this.items.forEach(item=>{
this.services.push({
  heading: item.Name,
  body: item.Description.substr(0, 200),
  img: item.ImageUrl,
  url: `/quote/${item.ItemId}`
});
      })
    });

  }

  ngOnInit() {
  
 

    // this.accountService.user.subscribe(data => {
    //   this.user = data;
    // });
  }
  add() {
    this.router.navigate([`/quote/add`])
  }
  view(item: Item) {
    this.router.navigate([`/quote/${item.ItemId}`]);
  }
  book(item: Item) {
    this.router.navigate([`/book/${item.ItemId}`]);
  }
  save(item) {
    this.itemService.update(item).subscribe(data => {
      if (data && data.ItemId) {
        this.message = 'Item updated successfully.';
      }
    })
  }
}
