import { combineEpics } from 'redux-observable';

import { uploadFile } from './file';

export default combineEpics(uploadFile);
