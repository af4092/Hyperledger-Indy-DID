// hospital-chaincode2.js

async function addMedicalRecord(ctx, patientId, medicalRecord) {
    // Store the medical record for the patient
    await ctx.stub.putState(patientId, Buffer.from(JSON.stringify(medicalRecord)));
    console.log('Medical record added:', medicalRecord);
  }
  
  async function getMedicalRecord(ctx, patientId) {
    // Retrieve the medical record for the patient
    const medicalRecordBytes = await ctx.stub.getState(patientId);
    if (!medicalRecordBytes || medicalRecordBytes.length === 0) {
      throw new Error(`Medical record for patient ${patientId} does not exist`);
    }
    const medicalRecord = JSON.parse(medicalRecordBytes.toString());
    console.log('Medical record retrieved:', medicalRecord);
    return medicalRecord;
  }
  
  module.exports = {
    addMedicalRecord,
    getMedicalRecord,
  };
  