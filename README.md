![NPM](https://img.shields.io/npm/l/url-matcher)

# Url Matcher

A simple library to match url domains.

## Usage

```typescript
import { urlMatcher } from 'url-matcher';

function matchExample() {
    const toMatch = 'www.fetcher.ai';
    const domain = 'fetcher.ai';

    if (urlMatcher(domain, toMatch)) {
        // do things...
    }
}
```

## API

### urlMatcher(domainA: string, domainB: string): boolean

Return: Boolean depending on the result is true or false.

***Params***

| Field Name | Type | Default | Description |
| --- | --- | --- | --- |
| domainA | string | mandatory  | Mandatory domain A to match  |
| domainB | string  | mandatory | Mandatory domain B to match with A |

## Tests

To execute jest tests:
```
yarn test
```

## Maintain

This package use [TSdx](https://github.com/jaredpalmer/tsdx). Please check documentation to update this package.
