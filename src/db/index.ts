import createConnectionPool from '@databases/pg';
import createTables from '@databases/pg-typed';
import type DatabaseSchema from './__schema__';
import databaseSchema from './__schema__/schema.json' assert { type: 'json' };

export const createDb = ({
	connectionString,
	poolSize,
}: {
	connectionString: string;
	poolSize: number;
}) => {
	const pool = createConnectionPool({
		connectionString,
		poolSize,
		bigIntMode: 'bigint',
	});
	const tables = createTables<DatabaseSchema>({
		databaseSchema,
	});

	return {
		pool,
		tables,
	};
};
