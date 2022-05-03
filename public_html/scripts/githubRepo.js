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
    getRepoName() {
        return this.repositoryName;
    }
    getRepoDescription() {
        return this.repositoryDescription;
    }
    getRepoUrl() {
        return this.repositoryUrl;
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
        let projectDiv = document.getElementsByClassName("card")[0]; 
        projectDiv.innerHTML = `
                                <div class="card-header">
                                    Featured
                                </div>
                                <div class="card border-dark">
                                    <div class="card-body text-dark">
                                        <h5 class="card-title">${this.getRepoName()}</h5>
                                        <p class="card-text">${this.getRepoDescription()}</p>
                                        ${this.getRepoUrl() === "#" ? "" : `<a href=${this.getRepoUrl()} class="btn btn-primary">Open in Github</a>`}
                                    </div>
                                </div>
                                <div class="card-footer text-muted">
                                    Featured
                                </div>
                            `;
    }
    displayName() {
        console.log(this.repositoryName + " " + this.repositoryDescription + " " + this.repositoryUrl);
    }
}
