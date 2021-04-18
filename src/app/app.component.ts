import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CustomjsService } from './services/customjs.service';
import { ApiService } from './services/api.service';
import { Riverwalk } from './interface/riverwalk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rwt';
  public riverwalk: any = [];
  public specialmenu: any = [];
  constructor(
    private customjsService: CustomjsService,
    private api: ApiService
    ) { }
  ngOnInit(){
   this.customjsService.counterData();
   this.customjsService.contentWayPoint();
   this.customjsService.fullHeight();
   this.customjsService.carousel();
   this.customjsService.loader();
   this.customjsService.scrollWindow();
   this.getRiverwalk('cms_riverwalk_tandoor');
   this.getSpecialMenu('menu_special');

  }
  async getRiverwalk(action: string) {
    await this.api.getRiverwalk(action)
      .subscribe(res => {
        //console.log(`res ${res['status']} ${res['data']['building'][0]['property_name']}`);

          this.riverwalk = res;
          console.log(JSON.stringify(this.riverwalk));

      },(err: any) => {
        console.log('prem '+ JSON.stringify(err));

       });
      }
      async getSpecialMenu(action: string) {

        await this.api.getSpecialMenu(action)

          .subscribe(res => {

            //console.log(`res ${res['status']} ${res['data']['building'][0]['property_name']}`);

              this.specialmenu = res['special'];

              console.log(JSON.stringify(this.specialmenu));

          },(err: any) => {

            console.log('prem '+ JSON.stringify(err));

           });

      }

}
