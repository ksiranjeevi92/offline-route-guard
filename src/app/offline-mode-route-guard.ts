import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import {merge, fromEvent, Observable,Observer} from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class OfflineModeRouteGuard implements CanActivate{

  constructor() {}

  createOnline$() {
    return merge<boolean>(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window,'online').pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      })
    )
  }

  canActivate():boolean {
    let isOnline:boolean = true;
    this.createOnline$().subscribe((res) => {
      console.log(res);
      isOnline = res;
    });
    if(isOnline) {
      return true;
    }
    alert('offline');
    return false;
  }
}