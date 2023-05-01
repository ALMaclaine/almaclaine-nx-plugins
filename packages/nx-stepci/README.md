# nx-stepci

This library was generated with [Nx](https://nx.dev).

## generators
- init
- generate

### init
Adds stepci-run target to project.json and generates a basic workflow.yml

#### command
`nx g @almaclaine/nx-stepci:init --name <project>`

#### options
- name: name of the project to setup

### generate
Generates a new workflow file based on a provided spec.

#### command
`nx g @almaclaine/nx-stepci:generate --name <project> --spec <spec> --workflow <workflow>`

#### options
- name: name of the project to setup
- spec: path to a spec file to use
- workflow: name of the workflow file to generate

## executors
- run

### run
Runs a workflow file

#### command
`nx run <project>:run --workflow <workflow>`

#### options
- workflow: name of the workflow file to run
