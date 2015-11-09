import fetch from 'node-fetch';

import {
    getAllPlayerDataFromFile,
	getPlayerDataFromFile,
	getTeamPlayerDataFromFile,
	getPlayerMatchIncidentDataFromFile,
	getMatchIncidentDataFromFile,
	getMatchIncidentCommentDataFromFile
} from './data/stubFunctions';

export const getPlayerList = (playerId) => {
	console.log("getPlayerList playerId: "+playerId);
	return getPlayerDataFromFile(playerId);
}

export const getPlayer = (playerId) => {
	console.log("getPlayerList playerId: "+playerId);
	return getPlayerDataFromFile(playerId);
}

export const getTeamPlayerList = (teamId) => {
	console.log("getTeamPlayerList teamId: "+teamId);
	return getTeamPlayerDataFromFile(teamId);
}

export const getPlayerMatchIncidentList = (playerId) => {
	console.log("getPlayerMatchIncidentList playerId: "+playerId);
	return getPlayerMatchIncidentDataFromFile(playerId);
}

export const getMatchIncidentList = (matchId) => {
	console.log("getMatchIncidentList matchId: "+matchId);
	return getMatchIncidentDataFromFile(matchId);
}

export const getMatchIncidentCommentList = (matchId, incidentId) => {
	console.log("getMatchIncidentCommentList matchId: "+matchId+" | incidentId: "+incidentId);
	return getMatchIncidentCommentDataFromFile(matchId, incidentId);
}