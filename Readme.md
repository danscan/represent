```
                                        |    
,---.,---.,---.,---.,---.,---.,---.,---.|--- 
|    |---'|   ||    |---'`---.|---'|   ||    
`    `---'|---'`    `---'`---'`---'`   '`---'
          |                                  
```
Declarative infrastructure without imperative transactions.

## WARNING:
This hasn't yet graduated from experimental nonsense.  Pay no attention to it at all.

## Premise
```
components
  - particular to certain types
  - render and provide (direct?) manipulation of type values
  - ? what about components that just compose other components?
interfaces
  - ddp
  - graphql
  - rest
  - relay
types
  - arbitrary & composable
resources
  - root types
  - compose arbitrary types
  - exposed by schema
```

## How it Works
1. Resources are defined by the types they compose, and are exposed through interfaces via schema.
2. A type describes how to render each of its representations as a component, which provides a UI to visualize the type value(s) and allows for direct value manipulations and refetching.
3. The entirety of an infrastructure's capabilities are constrained to strict representation as collections (like REST).
4. Components may be defined so that they're automatically deployable across platforms.

## Usage
```
npm run interactive

∫> help
```

### Ideas to Consider
- [ ] "Package" manager & hub for sharing type, schema and component definitions.
- [ ] Search, download and use types/schemas/components from hub, directly from interactive cli.