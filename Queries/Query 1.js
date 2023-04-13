/*
-- Query 1: To fetch details of Driver Collection using "$lookup" aggregation function.-- 

"$lookup" helps fetch data from all  collections linked to the central collection helping establish 'relationship' using 'foreign key' constraint. 
 This also helps in decentralizing the data and keeping relevant data in different collections and using as and when 
 required.
 */

db.Driver_Details.aggregate([
    {$lookup:
        {
            from: "Address_Details", 
            localField: "address",   
            foreignField: "_id",     
            as: "address"            
        }
    },
    {$lookup:
        {
            from: "Contact_Details", 
            localField: "contact",   
            foreignField: "_id",     
            as: "contact"            
        }
    },
    {$lookup:
        {
            from: "CTC_Data",          
            localField: "driver_ctc",  
            foreignField: "_id",       
            as: "driver_ctc"           
        }
    }
])