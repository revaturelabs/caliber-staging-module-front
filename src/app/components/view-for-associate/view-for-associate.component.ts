import { Component, OnInit } from '@angular/core';
import { SwotService } from 'src/app/services/swot/swot.service';
import { Router } from '@angular/router';
import { ToastRelayService } from 'src/app/services/toast-relay/toast-relay.service';
import { Swot } from 'src/app/models/swot-model/swot';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Associate } from './../../models/associate-model/associate.model';
import { AssociateService } from '../../services/associate/associate.service';

@Component({
  selector: 'app-view-for-associate',
  templateUrl: './view-for-associate.component.html',
  styleUrls: ['./view-for-associate.component.css']
})
export class ViewForAssociateComponent implements OnInit {
  swotAnalyses: Swot[] = [];
  associate: Associate;
  selectedSwot: Swot;
  constructor(
    private associateService: AssociateService,
    private modalService: NgbModal,
    private swotService: SwotService,
    private router: Router,
    private toastService: ToastRelayService
  ) { }

  ngOnInit(): void {
    this.selectedSwot = null;
    this.associate = JSON.parse(sessionStorage.getItem('associate'));
    console.log(this.associate);
    this.pullSwotData();
    console.log("the swot analyses items are: " + this.swotAnalyses);
  }

  /**
   * This method pulls the SWOT analysis data from the backend
   */
   pullSwotData() {
    this.swotService
      .getSwotByAssociatedId(this.associate.id)
      .subscribe((data: any) => {
        this.swotAnalyses = data;
      });
  }

  viewFeedback(){
    this.router.navigate([`/feedback`]);
  }

  selectSwot(swot:Swot){
    this.selectedSwot = swot;
  }

  deselectSwot(){
    this.selectedSwot = null;
  }
}
