# Soundsboard 

This project has been done in a feature oriented way. Such that each feature is independent from each other. They can be seen as independent mini applications. Composing one larger application.

Our soundboard applications consists of a frontend application which has been developed in a feature oriented way and a backend application which has been developed without the feature-u framework and is there to support the frontend only.

## Prerequisites

1. npm
2. node
3. yarn

## How to run

We will briefly discuss how to run the application.

### Soundboard-api

The soundboard api needs a '.env' file suplied with the following variables. An auth0 account can be acquired via auth0. 
```
PORT=4000
AUTH0_SECRET=string
AUTH0_CLIENT_ID=string
AUTH0_ISSUER=string
```

after suplying the necesarry .env variable file, we can run the `yarn` command to initialize all `node_modules`. Then to run the backend application run `yarn start`. The backend will run on the suplied port 4000 in this case.
Note that a soundboard.db will be created after running the commands.

### Soundboard-frontend

Before running the meat of this application we need to set the environment file for the frontend. Make sure the `REACT_APP_API_ENDPOINT` matches the backend api with port. Locally this would be http://localhost:4000. 

```
SKIP_PREFLIGHT_CHECK=true
DISABLE_ESLINT_PLUGIN=true

REACT_APP_AUTH0_DOMAIN=string
REACT_APP_AUTH0_CLIENT_ID=string
REACT_APP_AUTH0_SECRET=string

REACT_APP_API_ENDPOINT=http://localhost:4000
```

Since this frontend is developed with feature-u framework, all the features are literlly plug and play. With the configuration file each feature is enabled with value true and disabled with value false. See below for an example of the current configuration. 
```
<configuration>
    <feature name="SoundUpload" enabled="true" />
    <feature name="VoiceRecording" enabled="true" />
    <feature name="SoundPlayback" enabled="true" />
    <feature name="TTS" enabled="true" />

    <feature name="Search" enabled="true" />
    <feature name="Categories" enabled="false" />
    <feature name="Pagination" enabled="true" />
    <feature name="Theming" enabled="true" />

    <feature name="Account" enabled="true" />
    <feature name="Sharing" enabled="true" />
    <feature name="Favorites" enabled="true" />
</configuration>
```

In order to test configurations in an automated way we have used a testing framework called jest. The tests can be run with the command: `yarn test`.