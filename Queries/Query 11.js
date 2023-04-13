/*
--Query 11: Fetch details of top 3 bookings based on the booking amount.

We have used $sort and $limit aggregation stage functions on Payment_Details document.
*/
db.Payment_Details.aggregate(
    [
        { $sort: {amount: -1}},
        { $limit: 3}
    ]
)