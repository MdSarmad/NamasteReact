# ASSIGNMENT 2

# Q1. What is npm?
npm is a package manager to share and download open-source node.js projects. it is also used as a command to install packages, version management and dependency management.

# Q2. What is parcel/webpack? Why do we need it?
Parcel and Webpack are bundlers for JavaScript or Typescript code which is used for minimizing, cleaning and making our code understand to all the browsers. It provides many features like hot reloading, tree shaing and used to run JavaScript or Typescript code.

# What is .parcel-cache?
.parchel-cache folder is created by parcel while running build scripts. it is used to cache the code and utilizing it during rebuilds which makes parcel faster bundler in comparision to other bundlers.

# What is npx?
npx is a package executer of node. It is used to execute npm commands without installing it. npx can also be called as a npm code runner.

# Difference between dependencies and dev-dependencies
depedencies in package.json file are the packages which are required to run tha program while dev-dependencies are the packages which is used only during the development to make development smooth.

# What is Tree Shaking?
Tree shaking is the process of removal of dead and unnecessary code present in the source of a program used by module bundlers.

# What is Hot Module Replacement?
Hot Module Replacement is a process of adding, updating or removing a piece of code used by bundlers while application is running.

# What is .gitignore file and what should we add and we don't add into it?
.gitignore is a file is used to ignore the files and folders while pushing it to github. we should not put files and folders like .parcel-cache, node-modules, and .env files while other can be push to github.

# Difference between package.json and package-lock.json?
package.json file gives us the information about what are the packages installed in our application and ^ sign in front of package version denotes that any version above the given version will support this code while package-lock.json file gives us the exact information about the version installed and what are the dependencies required to run the package. while running script "npm install" it will install the exact version that is given in the package-lock.json file.

# Why should we not modify package-lock.json file.
package-lock.json file stores the information about the exact version of package downloaded and dependencies required to run the package. Changes in package-lock.json file may lead unexpected results.

# What is node_modules? Is it a good idea to push that on git?
node_modules is a directory to track packages which is installed locally via package.json. We should not push node_modules on git since it is larger in size and can be generated from package.json file.

# What is the dist folder?
dist folder contains transpiled code of the built files and folders that can be hoisted on the server.

# What is browserlists

# What is <noscript> tag in the index.html of create-react-app?
<noscript> in index.html tag is used to display it's content when javascript is not enabled in the browser. since React requires javascript enabled in browser.


# What is the role of manifest.json file in create-react-app?
manifest.json file gives us the information/bio-data regarding create-react-app.