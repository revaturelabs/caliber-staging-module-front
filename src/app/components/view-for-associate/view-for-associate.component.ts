import { Component, OnInit } from '@angular/core';
import { SwotService } from 'src/app/services/swot/swot.service';
import { Router } from '@angular/router';
import { ToastRelayService } from 'src/app/services/toast-relay/toast-relay.service';
import { Swot } from 'src/app/models/swot-model/swot';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Associate } from './../../models/associate-model/associate.model';
import { SwotComponent } from './../swot/swot.component';
import { AssociateService } from '../../services/associate/associate.service';

@Component({
  selector: 'app-view-for-associate',
  templateUrl: './view-for-associate.component.html',
  styleUrls: ['./view-for-associate.component.css']
})
export class ViewForAssociateComponent implements OnInit {
  swotAnalyses: Swot[] = [];
  associate: Associate;
  constructor(
    private associateService: AssociateService,
    private modalService: NgbModal,
    private swotService: SwotService,
    private router: Router,
    private toastService: ToastRelayService
  ) { }

  ngOnInit(): void {
    this.associate = JSON.parse(sessionStorage.getItem('associate'));
    console.log(this.associate);
<<<<<<< HEAD
    console.log(this.swotAnalyses);
=======
>>>>>>> 22723f5697c64e7e94ab70b6f1c4e1d24bc74d80
    this.pullSwotData();
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
}