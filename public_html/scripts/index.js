import {GitHubRepository} from './githubRepo';
let dummyCardName = "dummy head node";
let dummyCardDescription = "A circular doubly linked list eliminates special cases for insertion and deletion";
let dummyCardUrl = "nonexistent";
//dummy card 
const dummyCard = new GitHubRepository(dummyCardName, dummyCardDescription, dummyCardUrl);
//listHead references dummyCard; don't move it 
const listHead = dummyCard;
//another object called curr also references dummyCard; it will moving forward; can set it to reference listHead and it 
//would mean the same thing
let curr = dummyCard;
//let the dummy card's next and prev references point to itself when circular linked list is empty 
dummyCard.setNextRepository(dummyCard);
dummyCard.setPreviousRepository(dummyCard);
//test 
let objarray = [];
objarray.push(new GitHubRepository("repo1", "This is repo 1", "This is url1"));
objarray.push(new GitHubRepository("repo2", "This is repo 2", "This is url 2"));
//now loop the objarr and make the doubly circular linked list 
for (let i = 0; i < objarray.length; i++) {
    let aRepo = objarray[i];
    aRepo.setPreviousRepository(curr);
    curr.setNextRepository(aRepo);
    //using  exclamation mark or the non-null assertion operator in TypeScript to tell that the assign value 
    //is 100% not undefined in this case
    curr = curr.getNextRepository();
}
curr.setNextRepository(listHead);
listHead.setPreviousRepository(curr);
curr.displayName(); //last object in objarr
curr = curr.getNextRepository();
curr.displayName(); //dummy Node
curr = curr.getNextRepository();
curr.displayName(); //first object in objarr
curr = curr.getNextRepository();
curr.displayName(); //last object in objarrs
// let str1: string = "as";
// let str2: string = str1;
// str1 = "as1";
// console.log(`str1: ${str1}`);
// console.log(`str2: ${str2}`);
/*Yes, you can do string desp = ""; string name = ""; string url = ""; then new GitHubRepo(desp, name, url) in a forloop*/ 
