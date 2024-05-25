import Product from "./Product";

export type DeliVeryStatus = "Confirmed" | "Preparing Goods" | "Delivering" | "Delivered" | "Canceled" | "Return goods";

export interface OrderItem {
    product: Product;
    amount: number;
}
