/*
--Query 4: To fetch the most used payment type while making a booking.

We have implemented nesting of $group, $sort, and $limit aggregation function from Payment_Details document.
*/
db.Payment_Details.aggregate(
    [
        { $group: {_id: "$payment_type", usage_count: {$sum:1}  }},
        { $sort: {'usage_count': -1}},
        { $limit: 1}
    ]
)

