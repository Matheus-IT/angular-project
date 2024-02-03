import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './models/Produto.model';

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {
    private url = 'http://localhost:3000/produtos';

    constructor(private _httpClient: HttpClient) { }

    getProduto(id: number): Observable<Produto> {
        const urlIdProduto = `${this.url}/?id=${id}`;
        return this._httpClient.get<Produto>(urlIdProduto);
    }

    getProdutos(): Observable<Produto[]> {
        return this._httpClient.get<Produto[]>(this.url);
    }

    cadastrarProduto(novoProduto: Produto): Observable<Produto> {
        return this._httpClient.post<Produto>(this.url, novoProduto);
    }

    atualizarProduto(id: number, produto: Produto): Observable<Produto> {
        const urlAtualizar = `${this.url}?${id}`;
        return this._httpClient.put<Produto>(urlAtualizar, produto);
    }
    
    removerProduto(id: number): Observable<Produto> {
        const urlAtualizar = `${this.url}/?${id}`;
        return this._httpClient.delete<Produto>(urlAtualizar);
    }
}
