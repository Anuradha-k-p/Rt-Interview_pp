# Day4 

### Q1. difference betwwen usecallback and callback hook?
* Callback -callback function is the function passed as argument to the another function.and is excuted after the completion of that function.

-usecallback  
1. useCallback is a built-in React hook used for performance optimization, primarily in the context of functional components. It's used to memoize and cache a callback function so that it's not recreated on each render unless its dependencies change.
2.  This can be particularly useful when passing callbacks to child components to prevent unnecessary re-renders.

- callback hook
1. "Callback hooks" in a broader sense refer to different hooks in React, such as useEffect, useState, useContext, etc.
2.  These hooks provide various functionalities and are used for different purposes within a functional component.

### Q2. why do we need keys in react less.
In React, a "key" is a special and reserved attribute that is commonly used to uniquely identify and differentiate components or elements in lists when rendering. Keys are essential when working with dynamic arrays of elements, particularly in the context of rendering components that are created based on an array of data
-Efficient Reconciliation: Keys enable React to differentiate between elements, understand how they change over time, and efficiently update the DOM, thus reducing unnecessary re-renders.

-Helping React Identify Elements: Keys allow React to maintain the state of components within lists by distinguishing between individual elements, especially when the order or presence of elements changes.

- the key attribute in React is used to uniquely identify elements within dynamic lists, enabling React to efficiently manage and update the DOM, providing performance improvements when rendering large sets of components.

### Q3. what is useMemo hook?

The useMemo hook is a feature in React that allows for performance optimization by memoizing the result of a function, especially when dealing with expensive calculations or operations in functional components.

-useMemo takes two arguments: a function and a dependencies array.
-The first argument is a function that returns the value you want to memoize.
-The second argument is an array of dependencies. The memoized value will only be recalculated when one or more dependencies in this array change.


### Q4.What is USE-Ref Hook?
In React, the useRef hook is used to create a mutable reference to a DOM element or a value that persists across renders without causing the component to re-render when the reference changes. It's a versatile tool for managing references to elements or values within a functional component.
- uses of use-ref
1. Referencing DOM Elements: When you need to reference a DOM element directly without triggering a re-render, useRef allows you to obtain and hold a reference to that element.

2. Storing Mutable Values: When you have values that you need to persist across renders, such as for managing previous state, caching values, or creating flags to indicate if a component is mounted or unmounted, useRef is helpful.

### Q5. useReducer Hook?
The useReducer hook is a built-in React hook that offers an alternative way to manage state in functional components. It's particularly useful for managing more complex state logic by using a pattern similar to the one seen in Redux, which involves actions and reducers.

-useReducer takes two arguments: a reducer function and an initialState.
-It returns an array containing the state and a dispatch function.
-The reducer function takes the current state and an action, and based on the action type, returns the new state.

### Q6. 
#### useEffect:
-Purpose: useEffect is a hook used for handling side effects in functional components. Side effects might include data fetching, subscriptions, manually changing the DOM, or any action that needs to happen after the initial render or after a render.
-Usage: It takes two arguments: a function (the effect to perform) and an optional array of dependencies. The function executes after every render by default, but by specifying dependencies, you can control when the effect should run.
-Example: Fetching data from an API after the component mounts, subscribing to external events, or updating the document title dynamically are common use cases of useEffect.
#### useContext:
-Purpose: useContext is a hook used for consuming context in a functional component. Context in React provides a way to pass data through the component tree without having to pass props manually at every level.
-Usage: It takes a context object (created by React.createContext) as an argument and returns the current context value for that context. This allows components to access the value provided by the nearest <MyContext.Provider>.
-Example: Accessing a theme, user authentication details, or language settings stored in a context to avoid prop drilling (passing props through multiple layers of components).