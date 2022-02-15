# playground-subgraph

GraphQL to ethereum blockchain delegating via TheGraph

TheGraph exposes a GraphQL endpoint to query the events and entities within the Ethereum Smart Chain

## Dependencies

- [Graph CLI](https://github.com/graphprotocol/graph-cli)
    - Required to generate and build local GraphQL dependencies.

```shell
npm install -g @graphprotocol/graph-cli
```

## Authorization For Deployment

1. Run the `graph auth --studio '<ACCESS_TOKEN>'`

## Deployment

1. Run the `npm run codegen` command to prepare the TypeScript sources for the GraphQL (generated/*).

1. Run the `npm run build` command to build the subgraph, and check compilation errors before deploying.

1. Deploy via `npm run deploy`.
