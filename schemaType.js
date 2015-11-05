import {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLList,
	GraphQLString,
	GraphQLEnumType
} from 'graphql';

export const PlayerType = new GraphQLObjectType({
	name: 'Person',
	description: 'Describe a player',
	fields: () => ({
		playerId: {
			type: GraphQLInt,
			description: 'Player ID number'
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
			type: DominanceEnum,
			description: 'Player foot dominance [left, right, either, neither]'
		},
		handDominance: {
			type: DominanceEnum,
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
			description: 'Person first name'
		},
		incidentId: {
			type: GraphQLString,
			description: 'Person last name'
		},
		incidentType: {
			type: GraphQLInt,
			description: 'Person Medical Record Number'
		},
		playerId: {
			type: GraphQLInt,
			description: 'Person payment total'
		},
		playerName: {
			type: GraphQLString,
			description: 'Person last name'
		},
		incidentTime: {
			type: GraphQLString,
			description: 'Person last name'
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

