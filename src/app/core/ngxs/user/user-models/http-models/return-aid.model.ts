import {InsertedIdBody} from '../shared.model';

// export interface ReturnAidRequest {}
export interface ReturnAidResponse {
  code: string;
  message: string;
  body: InsertedIdBody;
}

