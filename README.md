# es-toolbelt

All the JS I don't want to write twice.

## ESLint config explanations

_camelcase_ - camelCase is pretty much the norm in JavaScript and TypeScript programming. Also, for
me it feels unnatural to see these languages written in any other case.

_no-await-in-loop_ - Why await inside of a loop, when you can just collect the Promises into an
array and then Promise.all()? This more performant also, since all of the async operations are done
simultaneously.

_no-console_ - I tend to use console only for debugging and temporary error handling. In either
case, the console statements should not be left in the code forever.

_no-template-curly-in-string_ - Prevents from using the wrong quotes with template literals.

_no-unreachable-loop_ - Loops that don't loop are very likely a programming error.

_no-unsafe-optional-chaining_ - This rule prevents using optional chaining in situations in which
it actually doesn't prevent runtime errors, creating a false sense of security.

_array-callback-return_ - If the callbacks passed to array operations, such as `filter` or
`reduce`, don't return anything, that is probably a mistake. In the least, if the returned values
are not needed, `Array.forEach` should be used instead.

_consistent-return_ - If a function has multiple return statements, they all have to return a value
or none of them should. This prevents mistakes in accidentally missing return values, but also
makes it explicit if `undefined` is returned.

_curly_ __multi__ - Allow statements such as while, if and for omit braces, if their bodies are
single line. This makes the code look very clean. If the bodies are multiline, the use of braces is
enforced, because it makes it easier to see which lines belong to the body.

_default-param-last_ - Always make optional parameters last ones in the function definition. This
makes it possible to omit them, if necessary.

_dot-location_ - When a method call or chain of calls needs to be split over multiple lines, keep
the dots at the end of lines.

_eqeqeq_ - Permit the usage of the double equality operator (`==`). A JavaScript developer knows
the functioning of `==` and its differences to `===` and can make an enlightened decision about
which one to use.

_guard-for-in_ - When looping over the properties of an object, this rule prevents from
accidentally looping over all the properties of the whole prototype chain by requiring an
if-statement, where `Object.prototype.hasOwnProperty.call should be used`. For more information,
see [ESLint documentation](https://eslint.org/docs/rules/guard-for-in).

_no-else-return_ - Remove unnecessary `else`-statements after `if`-statements, which return.

_no-magic-numbers_ - Numbers must always be assigned to a variable before used. This way the
meanings of any numerical values in the code are always documented.

_no-param-reassign_ - Reassigning function parameters is weird and leads surely to confusing
behavior.

_no-unmodified-loop-condition_ - Prevent infinite loops.

_no-unused-expressions_ - Prevents logic errors such as calling `somenumber.toFixed()` without
capturing the return value into a variable.

_no-useless-return_ - Remove return statements from places where the function would exit the same
way without it.

_require-await_ - For me at least, the most common reason for creating an `async` function is to be
able to use `await` inside of it. If I don't, the function probably does not need to be `async`.

_no-use-before-define_ - `var` variables still have their usecase in JavaScript. However, using a
variable before its definition should not be one of them.

_no-duplicate-imports_ - Combine imports from a module to the same statement.

### React

With React, be sure to use the `eslint-plugin-react` and `eslint-plugin-react-hooks` plugins. They
are included with `create-react-app`. Also use `eslint-plugin-jsx-a11y` to help write more accessible components.

### Prettier

With Prettier be sure to use the `eslint-plugin-prettier`. It will disable all the ESLint rules
that conflict with its settings. Also, make sure it is the last plugin applied!

### Cypress

With Cypress, use `eslint-plugin-cypress`. It helps in following the Cypress best practices.
