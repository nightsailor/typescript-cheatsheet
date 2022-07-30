# Setup

```#!/bin/sh

npm i -g typescript

tsc -v

tsc --init
```

"rootDir": "./src",

"outDir": "./public",

```#!/bin/sh

tsc index.ts

tsc index.ts --outfile out/script.js

tsc index.ts -w

tsx -w
```

```typescript
// Error: Parameter 'a' implicitly has an 'any' type

function logName(a) {
  console.log(a.name);
}
```

# Primitive Types

```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `#f03c15`
- ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `#c5f015`
- ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) `#1589F0`