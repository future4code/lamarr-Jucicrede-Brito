export class Purchase{
    
    constructor(private id:string, private userId:string, private productId: string, private quantity: number, private totalPrice:number){
    this.id=id;
    this.productId = productId;
    this.quantity = quantity;
    this.totalPrice = totalPrice
    }
}
export class PurchaseDB{
    constructor(private user_id: string, private product_id: string, private quantity: number,private total_price: number){
    this.user_id = user_id;
    this.product_id;
    this.quantity;
    this.total_price
    }
}