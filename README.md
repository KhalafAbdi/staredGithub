# Stared Github

Stared github is a small project to view 1000 most stared github projects. The project was only run and tested on an android emulator.

## Installation
To run this on an android emulator, clone the repository and run.

```bash
 npx react-native run-android
```

## How it works

Opening the app, you will see on each page 5 repositories. Starting from top 5. Using the pagination you can view the rest of the list. 

Pressing on a repository, you will be directed to a details page, displaying extra stats for the given repository. Clicking on the title will open a new window, taking you to the given github page, and clicking the owner will take you to the creators github profile. 

On every repository, there is a clickable heart. This heart is also displayed in the details page. Pressing this, anywhere you see it will add/remove it to your favorites list.

On the bottom of the app, there are to tabs, clicking on the heart will take you to a list of all your favorite repositories.


## Technologies

- [React native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React navigation](https://reactnavigation.org/)
- [axios](https://www.axios.com/)
- [mobx / mobx-react-lite](https://mobx.js.org/actions.html)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/docs/install/)
