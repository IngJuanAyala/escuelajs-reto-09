// const { productsMock } = require('../utils/mocks');
const MongoLib = require('../lib/mongo');

class ProductService {
  constructor(){
    this.collection = 'products';
    this.mongoDB = new MongoLib();

  }

  async getProducts(tags) { 
    //const products = await Promise.resolve(productsMock);
    const query = tags && {tags: {$in: tags }};
    const products = await this.mongoDB.getAll(this.collection, query);
    return products || [];
  }

  async createProduct( product ) {
    const createProductId = await this.mongoDB.create(this.collection, product);
    return createProductId;
  }
}

module.exports = ProductService;
