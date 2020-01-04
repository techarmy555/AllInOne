import { Component, OnInit, Input } from '@angular/core';
import { strict } from 'assert';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-intr-hobbies',
  templateUrl: './intr-hobbies.component.html',
  styleUrls: ['./intr-hobbies.component.css']
})
export class IntrHobbiesComponent implements OnInit {

  @Input() hobbarr: any;    // original oBject
  hobbarrreplica: [any];


  UpdateCount = 0;
  InsertCount = 0;
  FinalJSON: any = {
    user: JSON.parse(localStorage.getItem('isLoggedin').toString()).emp_name,
    eswdocument: {
      empinteresthobbies: [{
        'interesthobbies': '',
        'id': '',
        'interesthobbieshasorder': ''
      }
      ],
    },
    wsapicontent: {
      insertions: '',
      updations: '',
      array: [{
        'uniqueid': '',
        'ID': '',
        'userid': '20956',
        'employeeid': JSON.parse(localStorage.getItem('isLoggedin').toString()).employee_id,
        'keycode': '2',
        'keyword': 'interesthobbies',
        'txtvalue': '',
        'hasorder': '',
        'isdeleted': '0',
        'modifiedby': JSON.parse(localStorage.getItem('isLoggedin').toString()).emp_name,
        'modifiedate': new Date()
      }]
    }
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.hobbarrreplica = this.hobbarr.sort(function (obj1, obj2) {
      return obj1.id - obj2.id;
    }).slice(0);


    // console.log('hobbarrreplica Array:::' + JSON.stringify(this.hobbarr));
    // console.log("Sorted"+JSON.stringify(this.hobbarr.sort(function(obj1, obj2) {
    // Ascending: first age less than the previous
    // return obj1.id - obj2.id;
    // })));
    if (this.hobbarrreplica.length < 3) {
      for (let i = 0; i <= 3 - this.hobbarrreplica.length; i++) {
        this.hobbarrreplica.push({ 'interesthobbies': '', 'id': Math.max.apply(Math, this.hobbarrreplica.map(function (o) { return o.id; })) + 1, 'interesthobbieshasorder': '' });
      }
    }
  }
  geninput(preindex) {
    console.log('geninput index::::' + parseInt(preindex + 1) + '');
    // this.hobbarrreplica.push({ 'interesthobbies': '', 'id': '', 'interesthobbieshasorder': '' });
    this.hobbarrreplica.push({ 'interesthobbies': '', 'id': Math.max.apply(Math, this.hobbarrreplica.map(function (o) { return o.id; })) + 1, 'interesthobbieshasorder': parseInt(preindex + 1) + '' });
    const objDiv = document.getElementById('idintrnhobb');
    console.log(objDiv.scrollHeight);
    objDiv.scrollTop = objDiv.scrollHeight - 100;
    console.log('hobbarrreplica Array:::' + JSON.stringify(this.hobbarrreplica));
    this.InsertCount += 1;
    this.FinalJSON.wsapicontent.insertions = this.InsertCount;
  }
  deletecontroll(id, currentindex, hobb, baseindex) {
    console.log('this.hobbarrreplica:::::' + this.hobbarrreplica);
    for (let i = 0; i <= this.hobbarrreplica.length - 1; i++) {
      if (this.hobbarrreplica[i].id === id) {
        console.log(this.hobbarrreplica[i]);
        this.hobbarrreplica[i].delete = 'true';
        this.hobbarrreplica[i].interesthobbieshasorder = currentindex;
        this.FinalJSON.eswdocument.empinteresthobbies.push(this.hobbarrreplica[i]);
        this.hobbarrreplica.splice(i, 1);
        this.FinalJSON.wsapicontent.array.push({
          'uniqueid': JSON.parse(localStorage.getItem('isLoggedin').toString()).employee_id + '1' + currentindex,
          'ID': '-1',
          'userid': '20956',
          'employeeid': JSON.parse(localStorage.getItem('isLoggedin').toString()).employee_id,
          'keycode': '2',
          'keyword': 'interesthobbies',
          'txtvalue': hobb.interesthobbies,
          'hasorder': currentindex + '',
          'isdeleted': '1',
          'modifiedby': JSON.parse(localStorage.getItem('isLoggedin').toString()).emp_name,
          'modifiedate': new Date()
        });
        break;
      } else {
        console.log('false');
      }
    }
    console.log(JSON.stringify(this.FinalJSON.eswdocument));
    // console.log(JSON.stringify(this.hobbarrreplica));
  }
  onNoClickfrall() {
    // this.hobbarrreplica=[];
    this.hobbarrreplica = this.hobbarr.sort(function (obj1, obj2) {
      // Ascending: first age less than the previous
      return obj1.id - obj2.id;
    }).slice(0);
    const dialogRef = this.dialog.closeAll();
  }

  onOkClick() {
    console.log('onOkClick');
    // this.hobbarrreplica=[];
  }
  createupdateArr(event: any, hobb, currentindex, baseindex) {
    const baseindex1 = JSON.stringify(baseindex);
    // this.elasticJSON.eswdocument.empinteresthobbies.push(hobb);
    // console.log("This is update Arr:::createupdateArr"+JSON.stringify(hobb));
    let flag = false;
    let flag1 = false;

    if (hobb.interesthobbies == '') {
      // console.log("Empty...." + hobb.interesthobbies);
      hobb.delete = 'true';
      this.FinalJSON.eswdocument.empinteresthobbies.push(hobb);
    } else {
      for (const entry of this.FinalJSON.eswdocument.empinteresthobbies) {
        // console.log("this.elasticJSON.eswdocument.empinteresthobbies.id:::" + JSON.stringify(entry.id));
        // console.log("hobb.id:::" + hobb.id)
        if (parseInt(entry.id) === parseInt(hobb.id)) {
          console.log('this.elasticJSON.eswdocument.id == hobb.id === true');
          flag = true; // updateparameters(true,currentindex,baseindex)
          entry.interesthobbies = hobb.interesthobbies;
          break;
        } else {
          console.log('this.elasticJSON.eswdocument.id == hobb.id === false');
        }
      }
      for (const entry of this.FinalJSON.wsapicontent.array) {
        console.log('entry.hasorder' + JSON.stringify(entry.hasorder));
        console.log('currentindex:::' + currentindex);
        if (parseInt(entry.hasorder) === parseInt(currentindex)) {
          console.log('parseInt(entry.hasorder) === parseInt(currentindex) === true');
          flag1 = true;
          entry.txtvalue = hobb.interesthobbies;
          break;
        } else {
          console.log('parseInt(entry.hasorder) === parseInt(currentindex) === false');
        }
      }
      if (!flag1) {
        for (let i = 0; i < this.FinalJSON.wsapicontent.array.length; i++) {
          if (this.FinalJSON.wsapicontent.array[i].hasorder == '') {
            this.FinalJSON.wsapicontent.array.splice(i, 1);
          }
        }
        console.log(currentindex + '::::' + baseindex);
        this.FinalJSON.wsapicontent.array.push({
          'uniqueid': JSON.parse(localStorage.getItem('isLoggedin').toString()).employee_id + '1' + currentindex,
          'ID': currentindex >= baseindex ? hobb.id : '-1',
          'userid': '20956',
          'employeeid': JSON.parse(localStorage.getItem('isLoggedin').toString()).employee_id,
          'keycode': '2',
          'keyword': 'interesthobbies',
          'txtvalue': hobb.interesthobbies,
          'hasorder': currentindex + '',
          'isdeleted': '0',
          'modifiedby': JSON.parse(localStorage.getItem('isLoggedin').toString()).emp_name,
          'modifiedate': new Date()
        });
      }
      if (!flag) {
        hobb.delete = 'false';
        for (let i = 0; i < this.FinalJSON.eswdocument.empinteresthobbies.length; i++) {
          if (this.FinalJSON.eswdocument.empinteresthobbies[i].id == '') {
            this.FinalJSON.eswdocument.empinteresthobbies.splice(i, 1);
          }
        }
        this.UpdateCount += 1;
        this.FinalJSON.wsapicontent.updations = this.UpdateCount;
        this.FinalJSON.eswdocument.empinteresthobbies.push(hobb);
      } else {

      }
    }
    console.log(JSON.stringify(this.FinalJSON));
  }
  updateparameters(flag, currentindex, baseindex) {

  }
  inputclick(hobbar) {
    // console.log(hobbar);
    // for(let i = 0; i <= this.elasticJSON.eswdocument.empinteresthobbies.length - 1; i++){
    //   if(this.elasticJSON.eswdocument.empinteresthobbies[i].id !== hobbar.id){
    //     console.log("this.elasticJSON.eswdocument.empinteresthobbies[i].id==hobbar.id === false")
    //     this.elasticJSON.eswdocument.empinteresthobbies.push(hobbar);
    //   }
    //   else{

    //     console.log("this.elasticJSON.eswdocument.empinteresthobbies[i].id==hobbar.id === true")
    //   }
    // }
    // console.log(JSON.stringify(this.elasticJSON.eswdocument.empinteresthobbies));
  }
}
