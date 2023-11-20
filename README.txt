Routing:
  It is used to for navigation
  It enables navigation by intrapreting url as instruction to change view
  Every component is associated with one uniqe url
  following are the steps involved
	1.Declare a array of object to map path(url with a component) in app.routes.ts file
	2.Mention this provider of the routes inside app.config.ts file
	3.Write following tag in app component html file
	  <router-outlet>
	4.Instead of href attribute use routerLink attribute and specify url as mention the first step
	5.Import RouterModule in the component needed