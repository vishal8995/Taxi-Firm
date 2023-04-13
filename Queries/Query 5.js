/*
--Query 5: To fetch the total revenue calculated of the company.

We have used $addfields and $group aggregation stage functions with accumulators like $substract
from Revenue document.
*/
db.Revenue.aggregate([
{
    $addFields: {
        Revenue: { $subtract: ["$earned_amount","$paid_amount"] }       
        }
},
{
        $group: { 
        _id: "Total Revenue", 
        Value: { 
            $sum: "$Revenue" }}
}])