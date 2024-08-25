const mongooose=require('mongoose');

const requestSchema = mongooose.Schema({
    sender: {
        type: mongooose.Schema.ObjectId,
        ref:'User',
    },
    recipient:{
        type: mongooose.Schema.ObjectId,
        ref:'User',
    },
    createdAt:{
        type:Date,
        default: Date.now(),
    }
})

 const FriendRequest =mongooose.model("FriendRequest",requestSchema);

 module.exports=FriendRequest;