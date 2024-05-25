import { makeAutoObservable } from "mobx";
import { DeliVeryStatus, OrderItem } from "model/Order";

class OrderState {
    items: OrderItem[] = [];
    deliveryStatus: DeliVeryStatus | undefined = undefined;

    constructor() {
        makeAutoObservable(this);
    }
}

export default OrderState;
