# Heroku Setup

- 08/30/2021 removed .htaccess and updated Procfile to use public_html as docroot
- Profile tells Heroku how to deploy
- Composer.json mentions what libraries will be used 
- public_html contains all public facing content
- partials will be templates/partial pages that will NOT be accessed directly (still can reference via code)
- lib will be custom functions/libraries/etc that will NOT be accessed directly (still can be referenced via code)
- All work will be subfolders inside public_html (for the most part), lib will contain reusable functionality, partials will contain reusable templates, nothing else should change.

# Stages of Improvement 
## Jan 2021
https://user-images.githubusercontent.com/68120349/159078797-deb7c9bc-3aab-490d-af49-32a00ee3efa2.mp4
## March 2022 

## To be continued... 
