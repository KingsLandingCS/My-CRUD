import { Component } from '@angular/core';
import { ProductDataServiceService } from './shared/product-data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My-CRUD';
  public filterData: any = '';
  public pageSize: number = 4;
  public currentPage: number = 1;
  public userDetails: any = []
  constructor(private readonly userDataService: ProductDataServiceService) {
    this.getAllUserData();
  }

  getAllUserData() {
    this.userDetails = this.userDataService.userData.map((data: any) => data);
  }

  search(e: any) {
    this.filterData = e;
    console.log(this.filterData);
  }
}
