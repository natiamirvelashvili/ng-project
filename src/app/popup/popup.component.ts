import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  cancelMessage:string = "cancel"
  confirmMessage:string = "confirm"
  constructor(public dialogRef: MatDialogRef<PopupComponent>) { }

  ngOnInit(): void {
  }

  // confirm(){
  //   this.dialogRef.close()
  // }

}
