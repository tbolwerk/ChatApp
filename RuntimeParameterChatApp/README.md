# RuntimeParameterChatApp
This file serves as an explanation of choices made in this system.

## Feature selection
The features are selected by changing a .env file. This way of selection features was chosen because of an intreset in using .env in Java. It probably isn't the best place to change these features, but it can be used for features that need to be changed per environment.

### User perspective
The user needs to change the feature selection in the .env file by changing features from "true" to "false" or vice versa to turn them on or off. This probabbly isn't so nice for users of the client. But for the maintainers of the server it will be a nice solution.

### Invalid feature selection
Invalid feature selection isn't possible with the current features. If this can happen in the future it can be prevented by doing some checks in the configuration class when the program is being run. If a configuration turns out to be invalid an error can be thrown.

## Configuration sharing (global vs parameter passing)
The configuration is shared through a global variable throughout the app. In my opinion global variables are fine as long as they represent the app state. Though in this case the most prominent argument for using global variables is consistency. I think consistency in choices is very important for software. And since we already used global variables for other purposes, it makes sense to do so for this purpose.