import { HttpHandlerFn, HttpHeaders, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


export const interceptInterceptor: HttpInterceptorFn = (req: any, next: HttpHandlerFn) => {
  const platformId = inject(PLATFORM_ID);
  const isBrowser = isPlatformBrowser(platformId);
  const url = (isBrowser ? 'http://localhost:3000' : 'http://127.0.0.1:3000') + req.url;
  console.log(url);
  let headers = new HttpHeaders();
  headers = headers.append('Content-Type', 'application/json'); 
  const finalReq: HttpRequest<any> = req.clone({ url, headers });

  return next(finalReq);
};