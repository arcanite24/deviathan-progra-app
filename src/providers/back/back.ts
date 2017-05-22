import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AuthProvider } from '../auth/auth';

@Injectable()
export class BackProvider {

  public api: string;

  constructor(public http: Http, public auth: AuthProvider) {
    this.api = this.auth.api;
  }

  // Alumnos -> Reportes

  addReporte(data: any) {
    return this.http.post(this.api + 'reporte', data).map(res => res.json());
  }

  getMyReportes() {
    return this.http.get(this.api + 'reporte/getUserReports/' + this.auth.user.id).map(res => res.json());
  }

  getAllItems() {
    return this.http.get(this.api + 'inventario').map(res => res.json());
  }

}
