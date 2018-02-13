export class Home {
    public id:number;
    public type: string;
    public price: number;
    public address: string;
    public description: string;
    public bedrooms: number;
    public bathrooms:number;
    public area: number;
    public image:string

    constructor(id:number,
        type: string,
        price: number,
        address: string,
        description: string,
        bedrooms: number,
        bathrooms:number,
        area: number,
        image:string){
            this.id = id;
            this.type = type;
            this.price = price;
            this.address = address;
            this.description = description;
            this.bedrooms = bedrooms;
            this.bathrooms = bathrooms;
            this.area = area;
            this.image = image
        }

}