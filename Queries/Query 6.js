/*
--Query 6: To fetch the operators working in deifferent shifts.

We have used $lookup, $unwind, $match and $project aggregation function to fetch details
from Operator_Details, Shift_Data, and CTC_Data documents.
*/
db.Operator_Details.aggregate([
    {$lookup:
        {
            from: "Shift_Data",
            localField: "shift",
            foreignField: "_id",
            as: "shift"
        }
    },{$unwind: "$shift"},
    {$lookup:
        {
            from: "CTC_Data",
            localField: "operator_ctc",
            foreignField: "_id",
            as: "operator_ctc"
        }
    },{$unwind: "$operator_ctc"},
    {$match: { $expr: {$eq: ["$shift.morning_shift", true]}}},
    {$project: {
        _id: 0,
        "operator_ctc._id":0,
        "shift._id":0
    }}
])