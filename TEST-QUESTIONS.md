1. What is the difference between Component and PureComponent? Give
an example where it might break my app.

> ./ The Main difference is that *PureCOmponent* implements *shouldComponentUpdate* and it might break the app when the components state or props change, PureComponents no re-render if they don´t detect changes on the props or state and you mutate objects or arrays in the state

2. Context + ShouldComponentUpdate might be dangerous. Why is that?

> ./ Use *shouldComponentUpdate* with Context can be problematic because *shouldComponentUpdate* do a shallow prop and state comparison. If the component's render depends of context values for re-render *shouldComponentUpdate* might prevent the component from update.

3. Describe 3 ways to pass information from a component to its PARENT.

> ./ Using context, Redux, passing a function as prop, then calling it from the child component with the needed props

4. Give 2 ways to prevent components from re-rendering.

> ./ Using *useCallback* for memoize callback functions and *useMemo* for values

5. What is a fragment and why do we need it? Give an example where it might break my app.

> ./

6. Give 3 examples of the HOC pattern.

> ./ I Know that it's related to *High Order Components* and they allow enhance or modify components behavior but I don't have clear examples about it.

7. What's the difference in handling exceptions in promises, callbacks and async...await?

> ./ With *callBacks* you can pass the error as first parameter, with *promises* you can add the .catch method at the end of the promise and *asyc await* you can use trycatch method 

8. How many arguments does setState take and why is it async.

> ./ It takes 2 params the "getter" and the "setter", I don´t know why is async but I know that if you want to access to the value, immediately when it was changed, you have to use a useEffect

9. List the steps needed to migrate a Class to Function Component.

> ./ change the classes by components, include return, remove constructor, check the variables and functions scope

10. List a few ways styles can be used with components.

> ./ importing a stylesheet, using style components, inline styling

11. How to render an HTML string coming from the server.

> ./ I don't know