import {TypeBoxValidatorCompiler} from '@fastify/type-provider-typebox';
import fastify, {type FastifyServerOptions} from 'fastify';
import {dbPlugin} from './plugins/db';

export const createServer = async (options: FastifyServerOptions) => {
	const server = fastify(options)
		.setValidatorCompiler(TypeBoxValidatorCompiler);

	await server.register(dbPlugin);

	return server;
};
