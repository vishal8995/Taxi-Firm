/*
--Query 2: To fetch Car details and Owner Details.

We have implemented nesting of $lookup aggregation function to fetch car details along with driver details 
including address and contact information from Status_Cars, Owner_Details, and Contact_Details documents
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
    {
        $lookup: {
            from: "Owner_Details",
            let: { source_ownerId: "$owner_id" },
            pipeline: [
                { $match: { $expr: { $eq: ["$_id", "$$source_ownerId"] }}},
                { $lookup: {
                    from: "Address_Details",
                    let: { source_addressId: "$address"},
                    pipeline: [
                        {$match: { $expr: { $eq: ["$_id", "$$source_addressId"] }}}
                    ],
                    as: "address"
                }},
                { $lookup: {
                    from: "Contact_Details",
                    let: { source_contactId: "$contact"},
                    pipeline: [
                        {$match: { $expr: { $eq: ["$_id", "$$source_contactId"] }}}
                    ],
                    as: "contact"
                }}
            ],
            as: "owner_details"
        }
    }
])