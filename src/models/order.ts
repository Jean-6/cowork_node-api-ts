import { Types } from 'mongoose';

enum Status {

    PENDING = 1,
    COMPLETED = 2,
    CANCELLED = 3,
}

export interface Order {
    id: Types.ObjectId,
    user_id: Types.ObjectId,
    order_date : Date,
    total_amount : number,
    status : Status,  // ex: 'Pending', 'Completed', 'Cancelled'
    order_details :  
    [
        {
            "product_id": "ObjectId",
            "quantity": "int",
            "unit_price": "decimal"
        }
    ]
}