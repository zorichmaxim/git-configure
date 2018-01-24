import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

    public getData(storageName: string) {
        return JSON.parse(localStorage[storageName]);
    }

    public setData(storageName: string, data) {
        localStorage[storageName] = JSON.stringify(data);
    }

    public removeData(storageName: string) {
        localStorage.removeItem(`${storageName}`);
    }

    public haslocalStorage(storageName:string){
        return localStorage[storageName]
    }
}
