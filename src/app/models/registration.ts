export class Registration{
    public id:string|null=null;
    constructor (
        public mark?:string,
        public model?:string,
        public phone?:string,
        public regnumber?:string,
        public year?:number
    ) {        
    }
}