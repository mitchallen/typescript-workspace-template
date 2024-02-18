typescript-workspace-template
==

## Usage

### Template Usage

To use this template:

1. Create a new repo from this template via GitHub
2. Clone the repo to your machine
3. Run `npm install`

### Use the template from the command line

This command will:

* Create a private GitHub repo from this templete
* Create a local clone in a subfolder 

Steps:

* Create and change to a parent folder
* Run this command:
```sh
gh repo create my-workspace \
 --private --clone --template \
 https://github.com/mitchallen/typescript-workspace-template.git
```
* Change to the cloned folder:
```sh
cd my-workspace
```
* Install the dependencies:
```sh
npm install
```
* Assuming task is installed (see build tools below), run this command:
```sh
task test-clean-all
```
* Verify everything works
* Confirm you have a new private repo on GitHub with the same name
* Check the remote references:
```sh
git remote -v
```

* * *

### Build Tools

To use the `Taskfile.yml` file in the root of the project:
* Vist https://taskfile.dev/ for install instructions
* Run `task` to get a list of options
* Run `task test-clean-all` to clean, build and test all packages

### Verify everything:

To verify everything still works:

* Save all files in the code editor
* Run this command:
```sh
task test-clean-all
```

That command will:

* Verify all dependencies are in place
* Verify build order works
* Verify all functionality still works

* * *

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

* * *

### Order workspace via dep

Due to dependency order, core has to come first:

```sh
  "workspaces": [
    "packages/core",
    "packages/alpha",
    "packages/beta"
  ]
```

* This is why you don't have to put references in your tsconfig files. 
* It's also why you don't need to use the `tsc -b` flag.

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

## Remove example packages and scope

The example packages can be removed.

* Removed them from the `./packages` folder.
* Remove them from the root `package.json` `workspaces` array:

```js
  "workspaces": [
    "packages/core",
    "packages/alpha",
    "packages/beta"
  ]
```

## Update scope

* Replace my scope (`@mitchallen`) with your scope in the root `tsconfig.json` file:

```js
{
  "compilerOptions": {
    "baseUrl": "./packages",
    "paths": {
      "@mitchallen/*": [
        "./*/src"
      ]
    }
  }
}
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


