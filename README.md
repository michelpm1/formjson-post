# Form Json Post

## Required
 * Jquery 2.0 +
 * http-server like apache to run test


## Install

Download the plugin: 
[Link]https://github.com/michelpm1/formjson-post/blob/master/src/formJsonPost.js
Add the script to your project.
```javascript
<script src = '/patch/formJsonPost.js'></script>
```
## Functionality

 Automatic create your form with a post request passing settings as a hash of parameters

## Usage

Set a document.ready() and fill your options. Select with Jquery a html attribute to put the form inside, run the function postForm(options).

## Example

```javascript
<script type="text/javascript">
$(document).ready(function() {
	options = { 'url':'#', 'token':'62bb61431348e22850828a5829c4373faafe29c1', 'secret':'51a266c2844ccd5cac83d88de88d82d05358aa51', 'fields': { 'estado':['PR','SC','SP','RS'], 'nível':['Iniciante','Intermediário','Avançado','Ninja'] } };
	$('#integration_form').postForm(options);
</script>
});
```
  
|     Param     	| Type   	| Description                                                                                                                                                                                |
|:-------------:	|--------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	                                                                             |
| options.url   	| string 	| The url you want to post                                                                                                                                                                   |
| options.secret  	| string 	| Here you can set your secret                                                                                                                                                               |
| opts.token    	| string 	| Here you set your token                                                                                                                                                                    |
| opts.fields   	| json  	| The fields parameter is where you set your adicional fields (checkbox and input accepted) you can follow the usage example to add your fields                                              |



#Tests

## Automatic Jasmine 

Download the project:
[Link]https://github.com/michelpm1/formjson-post
Host the project to a http-server

Using your prompt inside project folder run:
```javascript
    npm install
    npm install -g jasmine
```
For test go to the tests folder and run:
```javascript
    jasmine
```



## Manual

Download the project:
[Link]https://github.com/michelpm1/formjson-post
Host the project to a http-server
Using your prompt inside project folder run:
```javascript
    npm install
```

In your browser go to:


### http://localhost:port/formjsonpost/tests/

This page is using the plugin and have a mock ajax (backend simulator) if you send a post, it respond with 200 and 500.
for more details access:

[Link]https://github.com/jakerella/jquery-mockjax



obs: don't forget to host your files at a http-server like apache