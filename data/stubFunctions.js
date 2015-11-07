 /**
 * Created by John D. Gaffney on 11/05/15.
 */
let playerData = require('./player.json');
let matchData = require('./match.json');
let scoreData = require('./score.json')
let tryData = require('./try.json');

 export const getAllPlayerDataFromFile = () => playerData;
 export const getPlayerDataFromFile = (playerId)=> playerData.filter(function(player) {
  return player.playerId === playerId;
 })

// export const getPatientsFromFile = (limit)=> limit == null || limit > patientDemographicData.length ? patientDemographicData : patientDemographicData.slice(0, limit)

// export const getPatientAddressFromFile = (patientId)=> patientAddressData.filter((address) => address.patientId == patientId)[0]

// export const getPatientAddressesFromFile = (patientIds)=> patientAddressData.filter((address) => patientIds.indexOf(address.patientId) != -1)

// export const getPatientMedicalStatusFromFile = (patientId)=> patientMedicalStatusesData.filter((medStatus)=> medStatus.patientId == patientId)[0]

// export const getPatientMedicalStatusesFromFile = (patientIds)=> patientMedicalStatusesData.filter((medStatus)=> patientIds.indexOf(medStatus.patientId) != -1 )

// export const getPatientFinanceProgramFromFile = (patientId)=> financePrograms.filter((financeProgram)=> financeProgram.patientId==patientId )

// export const getPatientFinanceProgramsFromFile = (patientIds)=> financePrograms.filter((finances)=> patientIds.indexOf(finances.patientId) != -1 )
