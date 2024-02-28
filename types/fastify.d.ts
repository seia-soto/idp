import {type DbPluginContext} from '../src/server/plugins/db';

/* eslint-disable @typescript-eslint/consistent-type-definitions */
declare module 'fastify' {
	interface FastifyInstance {
		db: DbPluginContext;
	}
}
