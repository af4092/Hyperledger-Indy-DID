// patient-chaincode.js

async function moveMedicalRecord(ctx, patientId, newHospitalId) {
    // Retrieve the medical record from the current hospital
    const medicalRecord = await ctx.stub.invokeChaincode('hospital-chaincode1', ['getMedicalRecord', patientId]);
  
    // Store the medical record in the new hospital
    await ctx.stub.invokeChaincode('hospital-chaincode2', ['addMedicalRecord', newHospitalId, medicalRecord]);
    console.log('Medical record moved to new hospital:', medicalRecord);
  }
  
  module.exports = {
    moveMedicalRecord,
  };
  