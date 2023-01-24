import { eventChannel, END } from 'redux-saga';

import { XHR_SUCCESS, XHR_FAILED, XHR_CANCELED } from '../constants/upload';

export const uploadXHR = ({ method, url, body }) => {
  return eventChannel(emitter => {
    const onProgress = e => {
      if (e.lengthComputable) {
        const progress = e.loaded / e.total;
        emitter({ progress });
      }
    };
    const onComplete = () => {
      emitter({ success: XHR_SUCCESS });
      emitter(END);
    };
    const onFailure = () => {
      emitter({ err: XHR_FAILED });
      emitter(END);
    };
    const onCanceled = () => {
      emitter({ err: XHR_CANCELED });
      emitter(END);
    };
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', onProgress);
    xhr.upload.addEventListener('error', onFailure);
    xhr.upload.addEventListener('abort', onCanceled);
    xhr.onreadystatechange = e => {
      const { readyState, status } = xhr;
      console.log(xhr);
      if (readyState === 4) {
        if (status >= 200 && status < 400) {
          onComplete();
        } else {
          onFailure();
        }
      }
    };
    xhr.open(method, url, true);
    xhr.send(body);
    return () => {
      xhr.upload.removeEventListener('progress', onProgress);
      xhr.upload.removeEventListener('error', onFailure);
      xhr.upload.removeEventListener('abort', onCanceled);
      xhr.onreadystatechange = null;
      xhr.abort();
    };
  });
};
