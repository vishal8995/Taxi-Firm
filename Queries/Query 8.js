/*
--Query 8: To sort the client details based type of booking for frequent users.

We have used $match and $sort aggregation stage functions on Client_Details document.
*/
db.Client_Details.aggregate([
    {
        $match: {frequency: {$ne: null}}    
    },
    {
        $sort: {client_type: -1}
    }
    ])