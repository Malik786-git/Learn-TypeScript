# Programming with TypeSrcipt

## configure typescript in our project...
(recommended setup locally not globally)


1. npm init
2. npm i -g typescript (for globally install) or npm i typescript
3. tsc --init (if globally intall) or npx tsc --init



## Setup tsconfig.json file 


### Goto tsconfig.json file, define the following paths

1. src of .ts file uncomment rootDir set path tsconfig.json
    "rootDir": "./src",   


2. output of .ts to .js  in "Emit" section in tsconfig.json
    "outDir": "./dist/js",   

then run command on npx tsc or tsc (for globally installed)
for continously changes watch run npx tsc --watch or npx tsc -w
