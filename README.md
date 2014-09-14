Opinionated default setup for NodeJS projects.

## What's inside?

* [bunyan](https://github.com/trentm/node-bunyan) - logging library with DTrace support ([why it's good](https://github.com/trentm/node-bunyan#runtime-log-snooping-via-dtrace)).
* [node-coveralls](https://github.com/cainus/node-coveralls) - [coveralls.io](https://coveralls.io/) support for github-based projects, compatible with all major code coverage tools.
* [longjohn](https://github.com/mattinsler/longjohn) - Long stack traces

## What you need/can modify before starting to hack

* `.gitignore` - contains basic patterns for NodeJS projects, OSX, JetBrains IDEs and SublimeText. You may need to modify some of the values (`node_modules` are not checked in by default).
* `.travis.yml` - contains `0.11` and `0.10` node binary versions.
* `.coveralls.yml` - contains `travis-ci` as a targeted CI server. 
* `.editorconfig` - all files uses **tab** **2 spaces** indentation