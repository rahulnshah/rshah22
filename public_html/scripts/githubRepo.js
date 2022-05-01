"use strict";
//classes 
export class GitHubRepository {
    constructor(repositoryName, repositoryDescription, repositoryUrl) {
        this.repositoryName = repositoryName;
        this.repositoryUrl = repositoryUrl;
        if (repositoryDescription) {
            this.repositoryDescription = repositoryDescription;
        }
        else {
            this.repositoryDescription = "No description provided";
        }
    }
    setNextRepository(repository) {
        this.nextRepository = repository;
    }
    setPreviousRepository(repository) {
        this.previousRespository = repository;
    }
    getNextRepository() {
        return this.nextRepository;
    }
    getPreviousRepository() {
        return this.previousRespository;
    }
    convertToCard() {
        //write code to display the details of a repo on a bootstrap card 
    }
    displayName() {
        console.log(this.repositoryName + " " + this.repositoryDescription + " " + this.repositoryUrl);
    }
}
