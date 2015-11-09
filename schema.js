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
	MatchIncidentCommentType,
	MatchIncidentTypeEnum,
	DominanceEnum,
	PlayerPositionEnum
} from './schemaType';

import { 
	getPlayerList,
	getTeamPlayerList,
	getPlayerMatchIncidentList,
	getMatchIncidentList,
	getMatchIncidentCommentList
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
			incidentCommentList: {
				type: new GraphQLList(MatchIncidentCommentType),
				resolve: (__placeholder, {matchId, incidentId}) => {
					return getMatchIncidentCommentList(matchId, incidentId);
				},
				args: {
					matchId: { type: GraphQLString},
					incidentId: { type: GraphQLString}
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