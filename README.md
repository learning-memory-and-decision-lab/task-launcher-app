# task-launcher-app

This repository is for a landing page app with links/buttons to go to tasks for the Brown [Learning Memory and Decision Lab](https://sites.brown.edu/mattlab/).  It's based on the [task-launcher-app](https://github.com/brown-ccv/task-launcher-app) created by the Brown Center for [Computation and Visualization](https://ccv.brown.edu/).

# Configuring Tasks

To add a new task to the landing page, clone this repository, make a few edits (described below), and push the changes back up (or make a pull request).  The [landing page](https://nassar-task-launcher.web.app/) will be automatically re-deployed with the changes you made.

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

# Setup

This section contains the steps that were used to set up the landing page for the Learning Memory and Decision Lab, starting from the original [task-launcher-app](https://github.com/brown-ccv/task-launcher-app) repo created by Brown CCV.

## Firebase setup

The landing page is hosted at Google Firebase.  Here's how we set up the Firebase part:

 - create a Firebase project called "nassar-task-launcher"
 - visist the [Firebase console for this project](https://console.firebase.google.com/project/nassar-task-launcher/overview)
 - click the `</>` button to add a new "Web" app
 - name the app `nassar-task-launcher`, same as the project
 - check yes, to "Also set up Firebase Hosting for this app"
 - click "Register App"
 - click the rest of the way through, through "Next", and "Continue to console"

## Edits to the app code

Here's how we modified the app code in this repo to integrate with Firebase.

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

## GitHub deploy setup

This project uses GitHub Actions to automatically deploy code changes from GitHub to Firebase.

There's existing tooling to make this easy.  Here are the [official docs](https://github.com/FirebaseExtended/action-hosting-deploy/blob/main/docs/service-account.md) and here's a quick summary.

In a terminal:
 - install the [Firebase Command Line Tools](https://firebase.google.com/docs/cli): `npm install -g firebase-tools`
 - authenticate with firebase: `firebase login` and follow OAuth flow in browser
 - `cd` to this folder
 - generate deploy scripts for this app: `firebase init hosting:github --project nassar-task-launcher`
   - For which GitHub repository would you like to set up a GitHub workflow?: `learning-memory-and-decision-lab/task-launcher-app`
   - Set up the workflow to run a build script before every deploy?: `y`
   - What script should be run before every deploy?: `npm ci && npm run build`
   - GitHub workflow file for PR previews exists. Overwrite? firebase-hosting-pull-request.yml: `y`
   - Set up automatic deployment to your site's live channel when a PR is merged?: `y`
   - What is the name of the GitHub branch associated with your site's live channel?: `main`
   - The GitHub workflow file for deploying to the live channel already exists. Overwrite? firebase-hosting-merge.yml: `y`



Edit firebase-hosting-pull-request.yml and firebase-hosting-merge.yml
projectId: hello-task-launcher

Looks like I need a service account token like
FIREBASE_SERVICE_ACCOUNT_BORTON_TASK_LAUNCHER
looks like the Action thing documents how to set this up
https://github.com/FirebaseExtended/action-hosting-deploy/blob/main/docs/service-account.md
firebase init hosting:github
benjamin-heasly/task-launcher-app
✔  Created service account github-action-516788838 with Firebase Hosting admin permissions.
✔  Uploaded service account JSON to GitHub as secret FIREBASE_SERVICE_ACCOUNT_HELLO_TASK_LAUNCHER.
i  You can manage your secrets at https://github.com/benjamin-heasly/task-launcher-app/settings/secrets.
accept defaults and overwrite existing github action scripts
Enable actions on the repo

I'll add my own app
https://hello-honeycomb.web.app/
I'll use my sweet tripledip logo!

const tasks = [
  {
    name: "Hello",
    logoImport: import("./logos/tripledip-logo.drawio.svg"),
    link: "https://hello-honeycomb.web.app/",
  }
];
