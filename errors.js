class ProjectPageError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        if (this instanceof ProjectsInaccesibleError) // deciding what type of error it should be
        {
            this.type = 'project details';
            this.statusCode = 403; // error code for responding to client
        }
    }
}

class ProjectsInaccesibleError extends ProjectPageError {
    constructor() {
        super("Projects inaccessible without access token.");
    }
}

module.exports = {
    ProjectPageError,
    ProjectsInaccesibleError
};