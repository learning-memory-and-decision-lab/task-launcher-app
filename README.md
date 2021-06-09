# task-launcher-app

Landing page with links/buttons to go to tasks

## Getting Started

1. Clone this repo onto your computer
```
git clone https://github.com/brown-ccv/task-launcher-app
```
2. Change directory into the new folder
```
cd task-launcher-app
```
1. Install the dependencies
```
npm install
```
4. Run the app
```
npm start
```
## Configuring Tasks

1. Copy task logo to `/src/logos/` directory.

2. Navigate to and open `/src/App.js`
   
3. Edit `tasks` array on the top of the file by adding or deleting json objects with the following format
```
{ 
    name: "<task name>",
    logoImport: import("./logos/<logo file name>"),
    link: "<task website>",
}
```
