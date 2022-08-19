# react-bsm
Basic State Manager hooks for react

## Overview
ReactBSM is a tiny library that makes it easy to handle local state throughout you React 
components without having to use more complex (but also awesome) solutions like Redux, 
MobX,
or Context.
It 
works best when used alongside something like [React Query](https://react-query.tanstack.com) 
for data fetching/caching from the server.

This library started when, for a new project, we decided to go with minimalistic 
single purpose tooling. Using React Query for handling server data/state we couldn't 
really justify bringing in the full Redux ecosystem for handling just local state.

For form handling we skipped the usual suspects such as formik (which is also awesome) 
and redux-form and decided to go with SeBassFox's brilliant [React Basic Form Manager](https://github.com/SeBassFox/react-bfm)
(ReactBFM).
ReactBFM has a couple of very nice tricks up its sleeve to share form data. We took 
this as inspiration for creating a very simple and powerful state manager for React.

## Disclaimer
Although we have been using the precursor of ReactBSM in a very demanding production 
environment without issue for quite some time, this standalone library is in very early 
stages of development. You might want to wait with fully adopting this for your 
production environment as it stands now.

## Features
- Easily share state between components without prop drilling
- No boilerplate code for basic prop sharing
- Easily extended with [Immer](https://immerjs.github.io/immer/) to create more 
  complex Redux like behaviour
- Ready to use hooks for the most common use cases

## Installation
```shell
$ yarn add react-bsm
# or
$ npm install --save react-bsm
```