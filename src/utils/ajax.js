import { Observable, Subscriber } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

// TODO: progress
export const ajaxWithUpdates = request =>
  new Observable(subscriber => {
    const progressSubscriber = new Subscriber(
      progressEvent => subscriber.next({ ProgressEvent: progressEvent }),
      error => subscriber.error(error),
      // Forward next and error but not complete
      // When progress is complete, we send the response *then* complete.
      () => {},
    );
    const ajax$ = ajax({
      ...request,
      progressSubscriber,
    });
    const subscription = ajax$
      .pipe(map(ajaxResponse => ({ AjaxResponse: ajaxResponse })))
      .subscribe(subscriber);
    return () => subscription.unsubscribe();
  });
