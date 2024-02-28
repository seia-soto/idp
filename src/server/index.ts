import {TypeBoxValidatorCompiler} from '@fastify/type-provider-typebox';
import fastify, {type FastifyServerOptions} from 'fastify';

export const createServer = async (options: FastifyServerOptions) => {
	const server = fastify(options)
		.setValidatorCompiler(TypeBoxValidatorCompiler);

	return server;
};
