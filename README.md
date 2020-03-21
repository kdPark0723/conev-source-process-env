# conev-source-process-env

conev-source-process-env is an implementation of conev's source to get configuration from process.env.

![](https://img.shields.io/npm/dm/conev-source-process-env.png?style=flat-square)

​    

## Install

```shell
# with npm 
npm install conev-source-process-env
 
# or with Yarn 
yarn add conev-source-process-env
```

​    

## Usage

Get ConfigBuilder from conev and Sources to use.

```typescript
import { ConfigBuilder } from 'conev';
import ProcessEnvSource from 'conev-source-process-env';
```

And create Source and set up.

```typescript
const processEnvSource = new ProcessEnvSource(/* env */);
```

Create ConfigBuilder and set Environment, add source. (highest priority is added first).

```typescript
const builder = new ConfigBuilder();

builder
    .setEnv('dev', 'basic')
    .addSource(processEnvSource);
```

Build configuration

```typescript
const config = await builder.build(); // This is the result of combining dev and basic.
```

Use configuration

```typescript
config.get() // The whole configuration created comes out
config.get('PATH'); // Is same as config.get().PATH
```

​    

## Process Env Source

```typescript
class ProcessEnvSource {
    constructor(env?: string);
    export(): Promise<Map<string, object>>;
}
```

`ProcessEnvSource` defines the source from process.env.
​    

