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
	//getMatchIncidentList 
} from './controller';

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			player: {
				type: new GraphQLList(PlayerType),
				resolve: (__placeholder, {playerId}) => {
					return getPlayerList(playerId);
				},
				args: {
					playerId: {type: GraphQLString}
				},
			},
			// matchIncidents: {
			// 	type: new GraphQLList(MatchIncidentType),
			// 	resolve: () => getMatchIncidentList()
			// },
			count: {
				type: GraphQLInt,
				resolve: () => 20
			}
		}
	})
});

export default schema;