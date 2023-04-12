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

Primitive types: string, number and boolean. Also Array (number[] or Array<number>) and any (which means you know the rules better than TS).

It is possible to type annotate variables, however is often not necessary.

Functions:

TypeScript allows typing both input and output of functions

Also we can add return type annotations

Object types.

4 - Learn about interfaces, classes, and functions in TypeScript

---> See examples in index.ts

Interfaces: two types are compatible if their internal structure is compatible.
Then, an interface can be implemented by just having the shape the interface requires, without an explicit `implements clause`

Day1: Assessment

- Unknown types
- Inheritance
- Access modifiers
- Interfaces

## ChatGPT:
### Day 2: Dive into Advanced TypeScript Features

1 - Study advanced types: union types, intersection types, mapped types, etc.
2 - Learn about type guards and type inference
3 - Understand generics and explore their use cases
4 - Get comfortable with namespaces and modules

### Myself:

1 - Union types: combining types

Can't use methods that are available on only one or few of the total types
The solution is to `narrow` the union with code.

_Intersection types_

_Type aliases_

Type alias is a name for a type
Interface can also name an object type

Interfaces can be extendable while types cannot be opened to add new properties

Intersections are used to combine existing object types by using the `&` operator.

Main difference between interfaces and intersections are how conflicts are handled

_Mapped types_ - Learn in the future. It seems there is a lot of content to learn before it (like Generics).

2 - Learn about type guards and type inference

_Type guard:_

```if (typeof variable === 'number') { ... }```

typeof type guard

truthiness narrowing

_Pause for function type expressions before type inference:_

_Type inference_

3 - Understand generics and explore their use cases

_Creating Types from Types_

_Generic Type Variables_

4 - Get comfortable with namespaces and modules

Modules are the default in node.js and are recommended over namespaces in modern code

## ChatGPT:
### Day 3: Apply TypeScript to Real-World Projects

1 - Convert a simple JavaScript project to TypeScript
2 - Work with popular JavaScript libraries and frameworks (React, Angular, etc.) using TypeScript
3 - Learn about type definition files and how to use them
4 - Explore debugging and error handling in TypeScript

### Myself:

1 - Converted arrays project from JavaScript to TypeScript
2 - To be done in a separate repository
3 - Learnt about type definition files
4 - Explored error handling

## ChatGPT:
Day 4: TypeScript Best Practices

1 - Study TypeScript best practices and conventions
2 - Learn about linting and formatting with tools like ESLint and Prettier
3 - Understand how to write clean, maintainable, and scalable TypeScript code
4 - Dive into unit testing TypeScript code with tools like Jest or Mocha

Day 5: Final Evaluation and Next Steps

1 - Review your progress and understanding of TypeScript concepts
2 - Complete a TypeScript coding challenge or mini-project to test your skills
3 - Identify areas that need improvement or further study
4 - Discuss next steps for deepening your TypeScript knowledge and applying it in real-world projects

### Myself:

4.1 - Apply it in Vue3
4.2 - On the go
4.3 - Enforce it with Vue3
4.4 - Probably use Jest alone or Node assert

5.1 - Check at the end of experimentation
5.2 - Included above
5.3 - Constant evaluation
5.4 - Continue studying and extending it to Node projects as well