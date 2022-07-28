# task-launcher-app

This repository is for a landing page app with links/buttons to go to tasks for the Brown [Learning Memory and Decision Lab](https://sites.brown.edu/mattlab/).  It's based on the [task-launcher-app](https://github.com/brown-ccv/task-launcher-app) created by the Brown [Center for Computation and Visualization](https://ccv.brown.edu/).

# Configuring Tasks

To add a new task to the landing page, clone this repository, make a few small edits, and push the changes back up (or make a pull request).  The [landing page](https://nassar-task-launcher.web.app/) will be automatically re-deployed with the changes you made.

The changes you need to make are to add a logo, and add task info.

## add logo
Copy the task logo into the `/src/logos/` directory.

## add task info
Navigate to and open `/src/App.js`.  Edit the `tasks` array on the top of the file by adding or deleting json objects with the following format:

```
{ 
    name: "<task name>",
    logoImport: import("./logos/<logo file name>"),
    link: "<task website>",
}
```

# Inital Setup with Firebase and GitHub

This section lists out the steps that were used to set up the landing page for the Learning Memory and Decision Lab, starting from the original [task-launcher-app](https://github.com/brown-ccv/task-launcher-app) repo from Brown CCV.

Everything below here should be one-time setup that's already done.  It's included for those who are interested, and those who might want to do something similar!

## Firebase setup

The landing page is hosted at Google Firebase.  Here's how we set up the Firebase part:

 - create a Firebase project called `nassar-task-launcher`
 - visit the [Firebase console for this project](https://console.firebase.google.com/project/nassar-task-launcher/overview)
 - click the `</>` button to add a new "Web" app
 - name the app `nassar-task-launcher`, same as the project
 - check yes, to "Also set up Firebase Hosting for this app"
 - click "Register App"
 - click the rest of the way through, including "Next" and "Continue to console"

## Edits to the app code

Here's how we modified the app code in this repo.

### edit `.firebaserc`

Change the default app name to `nassar-task-launcher`:

 ```
 {
  "projects": {
    "default": "nassar-task-launcher"
  }
}
 ```

### add a logo
Add a new logo, `src/logos/learning-memory-and-decision-lab.png`.

Remove a few existing logos:
 - `src/logos/beads.svg`
 - `src/logos/msit.svg`
 - `src/logos/provocation.svg`

### edit `src/App.js`
Change the `tasks` array near the top of the file to refer to the tasks(s) for the Learning Memory and Decision Lab.

```
const tasks = [
  {
    name: "Pilot",
    logoImport: import("./logos/learning-memory-and-decision-lab.png"),
    link: "https://nassar-honeycomb-pilot.web.app/",
  }
];
```

## GitHub setup

This project uses GitHub Actions to automatically deploy code changes from GitHub to Firebase.  There's existing tooling to make this easy.  Here are the [official docs](https://github.com/FirebaseExtended/action-hosting-deploy/blob/main/docs/service-account.md).

And now here's a quick summary.  In a terminal:

 - install the [Firebase Command Line Tools](https://firebase.google.com/docs/cli): `npm install -g firebase-tools`
 - authenticate with firebase: `firebase login` and follow OAuth flow in browser
 - `cd` to this folder
 - generate deploy scripts for the app: `firebase init hosting:github --project nassar-task-launcher`
 - Follow the prompts:
   - For which GitHub repository would you like to set up a GitHub workflow?: `learning-memory-and-decision-lab/task-launcher-app`
   - Set up the workflow to run a build script before every deploy?: `y`
   - What script should be run before every deploy?: `npm ci && npm run build`
   - GitHub workflow file for PR previews exists. Overwrite? firebase-hosting-pull-request.yml: `y`
   - Set up automatic deployment to your site's live channel when a PR is merged?: `y`
   - What is the name of the GitHub branch associated with your site's live channel?: `main`
   - The GitHub workflow file for deploying to the live channel already exists. Overwrite? firebase-hosting-merge.yml: `y`

For the automatic deploys to work, enable actions on the GitHub repo.
 - visit the repo on GitHub: https://github.com/learning-memory-and-decision-lab/task-launcher-app
 - click the "Actions" tab
 - click "I understand my workflows, go ahead and enable them"

## First deploy

### update package metadata

Let `npm` do a one-time update of package metadata in `package-lock.json`:
 - `npm install`

### commit and push

With all that setup, the app should be ready to deploy.
 - stage changes we just made in git: `git add .`
 - review the changes: `git diff --staged`
 - commit the changes: `git commit -m "Set up for Learning Memory and Decision Lab and Firebase deploys"`
 - push and trigger the deploy: `git push`
 - observe the [deploy Action](https://github.com/learning-memory-and-decision-lab/task-launcher-app/actions) running at GitHub
 - when the Actions are complete, visit the actual [landing page](https://nassar-task-launcher.web.app/)

## Future deploys

From here, future deploys should be automated.  Each push to the repo on GitHub (or PR merge to the `main` branch) will result in a fresh deploy of the landing page over on Firebase.
