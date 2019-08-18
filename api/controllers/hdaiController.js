var mongoose = require('mongoose'),
  Patients = mongoose.model('Patients');

  mongoose.set('debug', true);

exports.list_all_patients = function(req, res) {
  Patients.find({}, function(err, patients) {
    if (err)
      res.send(err);
     // console.log("list_all_patients: " + patients);
    res.json(patients);
  });
};

exports.find_a_patient = function(req, res) {
  Patients.findById(req.params.PatientId, function(err, patients) {
    if (err)
      res.send(err); 
     // console.log("find_a_patient: " + req.params.PatientId);
    res.json(patients);
  });
};  

exports.find_meds_for_a_patient = function(req, res) {
  Patients.findById(req.params.PatientId, 'Medications', function(err, patients) {
    if (err)
      res.send(err);
      //console.log("find_meds_for_a_patient " + req.params.PatientId);
    res.json(patients); 
  }); 
}; 

exports.update_temperature_and_pulse_of_patient = function(req, res) { //For temperatue + Pulse
  Patients.findOneAndUpdate({_id: req.params.PatientId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
      console.log("update_temperature_and_pulse_of_patient " + req.body);
    res.json(task);
  });
};