import fetch from 'node-fetch';

import {
    getAllPlayerDataFromFile,
	getPlayerDataFromFile
    // getPatientFromFile,
    // getPatientAddressesFromFile,
    // getPatientMedicalStatusFromFile,
    // getPatientMedicalStatusesFromFile,
    // getPatientFinanceProgramsFromFile,
} from './data/stubFunctions';

export const getPlayerList = (playerId) => {

	console.log("playerId: "+playerId);
	if (playerId == null) {
		console.log("playerId is null; returning player with id '1'");
		return getPlayerDataFromFile('1');
	}
	return getPlayerDataFromFile(playerId);
}

// export const getMatchIncidentList = () => {
// 	var url = 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&mrn={numberRange|0,10}&paymentAmount={numberRange|1000,5000}';

// 	return fetch(url)
//     	.then( (res) => {
//     		console.log("getMatchIncidentList");
//         	return res.json();
//     	})
//     	.then( (data) => {a
//         	console.log(data);
//         	return Promise.resolve(data);
//     	});
// }