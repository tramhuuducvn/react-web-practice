class Product {
  static async getProduct(productId: string): Promise<Product> {
    return { id: '123', name: 'Mercedes E300 AMG' } as Product
  }
}

export default Product
