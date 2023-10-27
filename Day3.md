# Day3
 ### Q1. What is prop drilling and state uplifting?
 * prop drilling - Prop drilling is a pattern or technique used in React, a popular JavaScript library for building user interfaces. In React, data is typically passed from a parent component to its child components via props (short for properties). When data needs to be accessed by a deeply nested child component, it must be passed down through all the intermediate parent components in the component tree. This process of passing data through multiple levels of components is known as "prop drilling."
* state uplifting - state uplifing involves moving the management of a piece of state from a child component to a parent component. This is done when multiple child components need access to the same piece of data, and rather than passing it through props to each child, it is managed at a higher level (the parent component).


### Q2. differance between axios and fetch.
|Axios|Fetch|
|----|----|
|Axios is third party liabrary|it is a javascript method|
|it can automatically tranfrom data(.json)|have to manually transfrom|
|has to be compiled|can read directly by browser|

### Axios Implementation.

### Q3 . what is context API?
context api -Context API is a part of the React library for building user interfaces in JavaScript. It provides a way to share data between components without the need to explicitly pass props through the component tree. Context API is often used for managing global state, configuration, themes, user authentication, and other data that needs to be accessible to multiple components.

feature ----
1.avoiding prop drilling.
2.dynamic data updataes

### Q4. What is useState Hook(implementation)
The useState hook is a fundamental part of React's Hooks API, introduced in React 16.8, that allows functional components to manage and update their own local state.
You can use the useState hook within a functional component to add and manage state. It takes an initial state value as an argument and returns an array with two elements: the current state value and a function to update that state.
* syntax :
 const [state variable name, state function hook] = useState();


 ### Q5. what is useEffect Hook (implementation)

 The useEffect hook is used in React functional components to perform actions (side effects) in response to changes in the component, such as data fetching, DOM manipulation, or setting up subscriptions. It's like a Swiss Army knife for handling things that don't directly relate to rendering the component.

 ### Q6 . clean Up function in UseEffect.

 ### Q7. what is seo? is it react supports to seo
 *SEO, which stands for Search Engine Optimization, refers to the practice of optimizing a website or web application to improve its visibility and ranking in search engine results pages (SERPs). .
 
