var pages = 
[
	["HOME","index.html"],
	["ABOUT","aboutme.html"],
	["RESUME","resume.html"],
	["PROJECTS","projects.html"],
	["Q & A","q&a.html"],
	["CONTACT","contactme.html"]
];


$(document).ready(function(){

	for(var x=0;x<pages.length;x++)
	{
	
			var listItem = document.createElement('li');
			var a = document.createElement('a');

			a.innerHTML = pages[x][0];

			if(pages[x][1] == location.pathname.substring(location.pathname.lastIndexOf("/") + 1))
			{
				a.className = "active";
				a.href = "#"
			}

			else
			{
				a.href = pages[x][1];
			}
			
			listItem.appendChild(a);

			$("#navList").append(listItem);

			
	}

});




function loadElements()
{		
	$("header").fadeIn();
	$("article").fadeIn();
	$("footer").fadeIn();
	$("div#nameInputBox").fadeOut();

	var a = document.createElement('a');
	a.className = "menuButton";
	a.href = "#"
	a.innerHTML = '<img src="Assets/menu.png" alt="menu">'

	document.body.appendChild(a);

}