class Product {
    static async getProduct(productId: number): Promise<any> {
        console.info(productId);

        return { id: "123", name: "Mercedes E300 AMG" } as Product;
    }
}

export default Product;
