db = db.getSiblingDB('taxi_firm');
db.dropDatabase();


/******** Insert Driver Details *********/

db.Driver_Details.insertMany([
    {fName: "Sam", lName: "Lokonga", address:null, contact:null, driver_ctc: null, date_of_joining: new Date("2012-12-14"), previous_company: "Uber", years_of_exp: 10, penalties: 100},
    {fName: "Lord", lName: "Voldemort", address:null, contact:null, driver_ctc: null, date_of_joining: new Date("1912-12-14"), previous_company: "Lime", years_of_exp: 100, penalties: 25000},
    {fName: "Chacha", lName: "Chaudhary", address:null, contact:null, driver_ctc: null, date_of_joining: new Date("2000-12-27"), previous_company: "Auto Rickshaw", years_of_exp: 22, penalties: 0},
    {fName: "Chota", lName: "Chetan", address:null, contact:null, driver_ctc: null, date_of_joining: new Date("2005-07-15"), previous_company: "Mumbai Taxi", years_of_exp: 17, penalties: 7100},
    {fName: "Peter", lName: "John", address:null, contact:null, driver_ctc: null, date_of_joining: new Date(), previous_company: "Lyft", years_of_exp: 0, penalties: 0},
    {fName: "Beti", lName: "Pushpa", address:null, contact:null, driver_ctc: null, date_of_joining: new Date("2010-10-10"), previous_company: "Tonga", years_of_exp: 12, penalties: 11000},
    {fName: "Baburao", lName: "Aapte", address:null, contact:null, driver_ctc: null, date_of_joining: new Date("2002-02-28"), previous_company: "Star Taxis", years_of_exp: 20, penalties: 500}
]);


/******** Insert Cars' Status *********/

db.Status_Cars.insertMany([
    {written_off: true, roadworthy: false, awaitingRepair: false, inForService: false, running: false},
    {written_off: false, roadworthy: true, awaitingRepair: false, inForService: false, running: true},
    {written_off: false, roadworthy: true, awaitingRepair: true, inForService: false, running: false},
    {written_off: false, roadworthy: false, awaitingRepair: true, inForService: false, running: false},
    {written_off: false, roadworthy: false, awaitingRepair: true, inForService: true, running: false},
    {written_off: false, roadworthy: false, awaitingRepair: false, inForService: false, running: false}
]);


/******** Insert Shift Data *********/

db.Shift_Data.insertMany([
    {morning_shift: true, evening_shift: false, night_shift: false},
    {morning_shift: false, evening_shift: true, night_shift: false},
    {morning_shift: false, evening_shift: false, night_shift: true}
]);


/******** Insert CTC Data *********/

db.CTC_Data.insertMany([
    {salary:"15000", sal_Date: 02, sal_type: "fixed"},
    {salary:"20000", sal_Date: 02, sal_type: "fixed"},
    {salary:"0.35", sal_Date: 02, sal_type: "percentage"},
    {salary:".50", sal_Date: 02, sal_type: "percentage"},
    {salary:"10000", sal_Date: 02, sal_type: "fixed"},
    {salary:"0.20", sal_Date: 02, sal_type: "percentage"},
    {salary:"22000", sal_Date: 02, sal_type: "fixed"},
    {salary:"0.40", sal_Date: 02, sal_type: "percentage"},
    {salary:"50000", sal_Date: 02, sal_type: "fixed"}
]);


/******** Insert Payment Data *********/

db.Payment_Details.insertMany([
    {amount: 3000, booking_id: null, payment_type:"Cash", last_updated: new Date("2021-10-27")},
    {amount: 1200, booking_id: null, payment_type:"Credit Card", last_updated: new Date("2022-06-08")},
    {amount: 20000, booking_id: null, payment_type:"Debit Card", last_updated: new Date("2020-10-07")},
    {amount: 5600, booking_id: null, payment_type:"Online - Paypal", last_updated: new Date()},
    {amount: 300, booking_id: null, payment_type:"Cash", last_updated: new Date("2022-05-30")},
    {amount: 9000, booking_id: null, payment_type:"Credit Card", last_updated: new Date("2019-03-10")},
    {amount: 2600, booking_id: null, payment_type:"Debit Card", last_updated: new Date("1962-12-25")},
    {amount: 4200, booking_id: null, payment_type:"Cash", last_updated: new Date()}
]);


/******** Insert Revenue Data *********/

db.Revenue.insertMany([
    {paid_amount: 12000, driver_id: null, earned_amount: 18000},
    {paid_amount: 30000, driver_id: null, earned_amount: 50000},
    {paid_amount: 11000, driver_id: null, earned_amount: 19000},
    {paid_amount: 7100, driver_id: null, earned_amount: 12000},
    {paid_amount: 2300, driver_id: null, earned_amount: 4500},
    {paid_amount: 57000, driver_id: null, earned_amount: 90000},
    {paid_amount: 4000, driver_id: null, earned_amount: 7100},
    {paid_amount: 6100, driver_id: null, earned_amount: 8000},
    {paid_amount: 21000, driver_id: null, earned_amount: 32000},
    {paid_amount: 19000, driver_id: null, earned_amount: 28000}
]);


/******** Insert Bookings Data *********/

db.Bookings.insertMany([
    {drop_add: null , travel_date: new Date("2021-10-27"), travel_destination: "UK"},
    {drop_add: null , travel_date: new Date(), travel_destination: "UK"},
    {drop_add: null , travel_date: new Date("2023-12-14"), travel_destination: "USA"},
    {drop_add: null , travel_date: new Date("2023-08-25"), travel_destination: "USA"},
    {drop_add: null , travel_date: new Date(), travel_destination: "India"},
    {drop_add: null , travel_date: new Date("2022-12-26"), travel_destination: "India"},
    {drop_add: null , travel_date: new Date(), travel_destination: "Austrailia"},
    {drop_add: null , travel_date: new Date("2023-01-01"), travel_destination: "UK"}
  ]);


/******** Insert Address Data *********/

db.Address_Details.insertMany([
    {add_line_1: "14 Venables Avenue", add_line_2: "Colne", city:"Lancashire", country:"England", zipCode:",BB8 7DF"},
    {add_line_1: "62 Foxhall Road", add_line_2: "Blackpool", city:"Lancashire", country:"England", zipCode:"FY1 5BW"},
    {add_line_1: "13 Thetford", add_line_2: "Washington", city:"Sunderland", country:"England", zipCode:"NE38 7QT"},
    {add_line_1: "Yoland, Rumbolds Hill", add_line_2: "Midhurst", city:"West Sussex", country:"England", zipCode:"GU29 9DG"},
    {add_line_1: "3 Rutters Lane", add_line_2: "Hazel Grove", city:"Borough of Stockport", country:"England", zipCode:"SK7 5AY"},
    {add_line_1: "Crows Nest, Malting Lane", add_line_2: "Much Hadham", city:"Hertfordshire", country:"England", zipCode:"SG10 6AN"},
    {add_line_1: "15 Heol Preseli", add_line_2: "Fishguard", city:"Rosslare", country:"Ireland", zipCode:"SA65 9JD"},
    {add_line_1: "Fair View, Poor House Hill", add_line_2: "St Gluvias", city:"Cornwall", country:"England", zipCode:"TR10 9AZ"},
    {add_line_1:"212 Main St", add_line_2:"Hokah", city:"Minnesota", country:"USA", zipCode:"55941"},
    {add_line_1:"530 Jackson River Rd", add_line_2:"Hot Springs", city:"Virginia", country:"USA", zipCode:"24445"},
    {add_line_1:"817, Kundwalan", add_line_2:" Ajmeri Gate", city:"Delhi", country:"India", zipCode:"10006"},
    {add_line_1:" 12/2, Steel Made Ind State", add_line_2:"Marol, Andheri", city:"Mumbai", country:"India", zipCode:"400069"},
    {add_line_1:" A/101, Satyam Shopping Centre", add_line_2:"M.g.road, Ghatkopar (east)", city:"Mumbai", country:"India", zipCode:"400077"},
    {add_line_1:"22 Boorie Road", add_line_2: null, city:"Kingaroy Dc", country:"Australia", zipCode:"4610"},
    {add_line_1:"69 Ridge Road", add_line_2: null, city:"Burgowan", country:"Australia", zipCode:"4659"},
    {add_line_1:"70 Prince Street", add_line_2: null, city:"Trenayr", country:"Australia", zipCode:"2460"}
]);


/******** Insert Operators Data *********/

db.Operator_Details.insertMany([
  {f_name: "Penelope ", l_name: "Thomas", location: "Utah", shift: null, operator_ctc: null, last_updated: new Date("2019-04-13")},
  {f_name: "Sofia ", l_name: "Kennedy", location: "Nebraska", shift: null, operator_ctc: null, last_updated: new Date("2019-09-29")},
  {f_name: "Beatrix ", l_name: "Kemp", location: "Tasmania", shift: null, operator_ctc: null, last_updated: new Date("2019-10-06")},
  {f_name: "Jessica ", l_name: "Dale", location: "South Australia", shift: null, operator_ctc: null, last_updated: new Date("2020-04-05")},
  {f_name: "Annalise ", l_name: "Sawyer", location: "London", shift: null, operator_ctc: null, last_updated: new Date("2020-12-20")},
  {f_name: "Leonard ", l_name: "Lynch", location: "Southampton", shift: null, operator_ctc: null, last_updated: new Date("2021-01-10")},
  {f_name: "Emmy ", l_name: "Jefferson", location: "Delhi", shift: null, operator_ctc: null, last_updated: new Date("2021-09-22")},
  {f_name: "Conrad ", l_name: "Abbott", location: "Mumbai", shift: null, operator_ctc: null, last_updated: new Date("2022-12-03")}
]);


/******** Insert Contact Data *********/

db.Contact_Details.insertMany([
    {mobile_num: "+44 7700 900375", email_id: "jacey77@gmail.com"},
    {mobile_num: "+44 114 496 0962", email_id: "armani.lebsack39@gmail"},
    {mobile_num: "+44 113 496 015", email_id: "alessandro.quigley39@hotmail.com"},
    {mobile_num: "+44 118 496 0621", email_id: "ronaldo57@yahoo.com"},
    {mobile_num: "+44 113 496 0548", email_id: "niko60@yahoo.com"},
    {mobile_num: "+44 121 496 0700", email_id: "novella98@hotmail.com"},
    {mobile_num: "+44 151 496 0673", email_id: "antonina_hegmann@gmail.com"},
    {mobile_num: "+44 161 496 0270", email_id: "marley_hilpert42@yahoo.com"},
    {mobile_num: "+44 115 496 0146", email_id: "elroy_hoeger@gmail.com"},
    {mobile_num: "+44 131 496 07332", email_id: "benton19@hotmail.com"},
    {mobile_num: "+44 20 7946 035", email_id: "owen22@hotmail.com"},
    {mobile_num: "+44 113 496 0958", email_id: "tiana.paucek86@hotmail.com"},
    {mobile_num: "+44 20 7946 0314", email_id: "verlie56@yahoo.com"},
    {mobile_num: "+44 121 496 0775", email_id: "daniela_harvey@yahoo.com"},
    {mobile_num: "+44 116 496 0789", email_id: "gregg.bednar60@yahoo.com"},
    {mobile_num: "+44 20 7946 066", email_id: "antwon_maggio35@yahoo.com"}
]);


/******** Insert Cars Data *********/

db.Car_Details.insertMany([
  {reg_no: "L-826w", reg_date: new Date("2010-01-10"), model: "Toyota Prius", mfg_year: "2013", status_car_id: null, last_mot_test: new Date("2022-02-25"), special_features: "Electric", owner_instructions: "Clean Regularly", owner_id: null, last_updated: new Date("2020-11-05")},
  {reg_no: "E-1232", reg_date: new Date("2011-04-17"), model: "Skoda Octavia", mfg_year: "2008", status_car_id: null, last_mot_test: new Date("2022-03-10"), special_features: "Semi Luxury", owner_instructions: "Tire Less than 2000KM", owner_id: null, last_updated: new Date("2021-02-18")},
  {reg_no: "F-505f", reg_date: new Date("2011-11-13"), model: "Citroen Berlingo", mfg_year: "2007", status_car_id: null, last_mot_test: new Date("2022-04-08"), special_features: "High Seating Capacity", owner_instructions: "Check Music Systems", owner_id: null, last_updated: new Date("2021-04-15")},
  {reg_no: "H-317p", reg_date: new Date("2012-04-06"), model: "Mercedes E-Class", mfg_year: "2009", status_car_id: null, last_mot_test: new Date("2022-04-19"), special_features: "Full Luxury", owner_instructions: "Give to maintanance", owner_id: null, last_updated: new Date("2021-06-22")},
  {reg_no: "D-456h", reg_date: new Date("2012-08-23"), model: "Volkswagen Passat", mfg_year: "2006", status_car_id: null, last_mot_test: new Date("2022-04-27"), special_features: "Cheap", owner_instructions: "Refill fluids", owner_id: null, last_updated: new Date("2021-07-04")},
  {reg_no: "H-825R", reg_date: new Date("2012-08-27"), model: "Ford Galaxy", mfg_year: "2003", status_car_id: null, last_mot_test: new Date("2022-05-03"), special_features: "High luggage capacity", owner_instructions: "Car needs interior detailing", owner_id: null, last_updated: new Date("2022-03-19")},
  {reg_no: "O-933Y", reg_date: new Date("2014-09-01"), model: "Skoda Superb", mfg_year: "2005", status_car_id: null, last_mot_test: new Date("2022-09-13"), special_features: "Semi Luxury", owner_instructions: "Check car vitals regularly", owner_id: null, last_updated: new Date("2022-06-01")},
  {reg_no: "P-520p", reg_date: new Date("2015-12-11"), model: "Volkswagen Transporter Shuttle", mfg_year: "2003", status_car_id: null, last_mot_test: new Date("2022-11-21"), special_features: "High luggage capacity", owner_instructions: "Take good over all care", owner_id: null, last_updated: new Date("2022-07-30")}
]);


/******** Insert Owners Data *********/

db.Owner_Details.insertMany([
    {f_name: "Zain", l_name: "Reid", address: null, contact: null},
    {f_name: "Nabil", l_name: "Kline", address: null, contact: null},
    {f_name: "Ann", l_name: "Copeland", address: null, contact: null},
    {f_name: "Gemma", l_name: "Allen", address: null, contact: null},
    {f_name: "Lewys", l_name: "Huber", address: null, contact: null},
    {f_name: "Hope", l_name: "Blair", address: null, contact: null},
    {f_name: "Bethany", l_name: "Lewis", address: null, contact: null},
    {f_name: "Hamish", l_name: "Hancock", address: null, contact: null}
]);


/******** Insert Client Data *********/

db.Client_Details.insertMany([
    {f_name: "Oskar", l_name: "Kelley", regular_client: true, frequency: "bi-monthly" , address: null, contact: null, last_updated: new Date("2022-01-25"), client_type: "coorporate"},
    {f_name: "Poppie", l_name: "Poppie ", regular_client: false, frequency: null , address: null, contact: null, last_updated: new Date("2022-05-15"), client_type: "private"},
    {f_name: "Oisin", l_name: "Marquez", regular_client: false, frequency: null , address: null, contact: null, last_updated: new Date("2022-05-17"), client_type: "coorporate"},
    {f_name: "Hope", l_name: "Doherty", regular_client: false, frequency: null , address: null, contact: null, last_updated: new Date("2022-06-16"), client_type: "private"},
    {f_name: "Alissa", l_name: "Monroe", regular_client: true, frequency: "yearly" , address: null, contact: null, last_updated: new Date("2022-07-25"), client_type: "private"},
    {f_name: "Haaris", l_name: "Fox", regular_client: false, frequency: null , address: null, contact: null, last_updated: new Date("2022-08-24"), client_type: "coorporate"},
    {f_name: "Cecily", l_name: "Pierce", regular_client: true, frequency: "monthly" , address: null, contact: null, last_updated: new Date("2022-11-10"), client_type: "private"},
    {f_name: "Jermaine", l_name: "Branch", regular_client: true, frequency: "weekly" , address: null, contact: null, last_updated: new Date("2022-11-21"), client_type: "private"},
    {f_name: "Sonia ", l_name: "Connor", regular_client: true, frequency: "yearly" , address: null, contact: null, last_updated: new Date("2017-08-30"), client_type: "private"},
    {f_name: "Kirsten ", l_name: "Cunningham", regular_client: false, frequency: null , address: null, contact: null, last_updated: new Date("2019-01-15"), client_type: "coorporate"},
    {f_name: "Roseanna ", l_name: "Ward", regular_client: true, frequency: "monthly" , address: null, contact: null, last_updated: new Date("2019-06-15"), client_type: "coorporate"},
    {f_name: "Liliana ", l_name: "Tate", regular_client: false, frequency: null , address: null, contact: null, last_updated: new Date("2020-07-17"), client_type: "coorporate"},
    {f_name: "Annabella ", l_name: "Monroe", regular_client: false, frequency: null , address: null, contact: null, last_updated: new Date("2020-12-13"), client_type: "private"},
    {f_name: "Patrick ", l_name: "Villanueva", regular_client: true, frequency: "weekly" , address: null, contact: null, last_updated: new Date("2021-03-09"), client_type: "private"},
    {f_name: "Fiona ", l_name: "Perry", regular_client: true, frequency: "monthly" , address: null, contact: null, last_updated: new Date("2021-04-17"), client_type: "coorporate"},
    {f_name: "Elizabeth ", l_name: "Perez", regular_client: true, frequency: "bi-monthly" , address: null, contact: null, last_updated: new Date("2021-05-27"), client_type: "private"},
    {f_name: "Sienna ", l_name: "Haley", regular_client: false, frequency: null , address: null, contact: null, last_updated: new Date("2018-02-05"), client_type: "coorporate"}
]);



/******** Update Driver Data to establish Relationship using Foreign Key *********/

db.Driver_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04515a")}, {$set: {address: ObjectId("639a47766cc46fc0ef04518d"), contact: ObjectId("639a47766cc46fc0ef0451a5"), driver_ctc: ObjectId("639a47766cc46fc0ef04516a")}}
);
db.Driver_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04515b")}, {$set: {address: ObjectId("639a47766cc46fc0ef04518e"), contact: ObjectId("639a47766cc46fc0ef0451a6"), driver_ctc: ObjectId("639a47766cc46fc0ef04516b")}}
);
db.Driver_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04515c")}, {$set: {address: ObjectId("639a47766cc46fc0ef04518f"), contact: ObjectId("639a47766cc46fc0ef0451a7"), driver_ctc: ObjectId("639a47766cc46fc0ef04516c")}}
);
db.Driver_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04515d")}, {$set: {address: ObjectId("639a47766cc46fc0ef045190"), contact: ObjectId("639a47766cc46fc0ef0451a8"), driver_ctc: ObjectId("639a47766cc46fc0ef04516d")}}
);
db.Driver_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04515e")}, {$set: {address: ObjectId("639a47766cc46fc0ef045191"), contact: ObjectId("639a47766cc46fc0ef0451a9"), driver_ctc: ObjectId("639a47766cc46fc0ef04516e")}}
);
db.Driver_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04515f")}, {$set: {address: ObjectId("639a47766cc46fc0ef045192"), contact: ObjectId("639a47766cc46fc0ef0451aa"), driver_ctc: ObjectId("639a47766cc46fc0ef04516f")}}
);
db.Driver_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef045160")}, {$set: {address: ObjectId("639a47766cc46fc0ef045193"), contact: ObjectId("639a47766cc46fc0ef0451ab"), driver_ctc: ObjectId("639a47766cc46fc0ef04516b")}}
);


/******** Update Revenue Data to establish Relationship using Foreign Key *********/

db.Revenue.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04517b")}, {$set: {driver_id: ObjectId("639a47766cc46fc0ef04515a")}}
);
db.Revenue.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04517c")}, {$set: {driver_id: ObjectId("639a47766cc46fc0ef04515b")}}
);
db.Revenue.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04517d")}, {$set: {driver_id: ObjectId("639a47766cc46fc0ef04515c")}}
);
db.Revenue.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04517e")}, {$set: {driver_id: ObjectId("639a47766cc46fc0ef04515d")}}
);
db.Revenue.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04517f")}, {$set: {driver_id: ObjectId("639a47766cc46fc0ef04515e")}}
);
db.Revenue.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef045180")}, {$set: {driver_id: ObjectId("639a47766cc46fc0ef04515f")}}
);
db.Revenue.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef045181")}, {$set: {driver_id: ObjectId("639a47766cc46fc0ef045160")}}
);
db.Revenue.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef045182")}, {$set: {driver_id: ObjectId("639a47766cc46fc0ef04515f")}}
);


/******** Update Booking Data to establish Relationship using Foreign Key *********/

db.Bookings.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef045185")}, {$set: {drop_add: ObjectId("639a47766cc46fc0ef04518d")}}
);
db.Bookings.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef045186")}, {$set: {drop_add: ObjectId("639a47766cc46fc0ef04518e")}}
);
db.Bookings.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef045187")}, {$set: {drop_add: ObjectId("639a47766cc46fc0ef04518f")}}
);
db.Bookings.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef045188")}, {$set: {drop_add: ObjectId("639a47766cc46fc0ef045190")}}
);
db.Bookings.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef045189")}, {$set: {drop_add: ObjectId("639a47766cc46fc0ef045191")}}
);
db.Bookings.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04518a")}, {$set: {drop_add: ObjectId("639a47766cc46fc0ef045192")}}
);
db.Bookings.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04518b")}, {$set: {drop_add: ObjectId("639a47766cc46fc0ef045193")}}
);
db.Bookings.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04518c")}, {$set: {drop_add: ObjectId("639a47766cc46fc0ef045194")}}
);


/******** Update Payment Data to establish Relationship using Foreign Key *********/

db.Payment_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef045173")}, {$set: {booking_id: ObjectId("639a47766cc46fc0ef04518c")}}
);
db.Payment_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef045174")}, {$set: {booking_id: ObjectId("639a47766cc46fc0ef04518b")}}
);
db.Payment_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef045175")}, {$set: {booking_id: ObjectId("639a47766cc46fc0ef04518a")}}
);
db.Payment_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef045176")}, {$set: {booking_id: ObjectId("639a47766cc46fc0ef045189")}}
);
db.Payment_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef045177")}, {$set: {booking_id: ObjectId("639a47766cc46fc0ef045188")}}
);
db.Payment_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef045178")}, {$set: {booking_id: ObjectId("639a47766cc46fc0ef045187")}}
);
db.Payment_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef045179")}, {$set: {booking_id: ObjectId("639a47766cc46fc0ef045186")}}
);
db.Payment_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04517a")}, {$set: {booking_id: ObjectId("639a47766cc46fc0ef045185")}}
);


/******** Update Operator_Details Data to establish Relationship using Foreign Key *********/

db.Operator_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04519d")}, {$set:{shift: ObjectId("639a47766cc46fc0ef045167"), operator_ctc: ObjectId("639a47766cc46fc0ef04516a")}}
 );
 db.Operator_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04519e")}, {$set:{shift: ObjectId("639a47766cc46fc0ef045168"), operator_ctc: ObjectId("639a47766cc46fc0ef04516b")}}
 );
 db.Operator_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef04519f")}, {$set:{shift: ObjectId("639a47766cc46fc0ef045167"), operator_ctc: ObjectId("639a47766cc46fc0ef04516c")}}
 );
 db.Operator_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef0451a0")}, {$set:{shift: ObjectId("639a47766cc46fc0ef045167"), operator_ctc: ObjectId("639a47766cc46fc0ef04516d")}}
 );
 db.Operator_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef0451a1")}, {$set:{shift: ObjectId("639a47766cc46fc0ef045168"), operator_ctc: ObjectId("639a47766cc46fc0ef04516e")}}
 );
 db.Operator_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef0451a2")}, {$set:{shift: ObjectId("639a47766cc46fc0ef045169"), operator_ctc: ObjectId("639a47766cc46fc0ef04516f")}}
 );
 db.Operator_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef0451a3")}, {$set:{shift: ObjectId("639a47766cc46fc0ef045169"), operator_ctc: ObjectId("639a47766cc46fc0ef045170")}}
 );
 db.Operator_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef0451a4")}, {$set:{shift: ObjectId("639a47766cc46fc0ef045167"), operator_ctc: ObjectId("639a47766cc46fc0ef045171")}}
 );


 /******** Update Car_Details Data to establish Relationship using Foreign Key *********/

 db.Car_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef0451b5")}, {$set:{status_car_id: ObjectId("639a47766cc46fc0ef045161"), owner_id: ObjectId("639a47776cc46fc0ef0451bd")}}
 );
 db.Car_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef0451b6")}, {$set:{status_car_id: ObjectId("639a47766cc46fc0ef045162"), owner_id: ObjectId("639a47776cc46fc0ef0451be")}}
 );
 db.Car_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef0451b7")}, {$set:{status_car_id: ObjectId("639a47766cc46fc0ef045163"), owner_id: ObjectId("639a47776cc46fc0ef0451bf")}}
 );
 db.Car_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef0451b8")}, {$set:{status_car_id: ObjectId("639a47766cc46fc0ef045164"), owner_id: ObjectId("639a47776cc46fc0ef0451c1")}}
 );
 db.Car_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef0451b9")}, {$set:{status_car_id: ObjectId("639a47766cc46fc0ef045165"), owner_id: ObjectId("639a47776cc46fc0ef0451c0")}}
 );
 db.Car_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef0451ba")}, {$set:{status_car_id: ObjectId("639a47766cc46fc0ef045166"), owner_id: ObjectId("639a47776cc46fc0ef0451c2")}}
 );
 db.Car_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef0451bb")}, {$set:{status_car_id: ObjectId("639a47766cc46fc0ef045164"), owner_id: ObjectId("639a47776cc46fc0ef0451c3")}}
 );
 db.Car_Details.updateMany(
    {_id : ObjectId("639a47766cc46fc0ef0451bc")}, {$set:{status_car_id: ObjectId("639a47766cc46fc0ef045162"), owner_id: ObjectId("639a47776cc46fc0ef0451c4")}}
 );


/******** Update Owner_Details Data to establish Relationship using Foreign Key *********/

db.Owner_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451bd")}, {$set:{address: ObjectId("639a47766cc46fc0ef04518d"), contact: ObjectId("639a47766cc46fc0ef0451a5")}}
 );
 db.Owner_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451be")}, {$set:{address: ObjectId("639a47766cc46fc0ef04518e"), contact: ObjectId("639a47766cc46fc0ef0451a6")}}
 );
 db.Owner_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451bf")}, {$set:{address: ObjectId("639a47766cc46fc0ef04518f"), contact: ObjectId("639a47766cc46fc0ef0451a7")}}
 );
 db.Owner_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451c0")}, {$set:{address: ObjectId("639a47766cc46fc0ef045190"), contact: ObjectId("639a47766cc46fc0ef0451a8")}}
 );
 db.Owner_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451c1")}, {$set:{address: ObjectId("639a47766cc46fc0ef045191"), contact: ObjectId("639a47766cc46fc0ef0451a9")}}
 );
 db.Owner_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451c2")}, {$set:{address: ObjectId("639a47766cc46fc0ef045192"), contact: ObjectId("639a47766cc46fc0ef0451aa")}}
 );
 db.Owner_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451c3")}, {$set:{address: ObjectId("639a47766cc46fc0ef045194"), contact: ObjectId("639a47766cc46fc0ef0451ab")}}
 );
 db.Owner_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451c4")}, {$set:{address: ObjectId("639a47766cc46fc0ef045193"), contact: ObjectId("639a47766cc46fc0ef0451ac")}}
 );


/******** Update Owner_Details Data to establish Relationship using Foreign Key *********/

 db.Client_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451c5")}, {$set:{address: ObjectId("639a47766cc46fc0ef04518d"), contact: ObjectId("639a47766cc46fc0ef0451a5")}}
 );
 db.Client_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451c6")}, {$set:{address: ObjectId("639a47766cc46fc0ef04518e"), contact: ObjectId("639a47766cc46fc0ef0451a5")}}
 );
 db.Client_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451c7")}, {$set:{address: ObjectId("639a47766cc46fc0ef04518f"), contact: ObjectId("639a47766cc46fc0ef0451a7")}}
 );
 db.Client_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451c8")}, {$set:{address: ObjectId("639a47766cc46fc0ef045190"), contact: ObjectId("639a47766cc46fc0ef0451a6")}}
 );
 db.Client_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451c9")}, {$set:{address: ObjectId("639a47766cc46fc0ef04518f"), contact: ObjectId("639a47766cc46fc0ef0451a8")}}
 );
 db.Client_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451ca")}, {$set:{address: ObjectId("639a47766cc46fc0ef045191"), contact: ObjectId("639a47766cc46fc0ef0451a8")}}
 );
 db.Client_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451cb")}, {$set:{address: ObjectId("639a47766cc46fc0ef045192"), contact: ObjectId("639a47766cc46fc0ef0451a9")}}
 );
 db.Client_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451cc")}, {$set:{address: ObjectId("639a47766cc46fc0ef045193"), contact: ObjectId("639a47766cc46fc0ef0451aa")}}
 );
 db.Client_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451cd")}, {$set:{address: ObjectId("639a47766cc46fc0ef045194"), contact: ObjectId("639a47766cc46fc0ef0451ab")}}
 );
 db.Client_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451ce")}, {$set:{address: ObjectId("639a47766cc46fc0ef045195"), contact: ObjectId("639a47766cc46fc0ef0451ac")}}
 );
 db.Client_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451cf")}, {$set:{address: ObjectId("639a47766cc46fc0ef045196"), contact: ObjectId("639a47766cc46fc0ef0451ac")}}
 );
 db.Client_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451d0")}, {$set:{address: ObjectId("639a47766cc46fc0ef045197"), contact: ObjectId("639a47766cc46fc0ef0451ad")}}
 );
 db.Client_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451d1")}, {$set:{address: ObjectId("639a47766cc46fc0ef045198"), contact: ObjectId("639a47766cc46fc0ef0451ae")}}
 );
 db.Client_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451d2")}, {$set:{address: ObjectId("639a47766cc46fc0ef045199"), contact: ObjectId("639a47766cc46fc0ef0451af")}}
 );
 db.Client_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451d3")}, {$set:{address: ObjectId("639a47766cc46fc0ef045197"), contact: ObjectId("639a47766cc46fc0ef0451b0")}}
 );
 db.Client_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451d4")}, {$set:{address: ObjectId("639a47766cc46fc0ef045196"), contact: ObjectId("639a47766cc46fc0ef0451b1")}}
 );
 db.Client_Details.updateMany(
    {_id : ObjectId("639a47776cc46fc0ef0451d5")}, {$set:{address: ObjectId("639a47766cc46fc0ef04519b"), contact: ObjectId("639a47766cc46fc0ef0451b2")}}
 );