/*
--Query 12: List down details of cars with their latest MOT test dates which are either in for service or awaiting repairs 

We have used $lookup, $unwind, and $match aggregation stage funtions on Car_Details document
*/
db.Car_Details.aggregate([
    {
       $lookup: {
            from: "Status_Cars",
            localField: "status_car_id",
            foreignField: "_id",
            as: "status_car_id"
        }
    },
    {$unwind: "$status_car_id"},
    {$match: {$expr: {$anyElementTrue: {$map: {
                input: ["$status_car_id.awaitingRepair", "$status_car_id.inForService"],
                in: {$eq: ["$$this", true]}}}}}}
])