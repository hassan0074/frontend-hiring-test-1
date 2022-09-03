import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  public data = []
  public limit = 10;
  public page = 1;
  public totalNo = 0
  public userInfo = {
    "username": "James",
    "password": "123456"
  }
  constructor(
    private apiService: ApiService,
    private storageService : StorageService
  ) { }

  ngOnInit(): void {
    this.authenticate()
    this.tokenRefresher()
  }

  authenticate() {
    this.apiService.sendRequest(environment.baseURL + environment.authentication, "post",this.userInfo).subscribe(
      (response : any) =>
      {
        this.storageService.setStorage(response.access_token,"access_token")
        this.getTableData();
      }
    )
  }
  getTableData(){
    this.apiService.sendRequest(environment.baseURL + environment.calls+"offset="+this.page+"&limit="+this.limit , "get").subscribe(
      (response : any) =>
      {
        this.data = response.nodes
        this.totalNo = response.totalCount
      }
    )
  }
  changePage(event : any){
    this.page = event
    this.getTableData()
  }
  tokenRefresher(){
    setInterval(() =>
    {
      this.apiService.sendRequest(environment.baseURL + environment.refresher, "post").subscribe(
        (response : any) =>
        {
          this.storageService.setStorage(response.access_token,"access_token")
        }
      )
    },600000)
  }

}
