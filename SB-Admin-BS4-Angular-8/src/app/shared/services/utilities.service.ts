import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UtilitiesService extends BaseService {
    constructor(private http: HttpClient) {
        super();
    }
    UnflatteringForLeftMenu = (arr: any[]): any[] => {
        const map = {};
        const roots: any[] = [];
        for (let i = 0; i < arr.length; i++) {
            const node = arr[i];
            node.children = [];
            map[node.id] = i; // use map to look-up the parents
            if (node.parentId !== null) {
                delete node['children'];
                arr[map[node.parentId]].children.push(node);
            } else {
                roots.push(node);
            }
        }
        return roots;
    }
}

