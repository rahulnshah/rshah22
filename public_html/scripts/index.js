"use strict";
import {GitHubRepository} from './githubRepo.js';
function getRequest() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            let data = JSON.parse(this.responseText);
            //console.log(data);
            //console.log(data); //this is json 
            //console.log("received data", data); //comment this out - delete this line 
            let dummyCardName = "Dummy Card";
            let dummyCardDescription = "This is always present, even when the circular doubly linked list is empty. A circular doubly linked list eliminates special cases for insertion and deletion. Inserting into and deleting from the first or last position is the same as for any other position. It is only a matter of determining where to locate the curr reference in the list.";
            let dummyCardUrl = "#";
            const dummyCard = new GitHubRepository(dummyCardName, dummyCardDescription, dummyCardUrl);
            //listHead references dummyCard; don't move it 
            dummyCard.convertToCard();
            const listHead = dummyCard;
            //another object called curr also references dummyCard; it will moving forward; can set it to reference listHead and it 
            //would mean the same thing
            let curr = dummyCard;
            //loop data 
            for (let repo of data.items) {
                let name = repo.name;
                let description = repo.description;
                let url = repo.html_url;
                let aRepo = new GitHubRepository(name,description,url);
                //console.log(aRepo.getRepoName());
                aRepo.setPreviousRepository(curr);
                curr.setNextRepository(aRepo);
                //using  exclamation mark or the non-null assertion operator in TypeScript to tell that the assign value 
                //is 100% not undefined in this case
                curr = curr.getNextRepository();
            }
            curr.setNextRepository(listHead);
            listHead.setPreviousRepository(curr);
            curr = curr.getNextRepository(); //listHead and curr now point to the Dummy Card
            const nextBtn = document.createElement("button");
            const previousBtn = document.createElement("button"); 
            nextBtn.innerText = "See Next Project";
            previousBtn.innerText = "See Previous Project";
            nextBtn.className = "btn btn-primary";
            previousBtn.className = "btn btn-primary";
            let totalCards = data.items.length + 1;
            nextBtn.addEventListener("click", function(){
                curr = curr.getNextRepository();
                //reset count 0 1 2 3 0 1 2 3 
                GitHubRepository.count = (GitHubRepository.count + 1) % totalCards;  //length of list of objects
                curr.convertToCard();
                document.getElementsByClassName("text-muted")[0].innerText += `/${totalCards}`;
            });
            previousBtn.addEventListener("click", function(){
                curr = curr.getPreviousRepository();
                GitHubRepository.count = GitHubRepository.count - 1 < 0 ? totalCards - 1 : (GitHubRepository.count - 1) % totalCards;  //length of list of objects
                curr.convertToCard();
                document.getElementsByClassName("text-muted")[0].innerText += `/${totalCards}`;
            });
            document.getElementsByClassName("col-md-12")[0].prepend(previousBtn);
            document.getElementsByClassName("col-md-12")[0].appendChild(nextBtn);
        }
    }
    xhttp.open("GET", "../showvars.php");
    xhttp.send();//notice no parameters
}
getRequest();