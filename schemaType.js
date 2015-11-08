import {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLList,
	GraphQLString,
	GraphQLEnumType
} from 'graphql';

import { getPlayer } from './controller';


export const PlayerType = new GraphQLObjectType({
	name: 'player',
	description: 'Describe a player',
	fields: () => ({
		playerId: {
			type: GraphQLString,
			description: 'Player ID number'
		},
		teamId: {
			type: GraphQLString,
			description: 'Team ID number'
		},
		firstName: {
			type: GraphQLString,
			description: 'Player first name'
		},
		lastName: {
			type: GraphQLString,
			description: 'Player last name'
		},
		nickName: {
			type: GraphQLString,
			description: 'Player nick name'
		},
		dateOfBirth: {
			type: GraphQLString,
			description: 'Player DOB'
		},
		footDominance: {
			//type: DominanceEnum,
			type: GraphQLString,
			description: 'Player foot dominance [left, right, either, neither]'
		},
		handDominance: {
			//type: DominanceEnum,
			type: GraphQLString,
			description: 'Player hand dominance [left, right, either, neither]'
		},
		position: {
			// ADD PLAYER POSITION ENUM HERE (OR LIST OF)
			type: GraphQLList,
			description: 'Player Position List'
		},
		preferredPosition: {
			// ADD PLAYER POSITION ENUM HERE
			type: GraphQLInt,
			description: 'Person age'
		}
	})
});

export const MatchIncidentType = new GraphQLObjectType({
	name: 'Match Incident',
	description: 'Describe a match incident',
	fields: () => ({
		matchId: {
			type: GraphQLString,
			description: 'Incident match ID'
		},
		incidentId: {
			type: GraphQLString,
			description: 'Incident ID'
		},
		incidentType: {
			type: GraphQLString,
			description: 'Incident type'
		},
		playerId: {
			type: GraphQLString,
			description: 'Incident player ID',
		},
		player: {
			type: PlayerType,
			description: 'Incident player',
			resolve: (matchIncidentType) => getPlayer(matchIncidentType.playerId)
		},
		incidentTime: {
			type: GraphQLString,
			description: 'Incident time'
		}
	})
});

export const MatchIncidentTypeEnum = new GraphQLEnumType({
  name: 'Match Incident Type Enumeration',
  values: {
  	// REPLACE WITH ACTUAL VALUES HERE
    RED: { value: 0 },
    GREEN: { value: 1 },
    BLUE: { value: 2 }
  }
});

export const DominanceEnum = new GraphQLEnumType({
  name: 'Foot/Hand Dominance Enumeration',
  values: {
    LEFT: { value: 0 },
    RIGHT: { value: 1 },
    EITHER: { value: 2 },
    NEITHER: { value: 3 }
  }
});

export const PlayerPositionEnum = new GraphQLEnumType({
  name: 'Foot/Hand Dominance Enumeration',
  values: {
  	// REPLACE WITH ACTUAL POSITIONS
    LEFT: { value: 0 },
    RIGHT: { value: 1 },
    EITHER: { value: 2 },
    NEITHER: { value: 3 }
  }
});

