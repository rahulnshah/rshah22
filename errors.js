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

class CharacterCountExceeded extends Error { // parent error
    constructor(message) {
        super(message);
        this.name = this.constructor.name // good practice
        this.statusCode = 500 // error code for responding to client
        if(this instanceof LongSubjectError)
        {
            this.type = 'subject';
        }
        else if(this instanceof LongTextError)
        {
            this.type = 'text';
        }
    }
  }
  
  // extending to child error classes
  class LongSubjectError extends CharacterCountExceeded { 
    constructor(content) {
        super(`The character count of subject \'${content}\' is too long. (${content.length} characters)`);
    }
  }
  class LongTextError extends CharacterCountExceeded { 
    constructor(content) {
        super(`The character count of text \'${content}\' is too long. (${content.length} characters)`);
    }
  }

module.exports = {
    ProjectPageError,
    ProjectsInaccesibleError,
    CharacterCountExceeded,
    LongSubjectError,
    LongTextError
};