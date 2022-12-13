# BASIC RESTapi Convention 
--------------------------------------------------------------------
 * So the RESTapi is a convention we use to write a good API, to understand how to write this lets understand some few terminology.

# CRUD(Create Read Update Delete)

 * So when we say we want to write crud api in compliance(act of obeying an order, rule, or request' ) of RESTapi.
 * We know in REST the important thing is resource(the real life entity is resource).
 * So, when we say CRUD api , then with CRUD api we actually mean that we want to write the api which can create your resource .
    
    * For example - let's say our resource is a - movie resource.  
    ** So, we are gonna write an api which will Create a movie , we gonna write an api which can read a movie (like fetch movie ) , then Update the movie and then delete the movie.
    So this is the simple api we can write for our resource . 
    Although just CRUD api is not something very much practical (because it is specific to some features).
    **
# Lets, create a basic blog api, where we can   - 

	C —> Create a blog 
	R —> Read a blog 
	U —> Update a blog 
	D —> Delete a blog 
So create these CRUD api in REST convention we can follow some set of rules -

# API to create a blog
- So when we are creating a an API our url look like 
    * E.g - www…/blogs
    ** So, in rest convention when we say create a blog we say we creating a resource , so in that case the url look something like 
	- /blogs (look we are writing blogs in plural form). 
	- and then we write the http methods 
	- like POST req 
	
    - now only with these two things we define we can assume  it gonna create a blog and in order to create we have to send some data (e.g title of ur blog etc)
    - and this data is send in the body param (in the form of json) 
		Body param  = {	
						Tittle : “......”
						Licence : “......”
    }*
    //NOTE - always you have to keep in mind your url should be plural your method should be POST and sending your data in body param and everyone should realize this api is gonna create a blog.

# API TO READ ALL BLOG 

    *- When we reading the blog our url will be like 	
    - Url = /blogs 
    - Same as create ? but the diff is we use GET method 
    - Http method  = GET* 

# API TO READ A SPECIFIC BLOG 

    *So we need to have a functionality to uniquely identify a specify a particular blog - lets say , we use blog id , now our url look like this- 
        - Url  = /blog/:id (the colon here means it going to have a variable value e.g /blog/2323)
        - Method  = GET (the method should be a GET req )*

# API TO DELETE THE BLOG

    Now the the url will be look like this 
    URL = /blog/:id (why id is here ? it gonna help server to delete a specific blog ) 
    Method = Delete



# API TO UPDATE A BLOG 

    URL - /blog/:id (same id help you to update a specific blog)
    METHOD - PATCH/PUT (depending on you want to partially update or fully update )
    put(gonna fully update )
    patch(gonna partially update )kk
    But what parameter your want to update is gonna send in the body param 
	{
		Tittle : “.....”
    }

    * NOTE - the id we shown here is not generally we seen in there maybe some other way of sending or way of writing these id 
    They use something called friendly ID and this friendly id get match in the server with specific user id 🙂.




