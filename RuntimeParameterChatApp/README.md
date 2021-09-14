# RuntimeParameterChatApp
This file serves as an explanation of choices made in this system.

## Feature selection
The features are selected by changing a config file (/recources/feature-config).

### Invalid feature selection
Invalid feature selection isn't possible with the current features. If this can happen in the future it can be prevented by doing some checks in the config class when the program is being run.

## Configuration sharing
The configuration is shared through a global variable throughout the app. In my opinion global variables are fine as long as they represent the app state. Though in this case the most prominent argument for using global variables is consistency. I think consistency in choices is very important for software. And since we already used global variables for other purposes, it makes sense to do so for this purpose.