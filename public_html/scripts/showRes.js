function showBasics(key, json)
		{
			//make a bootstrap card here, and for card text, just sepearte each key-val pair with \n in the p element
			let myFlash = document.getElementsByClassName("row")[0];
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
				colDiv.className = "col-6";
				colDiv.appendChild(cardDiv);
				myFlash.appendChild(colDiv);
		}
		function showSkills(key, json)
		{        
				let myFlash = document.getElementsByClassName("row")[0];
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
				colDiv.className = "col-6";
				colDiv.appendChild(cardDiv);
				myFlash.appendChild(colDiv);
		}
		function showThem(key, json)
		{
			//you have a list of objects
			let myFlash = document.getElementsByClassName("row")[0]; 
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
				colDiv.className = "col-6";
				colDiv.appendChild(cardDiv);
				myFlash.appendChild(colDiv);
		}
		function populateResume(json)
		{
			showThem("education",json);
			showThem("experience",json);
			showBasics("basics",json);
			showSkills("skills", json);
			showThem("profiles", json);
			showThem("languages",json);
			showThem("awards", json);
		}
		function showResume()
		{
			document.querySelector(".btn-dark").removeEventListener("click", showResume);
			document.querySelector(".btn-dark").addEventListener("click",function()
			{
				document.querySelector(".row").hidden = false;
			});
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
				let hideButton = document.createElement("button");
				hideButton.innerText = "Hide Resume";
				hideButton.type = "button";
				hideButton.className = "btn btn-danger";
				let btnDiv = document.querySelector(".col-md-12");
				btnDiv.appendChild(hideButton);
				hideButton.addEventListener("click",function()
				{
					document.querySelector(".row").hidden = true;
				});
			})
			.catch( error => {
				console.log(`Could not get products: ${error}`);
			});
		}
		document.querySelector(".btn-dark").addEventListener("click", showResume);