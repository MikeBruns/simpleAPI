# simpleAPI
Just testing out how API's and node.js

**/ez** - Very simple API with GET, PUT, POST, and DELETE functionalities on static data

**/harder** - API connected to a DB (mongo) 

**/reactAPI** - React app that uses a REST API
<br>

`npm install`


<h4>node modules used</h4>

`express` |
`body-parser`|
`mongoose`


<h2>Helpful web dev tools</h2>
<ul>
  <li>

  [JSONview](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?utm_source=gmail)
  </li>
  <li>
  
  [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?utm_source=gmail)
  </li>
  <li>

  [Brackets](http://brackets.io/)
  </li>
</ul>


<h2>React Notes</h2>
Setting up a react project

Setup all the tools react needs globally

`npm install -g create-react-app`

Create a react project

`create-react-app <project name>`

`cd <project name>`

Start project and loads local server

`npm start`

<h2>Node.js Notes</h2>
<h4>What is Node.js</h4>
Node.js is a javascript runtime built on Chrome's V8 *JavaScript engine*.
Which means that it is a standalone javascript server, not having to run on client side.



<h4>NPM</h4>


Start a npm project that will add the package.json  
`npm init`



How to properly pull in a node module  
`npm install --save moduleName`  
This will download and add this module to your
`node_modules`
folder and the dependency. A benefit to this is that if someone is trying to import all the node modules for a project they can simply run


<h5>Popular Modules</h5>  
Express - Web development framework  <br>
Connect - HTTP server framework <br> 
Socket.io - Server side component for websockets <br> 
Pug/Jade - Template engine inspired by HAML <br> 
Coffee-Script - CoffeeScript compiler <br> 
Redis - Redis client library <br> 

<h4>Express Notes</h4>
Express is a web framework for Node.js used to build web applications and API's.  
It uses MVC concepts 
<ul>
<li>M odel - The actual data. Database's, data storage..</li>
<li>V iew - Displaying the user interface. What the user see's</li>
<li>C ontroller - Direct traffic, route, load views..</li>
</ul>




