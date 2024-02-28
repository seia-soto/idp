# idp

Identity provider.

## Setup

### Node.JS

To support the generalization of our development process, we use Node.JS version higher than `v18` with the following minimum versions:

- v18.18.0
- v20.8.0
- v21.0.0

The main purpose of this is to keep the custom loader revision for each contributor.

- See https://github.com/avajs/ava/blob/main/docs/recipes/typescript.md

We always recommend you to use the latest Node.JS of the current LTS release unless there's a special exception for better development experience.
We can delay updating the version to wait all major issues come with general solutions.

### TypeScript

We have a wide-range of solutions for Node.JS TypeScript integration.
Currently, we're following the setup on `ava` which'll be our testing framework.

We don't mind using `tsx` instead of `tsimp` for both production and testing enviornment.

They're all using Node.JS's `--import` argument to inject custom loader:

```sh
node --import [custom_loader]
```

### Docker

We use `pg-test` command to setup database.
This command depends on Docker, therefore you need a Docker daemon.

Depending on the operating system, the procedure to set up a testing database may vary.

- For macOS based systems, I'd recommend you to use `lima` based turn-key services like `limactl` and `colima`.
- For Windows based systems, set up Docker on WSL and create a batch file called `docker.cmd` on the registered path directory with the following content:

```cmd
@echo off
wsl -d [container_name] docker -H unix:///var/run/docker.sock %*
```

Also, saving the following content in `%USERPROFILE%\Documents\WindowsPowerShell` for PowerShell can be an alternative:

```ps
function docker {
	wsl -d [container_name] docker -H unix:///var/run/docker.sock @Args
}
```

- For both systems, use the following approach to avoid using `pg-test` package:

```sh
docker run --name pg-test -e POSTGRES_HOST_AUTH_METHOD=trust -e POSTGRES_USER=test-user -e POSTGRES_DB=test-db -d postgres:10.6-alpine
```

*with the following env*:

```
DATABASE_URL=postgres://test-user@localhost:5432/test-db
```

### Editor

You'll additionally need the following component supports on your editor/IDE:

- ESLint
- Editorconfig

All are available on VSCodium and VSCode compatible extension store.
