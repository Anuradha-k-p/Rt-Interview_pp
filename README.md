### Q1 . what is SPA?
ANS- spa stands for single page application, it is web site application or website thats load a single HTML page and dynamically update its content without relaod full page
### Q2. what is virtual Dom.
In React, the Virtual DOM is a programming concept and abstraction that represents a lightweight copy of the actual DOM (Document Object Model) of a web application. It's a way to optimize and efficiently manage updates to the actual DOM.
### Q3. difference between class component and functional component.

|function component|class component|
|----|----|
|Functional components are defined as JavaScript functions that return JSX. |Class components are defined as ES6 classes that extend the React.Component class. They require the use of the render method to return the JSX that represents the component's UI|
| React Hooks, you can now use the useState hook to manage component state within functional components.|Class components can manage component state using this.state and this.setState() to update the state. |
|Functional components used to lack lifecycle methods. However, with hooks like useEffect, you can achieve similar functionality to lifecycle methods in functional components. Hooks allow you to perform side effects, such as data fetching and subscribing to changes, in functional components.|Class components have access to a variety of lifecycle methods, such as componentDidMount, componentDidUpdate, componentWillUnmount, etc., which allow you to control component behavior at different stages of its lifecycle.|

### Q4. what is Package.json.
A package.json file is a configuration file used in Node.js and JavaScript-based projects to define various aspects of the project, including its metadata, dependencies, scripts, and other settings. It is a fundamental part of the Node.js ecosystem and is commonly used in web development and other JavaScript projects to manage project dependencies and scripts. The package.json file is written in JSON (JavaScript Object Notation) format.

it contains-
1.dependancies.
2.scripts.
3.repository information.
4.project data.

### Q5. What is JSX and why do we use it instead of js?
JSX, which stands for JavaScript XML, is a syntax extension for JavaScript commonly used with React, a popular JavaScript library for building user interfaces. JSX allows developers to write HTML-like code within JavaScript, making it easier to create and manage the user interface of a web application.
 * advantages-
 -declartive sntence.
 -component Composition
 -tool Support

### Q6. What is the Difference between react and react native? Which one is library or framework?
|React js| React Native|
|----|----|
|React is a JavaScript library|React Native is a framework.|
|React is primarily used for building web applications.|React Native is designed for building mobile applications|

### Q7.Difference b/w Stateful and stateless Component.
|Stateful | stateless|
|----|----|
|Stateful components, also known as class components|Stateless components, also known as functional components,|
| Stateful components can utilize React's lifecycle methods|Stateless components don't have access to React's lifecycle methods.|
|Stateful components use the this keyword to access props, state, and class methods|Stateless components are defined as JavaScript functions that take props as an argument and return JSX. They do not use the this keyword.|

### Q8. What do you know about NPM?
npm (Node Package Manager) is a widely used package manager for JavaScript and Node.js applications. It plays a crucial role in managing dependencies, scripts, and various aspects of a JavaScript project. 

used for--
1.installation.
2.Dependancies mangament.
3.Script.
4.version control






### differnce between props and state
|prop|state|
|----|----|
|prps are used to send data from one compo to anthother compo|state is a object that represnts the internal variable|
|props cant modified| it is possible to modifiy state|
|props used in class bassed and function based compo| state is used in class based compo|
|propa are passed outside the function| states are passed inside function|

