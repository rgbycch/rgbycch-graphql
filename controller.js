import fetch from 'node-fetch';

export const getPlayerList = () => {
	var url = 'http://www.filltext.com/?rows=10&playerId={numberRange|0,13}&firstName={firstName}&lastName={lastName}&nickName={firstName}&dateOfBirth={date}&footDominance={numberRange|0,4}&handDominance={numberRange|0,4}&position={numberRange|0,4}&preferredPosition={stringArray|length,stringLength}&perferredPosition={numberRange|0,4}';

	return fetch(url)
    	.then( (res) => {
    		console.log("getPlayerList");
        	return res.json();
    	})
    	.then( (data) => {
        	console.log(data);
        	return Promise.resolve(data);
    	});

}

// export const getMatchIncidentList = () => {
// 	var url = 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&mrn={numberRange|0,10}&paymentAmount={numberRange|1000,5000}';

// 	return fetch(url)
//     	.then( (res) => {
//     		console.log("getMatchIncidentList");
//         	return res.json();
//     	})
//     	.then( (data) => {
//         	console.log(data);
//         	return Promise.resolve(data);
//     	});
// }