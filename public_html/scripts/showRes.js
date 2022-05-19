
		
		
		function populateResume(json)
		{
			//a bunch of funcs
			const showThem = function(key, json)
			{
				//you have a list of objects
				let myFlash = document.getElementsByClassName("container")[1]; 
				let cardDiv = document.createElement("div");
					cardDiv.className = "card border-dark";
					let cardBody1 = document.createElement("div");
					let h5tag = document.createElement("h5");
					h5tag.className = "card-title";
					h5tag.innerText = key.toUpperCase().substring(0,1) + key.substring(1);
					cardBody1.className = "card-body text-dark";
					cardBody1.appendChild(h5tag);
					for(let i = 0; i < json[key].length; i++)
					{
						let emptyStr = "";
						let arr = Object.keys(json[key][i]);
						let para = document.createElement("p");
						para.className = "card-text";
						for(let j = 0; j < arr.length; j++)
						{
							let attachStr = Array.isArray(json[key][i][arr[j]]) ? `<br>&#8226; ` + json[key][i][arr[j]].join(`<br>&#8226; `) : json[key][i][arr[j]];
							if(!Array.isArray(json[key][i][arr[j]]) && json[key][i][arr[j]].length >= 5 && json[key][i][arr[j]].substring(0,5) === "https")
							{
								//creat andcor tage, innHTML = attachStr 
								attachStr = `<a href = ${attachStr}>${attachStr}</a>`;
							}
							emptyStr = emptyStr + "<b>" + arr[j].substring(0,1).toUpperCase() + arr[j].substring(1) + "</b>" + ": " + attachStr + "<br>";
						}
						para.innerHTML = emptyStr; 
						cardBody1.appendChild(para);
					}
					cardDiv.appendChild(cardBody1);
					let colDiv = document.createElement("div");
					colDiv.className = "card mb-3";
					colDiv.appendChild(cardDiv);
					myFlash.appendChild(colDiv);
			};
			const showSkills = function(key, json)
			{        
					let myFlash = document.getElementsByClassName("container")[1];
					let cardDiv = document.createElement("div");
					cardDiv.className = "card border-dark";
					let cardBody1 = document.createElement("div");
					let h5tag = document.createElement("h5");
					let para = document.createElement("p");
					h5tag.className = "card-title";
					para.className = "card-text";
					//decided the inner text for each para and h5 tag, and the headerDiv text 
					h5tag.innerText = key.toUpperCase().substring(0,1) + key.substring(1);
					para.innerText = json[key].join(", ");
					cardBody1.className = "card-body text-dark";
					cardBody1.appendChild(h5tag);
					cardBody1.appendChild(para);
					cardDiv.appendChild(cardBody1);
					let colDiv = document.createElement("div");
					colDiv.className = "card mb-3";
					colDiv.appendChild(cardDiv);
					myFlash.appendChild(colDiv);
			};
			const showBasics = 	function(key, json)
			{
				//make a bootstrap card here, and for card text, just sepearte each key-val pair with \n in the p element
				let myFlash = document.getElementsByClassName("container")[1];
					let cardDiv = document.createElement("div");
					cardDiv.className = "card border-dark";
					let cardBody1 = document.createElement("div");
					let h5tag = document.createElement("h5");
					let para = document.createElement("p");
					h5tag.className = "card-title";
					para.className = "card-text";
					h5tag.innerText = key.toUpperCase().substring(0,1) + key.substring(1);
					let arr = Object.keys(json[key]);
					let emptyStr = "";
					//run a for loop hrere 
					for(let i = 0; i < arr.length; i++)
					{
						let attachStr = json[key][arr[i]];
						if(attachStr.length >= 5 && attachStr.substring(0,5) === "https")
							{
								// //creat andcor tage, innHTML = attachStr 
								// let anchorT = document.createElement("a");
								// anchorT.href = attachStr;
								// anchorT.innerText = attachStr;
								// attachStr = anchorT;
								attachStr = `<a href = ${attachStr}>${attachStr}</a>`;
							}
						emptyStr = emptyStr + "<b>" + arr[i].substring(0,1).toUpperCase()  + arr[i].substring(1) + "</b>" + ": " + attachStr + "<br>";
					}
					para.innerHTML = emptyStr;
					cardBody1.className = "card-body text-dark";
					cardBody1.appendChild(h5tag);
					cardBody1.appendChild(para);
					cardDiv.appendChild(cardBody1);
					let colDiv = document.createElement("div");
					colDiv.className = "card mb-3";
					colDiv.appendChild(cardDiv);
					myFlash.appendChild(colDiv);
			};
			const map1 = new Map();
			//store the functions as value and property as key
			for (const property in json) {
				if(property === "skills")
				{
					map1.set(property, showSkills);
				}
				else if(property === "basics")
				{
					map1.set(property, showBasics);
				}
				else
				{
					map1.set(property, showThem);
				}
			}
			//loop the map and call each key's function and call each function 
			for (const property in json) {
				map1.get(property)(property,json);
			}
		}
		function showResume()
		{
			document.querySelector(".btn-dark").removeEventListener("click", showResume);
			/*
			if value on button says sohwResume, change it to hide  and add event listener to show it 
			else value is hide resume, add eventliner to hide it, and change the button so it says show 
			*/
			/*document.querySelector(".btn-dark").addEventListener("click",function()
			{
				document.querySelector(".row").hidden = false;
			});*/
			const hideResume = function (){
				document.querySelector(".btn-danger").removeEventListener("click", hideResume);
				document.querySelectorAll(".container")[1].hidden = true;
				document.querySelector(".btn-danger").innerText = "Show Resume";
				document.querySelector(".btn-danger").className = "btn btn-dark";
				//console.log("hideResume called!");
				document.querySelector(".btn-dark").addEventListener("click", unHideResume);
			}
			const unHideResume = function (){
				document.querySelector(".btn-dark").removeEventListener("click", unHideResume);
				document.querySelectorAll(".container")[1].hidden = false;
				document.querySelector(".btn-dark").innerText = "Hide Resume";
				document.querySelector(".btn-dark").className = "btn btn-danger";
				//console.log("unHideResume called!");
				document.querySelector(".btn-danger").addEventListener("click", hideResume);
			}
			const fetchPromise = fetch('json/rs_resume.json');
			fetchPromise
			.then( response => {
				if (!response.ok) {
				throw new Error(`HTTP error: ${response.status}`);
				}
				return response.json();
			})
			.then( json => {
				console.log("json received!");
				populateResume(json);
				document.querySelector(".btn-dark").innerText = "Hide Resume";
				document.querySelector(".btn-dark").className = "btn btn-danger";
				document.querySelector(".btn-danger").addEventListener("click", hideResume);
				//put all prop. from json into allKeys in order
				const allKeys = []; 
				for (const property in json){
					allKeys.push(property);
				}
				//fill in innerHTML here 
				document.querySelector("#demo").innerText = "Loaded";
				while(allKeys.length !== 0)
				{
					//pop from allKeys - Last In First Out behavior shown here 
					document.querySelector("#demo").innerText += "..." + allKeys.pop();
				}
				//Loaded...languages......basics
				setTimeout(function(){document.querySelector("#demo").innerText = "";}, 3000);
			})
			.catch( error => {
				console.log(`Could not get products: ${error}`);
			});
		}
		document.querySelector(".btn-dark").addEventListener("click", showResume);