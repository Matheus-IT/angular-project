import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    mostrarMenu = new Subject<boolean>();

    constructor() { }

    login(usuario:string, senha:string): void {
        if (usuario == 'teste' && senha == '123') {
            localStorage.setItem('token', 'qwer1234');
            this.mostrarMenu.next(false);
        } else {
            this.mostrarMenu.next(true);
            window.location.reload();
        }
    }

    setMostraMenu(valor: boolean) {
        this.mostrarMenu.next(valor);
    }

    getMostraMenu() {
        return this.mostrarMenu.asObservable();
    }
}
