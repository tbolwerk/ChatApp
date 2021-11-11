# Proposal: Fitness app software product line refactor

In this document we propose our subject for the final project of software product lines. In this proposal we want to refactor an existing project with a feature oriented approach.

## Context

We want to refactor a fitness app to use a software product line. The fitness app allows basic features such as workout logging, which are enriched by various collaborative features. The app also has other features such as leaderboards and other social functions which can be offered in a premium version.

## Motivation

We want to work on this project because:
* It alows us to work with a programming language other than C(++) and Java.
* We want to try and apply a software product line on an mobile application.

We think this application is a good target for applying a software product line because a software product line would make it easy to monotize the app. With a software product line we can easily choose which features are paid for and to which plans they belong.

## Methodology

We're going to refactor an existing [work in progress application](https://github.com/tbolwerk/Totoro) and implement features using the [feature-u library](https://github.com/KevinAst/feature-u). Based of the account subscription and configuration we will turn features on and off during runtime of the app.


## Areas of responsibility
* Twan:
* Tuan: 
* Stef: 

1. account (credentials, username, firstname, lastname, age etc.)
2. social (parties/groups, leaderboard)
3. crud_workout (creating, deleting, updating workouts)
4. crud_exercises (creating, deleting, updating exercise)
5. executing_workout (reading all workouts, selecting workout)
6. executing_exercises (reading exercises, logging exercises)
7. progression (charts, avatar, body muscle group highlighter overview)

```graphviz
digraph FeatureModel {
 Base -> (1) account  -> (2) social
 Base -> (3) crud_workout -> (4) crud_exercises
 Base -> (5) executing_workout -> (6) executing_exercises -> (7) progression
}
```
[Feature Model](https://bit.ly/3CYnzAu)
     
