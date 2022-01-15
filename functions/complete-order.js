
exports.completeOrder = async (event) => {

    //Log event
    console.log("Received event from step function:", event);

    //Create response
    let data = {
        orderId: event.orderId,
        customerName: event.customerName,
        orderDate: event.orderDate,
        orderAmount: event.amount,
        status: "Approved"
    }
    //update orders table to store order details
    let response = {
        message: "Your order is approved and it will be delivered soon",
        orderDetails: data
    }
    return response;
}
