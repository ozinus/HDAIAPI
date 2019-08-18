var mongoose =  require ('mongoose');
var Schema = mongoose.Schema;

//Patient schema for the collection
var PatientSchema = new Schema( 
	{
			lastName : String, 
			firstName : String,
			town : String,
			temperature: Number,
			pulse: Number,
			
			Medications : {
				medname: String, 
				dose: String,
				startDate: String,
				stopDate : String
			},
			
	}, 
	{_id: true} //Setting id to true (just for clarity  - it is the default)
); 

module.exports = mongoose.model('Patients', PatientSchema,'Patients');