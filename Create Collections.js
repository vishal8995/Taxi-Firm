db = db.getSiblingDB('taxi_firm');

db.createCollection("Driver_Details" ,autoIndexId = true);
db.createCollection("Car_Details" ,autoIndexId = true);
db.createCollection("Owner_Details" ,autoIndexId = true);
db.createCollection("Client_Details" ,autoIndexId = true);
db.createCollection("Operator_Details" ,autoIndexId = true);
db.createCollection("Payment_Details" ,autoIndexId = true);
db.createCollection("Bookings" ,autoIndexId = true);
db.createCollection("Revenue" ,autoIndexId = true);
db.createCollection("Address_Details" ,autoIndexId = true);
db.createCollection("Contact_Details" ,autoIndexId = true);
db.createCollection("Status_Cars" ,autoIndexId = true);
db.createCollection("Shift_Data" ,autoIndexId = true);
db.createCollection("CTC_Data" ,autoIndexId = true);