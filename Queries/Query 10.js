/*
--Query 10: Sort car details based on its special features.

We have used $project and $sort aggregation stage functions on Car_Details document.
*/
db.Car_Details.aggregate([
{
    $project: {
            "_id" : 0,
            "status_car_id" : 0,
            "last_mot_test" : 0,
            "owner_instructions" : 0,
            "last_updated" : 0
    }
},
{
    $sort: {special_features: 1}
}])