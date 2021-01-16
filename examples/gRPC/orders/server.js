const PROTO_PATH = './orders.proto';
const grpc = require('@grpc/grpc-js');

const OrderModel = require('./OrderModel.js')

const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const ordersProto = grpc.loadPackageDefinition(packageDefinition);

// const { v4: uuidv4 } = require("uuid");
//import a mongoose connection or a postgres
const server = new grpc.Server();
server.addService(ordersProto.ProxyToOrder.service, {
  addOrder: (call, callback) => {
    const newOrder = {
      customerID: call.request.customerID,
      bookID: call.request.bookID,
      // purchaseDate: call.request.purchaseDate,
      // deliveryDate: call.request.deliveryDate,
    };
    OrderModel.create(newOrder);
  },
  //call.name // call.request.name
  getOrders: (call, callback) => {
    OrderModel.find({}, (err, orders) => {
      console.log(orders);
      //create an orders/books
      //for loop through orders
      //grab bookID and place as param into gRPC call
      //take the returned book title
      //add to orders/books array
    });
    callback(null, { orders: 5, blah: 'djlasd' });
  },
});
console.log('yooo');
// start server
server.bindAsync("127.0.0.1:30043", grpc.ServerCredentials.createInsecure(), () => {
  server.start();
});
console.log("Server running at http://127.0.0.1:30043");
