import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { ParaModel } from './paragraphModel';
import { paragraphServicesService } from '../services/paragraph-services/paragraph-service.service';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';

declare var $: any;
@Component({
  selector: 'app-paragraph-form',
  templateUrl: './paragraph-form.component.html',
  styleUrls: ['./paragraph-form.component.css']
})
export class ParagraphFormComponent implements OnInit {
  newValue = new ParaModel();
  editFlag: boolean = false;
  pId;
  @ViewChild(ToastContainerDirective, { static: false }) toastContainer: ToastContainerDirective;

  @Output() newData = new EventEmitter();
  @Input() set passedUserValue(value) {
    if (value) {
      this.newValue = value;
      if (value._id) {
      this.pId = value._id;
        this.editFlag = false;
      }
      // console.log(this.newUser, "this.newUser ,makfma")
    }
  }
  constructor(private paraService: paragraphServicesService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  saveParagraph() {
    if (this.editFlag) {
      this.update()
    }
    else {
      this.paraService.saveparagraph(this.newValue).subscribe((response: any) => {
        this.newData.emit(response)
        $("#modalLoginForm").modal("hide");
        this.toastr.success("Paaragraph Added Successfully")
      }, err => {
        this.toastr.error("Unsuccessful")

      })
    }

  }
  update() {
    this.paraService.updateparagraph(this.newValue, this.pId).subscribe((response: any) => {
      this.newData.emit(response)
      $("#modalLoginForm").modal("hide");
      this.toastr.success("Paaragraph Update Successfully")
    }, err => {
      this.toastr.error("Unsuccessful")

    })
  }
  resetParagraph() {
    this.newValue = new ParaModel()

  }
}
