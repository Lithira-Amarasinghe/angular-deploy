import { HttpHeaders } from "@angular/common/http";
export class HttpHeaderCreator {
    createHeader() {
        let token = localStorage.getItem('token');
        return new HttpHeaders({
            'Authorization': 'Bearer ' + token
        });
    }
}
//# sourceMappingURL=httpHeaderCreator.js.map