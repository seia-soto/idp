import createConnectionPool from '@databases/pg';
import createTables from '@databases/pg-typed';
import {env} from '../config';
import type DatabaseSchema from './__schema__';
import databaseSchema from './__schema__/schema.json' assert { type: 'json' };

export const createDb = async () => {
	const connectionString = env.text('DATABASE_URL');
	const poolSize = env.numeric('DATABASE_CONNECTION_POOLING_SIZE', true) ?? 10;

	const db = createConnectionPool({
		connectionString,
		poolSize,
		bigIntMode: 'bigint',
	});
	const tables = createTables<DatabaseSchema>({
		databaseSchema,
	});

	return {
		db,
		tables,
	};
};
