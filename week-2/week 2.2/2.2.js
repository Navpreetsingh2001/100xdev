// * Nodejs and its runtime
//  *backend communcation protocols
//  *Express Basic 
//*  AudioContextrouters ,status codes

// *what is ECMAScript ?
// ECMAcript is scripting language specification on which js is based
// it serves as the guideline or the rules for scripting language design
  
// *what is JS
// is scripting language that conforms to ECMAScript specification

//   js -- > v8(engine) -->binary (0,1)
// v8 engine -- > open source js engine developed by chromium project for google chrome. it is written in c++ and responsible fo compiling js code into native code before executing which improve performance
// *what is Node.js
/*
written in c++

some people took out the V8 engine added some backend things
like filesystem reads on top to create a new runtime to complete with BE langauge
java
js was never meant to be run in backend eventually become very
popular and is a popular choice */

//* What is Bun?
/*
Bun is significantly faster runtime then Node.js
Node.js is slow .even thought both are single threaded
Re-written code and introduced Bun

written in zig
*/

//* what can you do with Node.js
//* 1. create clis  --> command line interface
//* 2. create a video player
//* 3. create a game 
//* 4. create an HTTP server 

//* what is an HTTP server 
// hyper text transfer protocol 
// it is common way for your websites frontend to talk to ites bckend
  

//* What is HTTP protocol
// It the end its the client throwing some info at a server 
// server doing something with that info.
// server responding back with he final result 

//* Things that happen in your browser after you fire this request
// 1. Browser parses the URL.
// 2. Does a DNS lookup (converts google.com to an IP)
// 3.establishes a connection to the IP 

//* Things that happen after after the server receives the request 
// 1. you get the input (route,body,headers)
// 2.you do some logic on the input,calculate the output
// 3.your return the output body,header and status code


//* status codes for backend 
// 1. 200 - everything is ok 
// 2. 404 - Page/route not found 
// 3. 403 - Authentication issues 
// 4. 500 - Internal server error 

