import { Component, OnInit, ViewChild } from '@angular/core';
import { paragraphServicesService } from '../services/paragraph-services/paragraph-service.service';
import { ToastrService,ToastContainerDirective } from 'ngx-toastr';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  paragraphArray=[]
  editValue;
  @ViewChild(ToastContainerDirective, {static: false}) toastContainer: ToastContainerDirective;
  constructor(private paragraphService:paragraphServicesService,private toastr:ToastrService ) { }

  ngOnInit() {
  }

  receivedData(newData) {
    let index = this.paragraphArray.findIndex(x => x._id == newData._id);
    if (index == -1) {
      this.paragraphArray.push(newData);
    } else {
      this.paragraphArray[index] = newData;
    }
  
  }
  delete(list, i) {
this.paragraphService.deleteparagraph(list._id).subscribe((response:any)=>
{
  this.toastr.success("Paragraph deleted successfully")
  this.paragraphArray.splice(i,1)
},err=>
{
  this.toastr.error("Paragraph deletion unsuccessful")

})

  }

  update(list, i) {
    this.editValue = {...list};
  }
  addPlace() {

  }

}
