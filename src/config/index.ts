export type ConfigKey =
	'DATABASE_URL' // Special exception to share the name with atdatabases packages
	| 'DATABASE_CONNECTION_POOLING_SIZE';

export class ConfigError extends Error {
	public static notFound(key: ConfigKey) {
		return new this(key, 'Environment variable was not found');
	}

	public static invalidType(key: ConfigKey, format: string) {
		return new this(key, `Environment variable was not in format of ${format}`);
	}

	constructor(key: ConfigKey, message = 'Failed to get environment variable') {
		super(`${message}: ${key}`);
	}
}

const raw = (key: ConfigKey) => process.env[key];

const strict = (key: ConfigKey, loose = false): string => {
	const value = raw(key);

	if (!value) {
		if (loose) {
			return '';
		}

		throw ConfigError.notFound(key);
	}

	return value;
};

const text = (key: ConfigKey, loose = false): string => strict(key, loose);

const numeric = (key: ConfigKey, loose = false): number => {
	const env = strict(key, loose);
	const num = parseInt(env, 10);

	if (isNaN(num) || parseFloat(env) !== num) {
		throw ConfigError.invalidType(key, 'numeric');
	}

	return num;
};

export const env = {
	raw,
	strict,
	text,
	numeric,
} as const;
