 /**
 * Created by John D. Gaffney on 11/05/15.
 */
let playerData = require('./player.json');
let matchData = require('./match.json');
let scoreData = require('./score.json')
let tryData = require('./try.json');

export const getAllPlayerDataFromFile = () => playerData;
export const getPlayerDataFromFile = (playerId)=> playerData.filter(function(player) {
  console.log("getPlayerDataFromFile - { enquiryPlayerId: "+playerId+", filterPlayerId: "+player.playerId+"} | match? "+player.playerId == playerId);
  return player.playerId == playerId;
})[0]

export const getTeamPlayerDataFromFile = (teamId) => playerData.filter(function(player) {
     console.log("getTeamPlayerDataFromFile - { enquiryTeamId: "+teamId+", filterPlayerTeamId: "+player.teamId+"} | match? "+player.teamId == teamId);
  return player.teamId == teamId;
})

export const getPlayerMatchIncidentDataFromFile = (playerId) => matchData.filter(function(incident) {
  console.log("getPlayerMatchIncidentDataFromFile "+playerId);
  return incident.playerId === playerId;
 })

 export const getMatchIncidentDataFromFile = (matchId) => matchData.filter(function(incident) {
     console.log("getMatchIncidentDataFromFile - { enquiryMatchId: "+matchId+", filterIncidentMatchId: "+incident.matchId+", filterIncidentId: "+incident.incidentId+"} | match? "+(incident.matchId == matchId));
     return incident.matchId == matchId;
 })

// export const getPatientsFromFile = (limit)=> limit == null || limit > patientDemographicData.length ? patientDemographicData : patientDemographicData.slice(0, limit)

// export const getPatientAddressFromFile = (patientId)=> patientAddressData.filter((address) => address.patientId == patientId)[0]

// export const getPatientAddressesFromFile = (patientIds)=> patientAddressData.filter((address) => patientIds.indexOf(address.patientId) != -1)

// export const getPatientMedicalStatusFromFile = (patientId)=> patientMedicalStatusesData.filter((medStatus)=> medStatus.patientId == patientId)[0]

// export const getPatientMedicalStatusesFromFile = (patientIds)=> patientMedicalStatusesData.filter((medStatus)=> patientIds.indexOf(medStatus.patientId) != -1 )

// export const getPatientFinanceProgramFromFile = (patientId)=> financePrograms.filter((financeProgram)=> financeProgram.patientId==patientId )

// export const getPatientFinanceProgramsFromFile = (patientIds)=> financePrograms.filter((finances)=> patientIds.indexOf(finances.patientId) != -1 )
