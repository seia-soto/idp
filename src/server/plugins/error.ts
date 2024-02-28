export class FastifyIdpPluginError extends Error {
	public static duplicateDecorator(name: string) {
		return new this(`${name} was already decorated in the server instance!`);
	}
}
