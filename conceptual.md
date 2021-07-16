### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
   
      React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

- What is a single page application?


      A single-page application is an app that works inside a browser and does not require page reloading during use. 

- What are some differences between client side and server side routing?

      A server-side request causes the whole page to refresh. This is because a new GET request is sent to the server which responds with a new document, completely discarding the old page altogether.

      Every request results in a full-page refresh. That means that unnecessary data is being requested. A header and a footer of a webpage often stays the same. This isn’t something you would want to request from the server again.

      It can take a while for the page to be rendered. However, this is only the case when the document to be rendered is very large or when you have slow internet speed.  

      A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application

      The whole website or web-application needs to be loaded on the first request. That’s why the initial loading time usually takes longer.
      Because the whole website or web-application is loaded initially, there is a possibility that there is data downloaded for views you won’t even come across.
      It requires more setup work or even a library. Because server-side is the standard, extra code must be written to make client-side routing possible.
      Search engine crawling is less optimised. Google is making good progress on crawling single-paged-apps, but it isn’t nearly as efficient as server-side routed websites.

- What are two ways of handling redirects with React Router? When would you use each?

      The two ways are the use of Redirect and useHistory from "react-router-dom". 
      1) You want to protect your route from unauthorized users you can use "Redirect".
      2) When you want to redirect after a certain action (let's say after creating an item) you can use "useHistory"

      
- What are two different ways to handle page-not-found user experiences using React Router? 
  
      The two ways to handle page-not-found would be using Switch and Link from "react-router-dom".

- How do you grab URL parameters from within a component using React Router?

      The URL parameters from a component can be accessed with the help of useParams from react router.

- What is context in React? When would you use it?

      React Context is a method to pass props from parent to child component(s), by storing the props in a store(similar in Redux) and using these props from the store by child component(s) without actually passing them manually at each level of the component tree. 

- Describe some differences between class-based components and function
  components in React.

      First of all, the clear difference is the syntax. Just like in their names, a functional component is just a plain JavaScript function that returns JSX. A class component is a JavaScript class that extends React.Component which has a render method. 

      Inside a functional component, we are passing props as an argument of the function. Since it is a class, you need to use this to refer to props. 

      To use state variables in a functional component, we need to use useState Hook. In class components we define the constructor first. Inside the constructor, you will make a state object with a state key and initial value. And inside JSX, we use this.state.key to access the value of the state key.

      Functional Components does not have Lifecycle methods whereas a class component works completely with lifecycle methods.

- What are some of the problems that hooks were designed to solve?

      Embracing Hooks has benefited us in the following ways:
      Managing state has become easier 
      
      It’s easier to extract and share stateful logic in our apps.

      Avoid using complicated lifecycle methods of the class components.