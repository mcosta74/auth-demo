export class AuthUser {

    public id:number;
    public username:string;
    public permissions:string[];

    constructor(data:any) {
        this.id = data.id;
        this.username = data.username;

        if (data.permissions) {
            this.permissions = [];
            for (let p of data.permissions) {
                this.permissions.push(p);
            }
        }
    }
}