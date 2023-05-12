import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/service/moment.service';

import { Moment } from 'src/app/Moment';

import { Router, ActivatedRoute } from '@angular/router';

import { MomentComponent } from ;

import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
} from '@angular/forms';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

import { environment } from 'src/assets/environment';


@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css'],
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;

  faTimes = faTimes;
  faEdit = faEdit;

  commentForm!: FormGroup;}