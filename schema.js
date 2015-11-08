import {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLList,
	GraphQLString,
} from 'graphql';

import { 
	PlayerType,
	MatchIncidentType,
	MatchIncidentTypeEnum,
	DominanceEnum,
	PlayerPositionEnum
} from './schemaType';

import { 
	getPlayerList,
	getTeamPlayerList,
	getPlayerMatchIncidentList,
	getMatchIncidentList
} from './controller';

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',

		fields: {
			player: {
				type: PlayerType,
				resolve: (__placeholder, {playerId}) => {
					return getPlayerList(playerId);
				},
				args: {
					playerId: {type: GraphQLString}
				}
			},
			playerList: {
				type: new GraphQLList(PlayerType),
				resolve: (parent, {teamId}) => {
					return getTeamPlayerList(teamId);
				},
				args: {
					teamId: {type: GraphQLString}
				}
			},
			incidentList: {
				type: new GraphQLList(MatchIncidentType),
					resolve: (__placeholder, {matchId}) => {
					return getMatchIncidentList(matchId);
				},
				args: {
					matchId: { type: GraphQLString}
				}
			},
			count: {
				type: GraphQLInt,
				resolve: () => 20
			}
		}
	})
});

export default schema;