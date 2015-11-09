 /**
 * Created by John D. Gaffney on 11/05/15.
 */
let playerData = require('./player.json');
let matchData = require('./match.json');
let commentData = require('./matchcomment.json');
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

export const getMatchIncidentCommentDataFromFile = (matchId, incidentId) => commentData.filter(function(comment) {
    console.log("getMatchIncidentCommentDataFromFile - { enquiryMatchId/IncidentId: "+matchId+"/"+incidentId+", filterIncidentMatchId: "+comment.matchId+"/"+comment.incidentId+", filterIncidentId: "+comment.commentId+"} | match? "+(comment.matchId == matchId && comment.incidentId == incidentId)+" comment: "+comment.comment);
    return (comment.matchId == matchId && comment.incidentId == incidentId);
})
