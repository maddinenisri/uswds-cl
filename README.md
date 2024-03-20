# React USWDS Component Library

This library is a collection of React components built using the U.S. Web Design System (USWDS). It aims to provide a set of reusable, well-tested, and accessible UI components for project developers.

## Installation

To install the library, run the following command in your project directory:

## Components

The library includes the following components:

| Components | Status  |
| ---------- | ------- |
| Alert      | &check; |
| Button     | &check; |
| Checkbox   | &check; |

Each component has its own set of props that can be used to customize its appearance and behavior.

## Contributing

We welcome contributions to the React USWDS Component Library! Please see our CONTRIBUTING.md for details on how to contribute.

## License

This project is licensed under the terms of the MIT license. See the LICENSE file for details.

## Local Environment

Setup

```sh
npm install
npm install -g nx
```

Generate Component

```sh
nx g @nrwl/react:component <COMPONENT-NAME> --project=uswds-cl --export
```

Generate Stories

```sh
# Project level
nx g @nrwl/react:stories --project=uswds-cl

# Component level
nx g @nrwl/react:stories --project=uswds-cl --componentPath=checkbox
```

Run library

```sh
nx serve
```

Test library

```sh
nx test --coverage
```

Run Storybook

```sh
nx run uswds-cl:storybook
```
