
exports.cancelOrder = async(event)=>{

    //Log event
    console.log("Received event from step function:", event);
    
    //Create response
    let data = {
        ...event,
        status:"Rejected"
    }
    
    let response = {
        message: "Your order is not approved because of payment failure",
        orderDetails:data
    }
    return response;
}
