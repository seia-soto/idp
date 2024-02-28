import {type FastifyPluginAsync} from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import {env} from '../../../config';
import {createDb} from '../../../db';
import {FastifyIdpPluginError} from '../error';

export type DbPluginContext = ReturnType<typeof createDb>;

const plugin: FastifyPluginAsync = async fastify => {
	if (fastify.hasDecorator('db')) {
		throw FastifyIdpPluginError.duplicateDecorator('db');
	}

	const connectionString = env.text('DATABASE_URL');
	const poolSize = env.numeric('DATABASE_CONNECTION_POOLING_SIZE', true) ?? 10;

	const db = createDb({
		connectionString,
		poolSize,
	});

	fastify.decorate('db', db);
};

export const dbPlugin = fastifyPlugin(plugin, {
	name: 'db',
});
