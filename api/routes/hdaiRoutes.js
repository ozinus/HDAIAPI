
module.exports = function(app) {
  var hdaiList = require('../controllers/hdaiController');

  // patient Routes
  app.route('/Patients') 
     .get(hdaiList.list_all_patients); // patient list
  
   app.route('/Patients/:PatientId') //Find patient details for the given id - route for get + PUT
      .get(hdaiList.find_a_patient)
      .patch(hdaiList.update_temperature_and_pulse_of_patient); //The fields which are not allowed to be modified should be read only

   app.route('/Patients/Medications/:PatientId') //return medicaions for the given patient
      .get(hdaiList.find_meds_for_a_patient);
    
};