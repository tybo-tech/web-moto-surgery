import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QOUTE, COMPANYID, CONFIG, IMAGE_CROP_SIZE } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';
import { Item } from 'src/models/item.model';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { ItemService } from 'src/services/item.service';
import { UploadService } from 'src/services/upload.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

 
  item: Item;
  message: string;
  itemId: string;
  user: User;
  heading: string;
  items: Item[];


  parsedHtml: Document;
  index: number;
  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService,
    private uploadService: UploadService,
    private router: Router,
  ) {

    this.activatedRoute.params.subscribe(r => {
      this.itemId = r.id;
      this.user = accountService.currentUserValue;
      if (this.itemId === 'add') {
        this.heading = `Get Qoute`

        this.item = {
          ItemId: '',
          RelatedId: '',
          RelatedParentId: '',
          Name: '',
          ParentId: '',
          ItemType: QOUTE,
          CompanyId: COMPANYID,
          Description: '',
          OrderingNo: 1,
          Price: 0,
          ItemStatus: 'Active',
          ItemCode: '',
          ImageUrl: '',
          ItemPin: '',
          ItemCategory: QOUTE,
          ItemSubCategory: '',
          CreateUserId: '',
          ModifyUserId: '',
          StatusId: 1
        }
      } else {
        this.getItem();
      }

    });

  }

  ngOnInit() {


  }
  back() {
    this.router.navigate(['/'])
  }
  getItem() {
    this.itemService.getItem(this.itemId).subscribe(data => {
      if (data && data.ItemId) {
        this.item = data;
        this.getItems();
        this.heading = data.Name
      }

    });
  }

  getItems() {
    this.itemService.getItems(COMPANYID, CONFIG, true).subscribe(data => {

      this.items = data || [];
      if (this.items && this.items.length) {
        this.item.Children.forEach(itemOption => {
          const parentItem = this.items.find(x => x.ItemId === itemOption.RelatedParentId);
          if (parentItem) {
            const childItem = parentItem.Children.find(x => x.ItemId === itemOption.RelatedId);
            if (childItem) {
              parentItem.SelectedItemId = childItem.ItemId;
            }
          }
        })
      }
    })
  }
  save() {
    if (this.item.CreateDate) {
      this.item.ItemType = QOUTE;
      this.item.ItemCategory = QOUTE;
      this.item.CompanyId = COMPANYID;
      this.itemService.update(this.item).subscribe(data => {
        if (data && data.ItemId) {
          this.message = 'Item updated successfully.';


        }
      })
    } else {
      this.itemService.add(this.item).subscribe(data => {
        if (data && data.ItemId) {
          this.message = 'Item created successfully.';

        }
      })
    }

  }

  onImageChangedEvent(url) {
    if (this.item) {
      this.item.ImageUrl = url;
    }
  }

}
