
exports.completeOrder = async (event) => {

    //Log event
    console.log("Received event from step function:", event);

    //Create response
    let data = {
        ...event,
        status: "Approved"
    }
    //Other task here (eg:Delivery date calculation)
    //update orders table to store order details
    let response = {
        message: "Your order is approved and it will be delivered soon",
        orderDetails: data
    }
    return response;
}
