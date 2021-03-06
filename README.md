# Superdesk Client 
[![Build Status](https://travis-ci.org/superdesk/superdesk-client.png?branch=master)](https://travis-ci.org/superdesk/superdesk-client)
[![devDependency Status](https://david-dm.org/superdesk/superdesk-client/dev-status.png)](https://david-dm.org/superdesk/superdesk-client#info=devDependencies)

Superdesk Client is ui for Superdesk REST API server.

### install tools

with node.js and git installed, you can install the base tools globally:

    npm install -g grunt-cli

### install dependencies

    npm install

### install bower components

    bower install

### run dev server

    grunt server

### run tests

    npm test

## Info for contributors

### Commit messages

Every commit has to have a meaningful commit message in form:

```
Title
<empty line>
Description
<empty line>
JIRA ref
```

Where [JIRA ref](https://confluence.atlassian.com/display/FISHEYE/Using+smart+commits) is at least Issue code eg. ```SDUX-13```.

For trivial changes you can ommit JIRA ref or Description or both:

```
Fix typo in superdesk.translate docs.
```

### Register main menu item

In your app use ```superdeskProvider``` and register an activity with ```superdeskProvider.MENU_MAIN``` category.

```js
angular.module('myApp').configure(function(superdeskProvider) {
    superdeskProvider.activity('myActivity', {
        label: gettext('Test Activity'),
        href: '/test/',
        category: superdeskProvider.MENU_MAIN,
        controller: ...,
        template: ...
    });
});

```

### Register widget

In your app use ```superdeskProvider.widget```.

```js
angular.module('myApp').configure(function(superdeskProvider) {
    superdeskProvider.widget('myWidget', {
        label: 'My Widget',
        template: 'scripts/my-app/views/my-widget.html',
        thumbnail: 'scripts/my-app/views/my-widget.png',
        description: 'My Widget'
    });
});
```

### Creating new directives

- Define attribute directives, not element or css based.
- Use sd as a namespace for every directive.

```html
<!-- RIGHT -->
<div sd-datepicker ...></div>

<!-- WRONG: element directive -->
<sd-datepicker></sd-datepicker>

<!-- WRONG: css directive -->
<div class="sd-datepicker"></div>

<!-- WRONG: missing namespace prefix -->
<div datepicker></div>
```

### Localization

All string has to be translated, so make sure to [annotate](http://angular-gettext.rocketeer.be/dev-guide/annotate/) all string in html.

#### Menu label translations

For translating menu items (and in general anything in angular config phase), use global gettext function:

```js
{menu: {label: gettext('Users')}}
```

This will only register the string, so make sure to annotate this data for translations later.

#### Translating strings in controllers/services

Use ```superdesk.services.translate``` module as dependency, which provides ```gettext``` service.

```js
angular.module('mymod', ['superdesk.services.translate']).
    .controller('myController', function($scope, gettext) {
         $scope.msg = gettext("Translate this message");
    });
```
