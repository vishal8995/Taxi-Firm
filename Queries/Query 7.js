/*
--Query 7: To fetch the top 3 drivers based on highest revenue calculated from earned amount and penalties received.

We have used $lookup, $unwind, $addFields, $sort and $limit aggregation functions with $subtract accumulator from
Driver_Details document.
*/
db.Driver_Details.aggregate([
    {
        $lookup: {
            from: "Revenue",
            localField: "_id",
            foreignField: "driver_id",
            as: "revenue_details"
        }
    },
    {
        $unwind: "$revenue_details"
    },
    {$addFields: {
       Score: { $subtract: ["$revenue_details.earned_amount","$penalties"] }       
     }
   },
   {$sort: {"Score":-1}
   },
   {$limit: 3}
])