# Proposal: Soundboard app software product line refactor
*Written by: Twan, Tuan-anh and Stef*

In this document we propose our subject for the final project of software product lines. In this proposal we want to create a new project from scratch with a feature oriented approach.

## Context

We want to create a soundboard webapp in a feature oriented way. A soundboard is an application in which sounds can be played back. An example of this can be found here: [Soundboard example](https://www.myinstants.com/categories/sound%20effects/).

## Motivation

Some people just want a simple soundboard that can only play sounds. Others want more control over the sounds that are played, which is one of the features we can monetize if we split up the application in features. With a feature oriented approach we can easily monotize these different features.

## Methodology

We will use the [feature-u library](https://github.com/KevinAst/feature-u) to manage our different features, much like featurehouse. With feature-u we can seperate all features into their own files, we can then change the features that are used either in run-time with react hooks or we can change them in the configuration.

## Areas of responsibility

* Twan: Layout, Search and Navigation 
    * searchbar
    * categories
    * pagination
    * theming
* Tuan-Anh: Sound
    * text-to-speech
    * uploading mp3
    * voice recording
    * play control
* Stef: Account & Social
    * account 
    * sharing
    * favorites

## First milestone
Our first milestone will be to have the skeleton of the app running with feature-u where we have atleast one, above mentioned, feature from each area of responsibility running.