// Booking Destination before a particular date
/*
--Query 9: Fetch details of booking made before a specific date.

We have used $match aggregation stage function on Bookings document.
*/
db.Bookings.aggregate(
    [
        { $match: { "travel_date": {$lte: new Date("2023-01-01T00:00:00.000+0000") }}}
    ]
)