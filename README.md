# typescript-learning
A experience of learning TypeScript with ChatGPT help during 5 days

## ChatGPT:
### Day 1: Understand TypeScript Basics

1 - Learn about TypeScript, its advantages, and why it's used
2 - Set up your TypeScript development environment
3 - Understand basic TypeScript syntax, types, and type annotations
4 - Learn about interfaces, classes, and functions in TypeScript

### Myself:

1 - Learn about TypeScript, its advantages, and why it's used
TypeScript is a strict syntatical superset of JavaScript and add static typing to the language.
Possibility to have better tools at any scale. Designed to be used in large applications. One can
catch early errors in the editor. TS converts to JS to run in every place JS runs. Uses type inference
to give great tooling without additional code. TS can catch bugs when we make mistakes in the code but
also prevent us for making those mistakes in the first place.

It is possible to add TS incrementally to the project, and make it catch errors not shown with just JS.
Can be used to detect typos, uncalled functions, basic logic errors, etc.

2 - Set up your TypeScript development environment
For brevity and to make things easy, I'm going to install typescript locally here, after setting npm init.

```
npm init
npm i typescript
```

Then I will create a index.ts file and create a build step to convert .ts into .js
I will also create a run step to build and run the final .js at the same time using nodejs runtime

```
build: convert TS into JS
dev: run converted JS
start: build and dev steps together
```

The naming is not perfect, it is just a initial convention to speed things up

3 - Understand basic TypeScript syntax, types, and type annotations

