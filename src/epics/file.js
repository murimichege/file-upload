import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError, takeUntil, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { rxUpload } from '../api/file';
import { XHR_SUCCESS, XHR_FAILED } from '../constants/upload';
import {
  UPLOAD_FILE,
  uploadFileSuccess,
  uploadFileFailed,
  CANCEL_UPLOAD,
} from '../redux/modules/file';

// TODO: progress
export const uploadFile = action$ =>
  action$.pipe(
    ofType(UPLOAD_FILE),
    mergeMap(action =>
      ajax(rxUpload(action.payload)).pipe(
        map(response => uploadFileSuccess(XHR_SUCCESS)),
        catchError(err => of(uploadFileFailed(XHR_FAILED))),
        takeUntil(action$.ofType(CANCEL_UPLOAD)),
      ),
    ),
  );
