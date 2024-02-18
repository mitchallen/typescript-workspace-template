typescript-workspace-template
==

## Usage

### Template Usage

To use this template:

1. Create a new repo from this template via GitHub
2. Clone the repo to your machine
3. Run `npm install`

### Build Tools

To use the `Taskfile.yml` file in the root of the project:
* Vist https://taskfile.dev/ for install instructions
* Run `task` to get a list of options
* Example: `task test-clean-all` to clean, build and test all packages

### Test

```sh
npm run build:all
npm test -ws --if-present
```

or:

```sh
npm run test:all
```

Test one package

```sh
 npm run test -w @mitchallen/alpha 
```


### Order workspace via dep

Due to dependency order, core has to come first

```sh
  "workspaces": [
    "packages/core",
    "packages/alpha",
    "packages/beta"
  ]
```

### Init a modules

```sh
npm init -w ./packages/alpha -y
```

* copy package.json and tsconfig from other packages

### Dependency

Run this command to make the core package a dependency for the beta package (substituting for your scope):

```sh
npm install @mitchallen/core -w @mitchallen/beta
```

```sh
npm install --save-dev @cucumber/cucumber ts-node @types/cucumber -w @mitchallen/alpha
npm install --save-dev chai @types/chai -w @mitchallen/alpha
```

```sh
npm install --save-dev sinon @types/sinon -w @mitchallen/core
```

### Build all

```sh
npm run build:all

npm run build -ws --if-present
```

### Build package

```sh
npm run build -w @mitchallen/alpha
```

### Clean

```sh
npm run clean:all

npm run clean -ws --if-present
```

* * *

## Cucumber VS Code settings

```json
"cucumber.glue": [

    "packages/**/step-definitions/*.ts",
    "step-definitions/**/*.ts",
```

* * *

## References

* https://www.typescriptlang.org/tsconfig#extends
* https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559
* https://www.typescriptlang.org/docs/handbook/project-references.html


