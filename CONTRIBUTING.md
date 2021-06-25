Thanks for showing interest to contribute to Keywrite

When it comes to open source, there are different ways you can contribute, all
of which are valuable. Here's a few guidelines that should help you as you
prepare your contribution.

## Setup the Project

The following steps will get you up and running to contribute to Keywrite:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of
   [this page](https://github.com/eyuelberga/keywrite))

2. Clone your fork locally

```sh
git clone https://github.com/<your_github_username>/keywrite.git
cd keywrite
```

3. Setup all the dependencies and packages by running `yarn install`. This
   command will install dependencies for the repo.

## Development

Keywrite uses a monorepo structure and we treat each component has an independent package
that can be consumed in isolation.

### Tooling

-   [Lerna](https://lerna.js.org/) to manage installation of dependencies and
    running various scripts. We also have yarn workspaces enabled by default.
-   [Changeset](https://github.com/atlassian/changesets) for changes
    documentation, changelog generation, and release management.

### Commands

**`yarn lint`**: lint all packages.

**`yarn build`**: run build for all packages.

**`yarn test`**: run test for all packages.

**`yarn release`**: publish changed packages.

#### Yarn Workspace

Since we're using yarn workspaces, this enables us
to run commands within packages directly from the root.

Each package is named this way: `@keywrite/[package]`. Let's say we want to
build the core package. Here's how to do it:

```bash
yarn workspace @keywrite/core build

```

## Think you found a bug?

Please conform to the issue template and provide a clear path to reproduction
with a code example.

## Proposing new or changed API?

Please provide thoughtful comments and some sample API code. Proposals that
don't line up with our roadmap or don't have a thoughtful explanation will be
closed.

## Making a Pull Request?

Pull requests will be merged after passing all status checks.

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

-   `feat / feature`: all changes that introduce completely new code or new
    features
-   `fix`: changes that fix a bug (ideally you will additionally reference an
    issue if present)
-   `refactor`: any code related change that is not a fix nor a feature
-   `docs`: changing existing or creating new documentation (i.e. README, docs for
    usage of a lib or cli usage)
-   `build`: all changes regarding the build of the software, changes to
    dependencies or the addition of new dependencies
-   `test`: all changes regarding tests (adding new tests or changing existing
    ones)
-   `ci`: all changes regarding the configuration of continuous integration (i.e.
    github actions, ci system)
-   `chore`: all changes to the repository that do not fit into any of the above
    categories

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

### Steps to PR

1. Fork of the keywrite repository and clone your fork

2. Create a new branch out of the `develop` branch. We follow the convention
   `[type/scope]`. For example `fix/core` or `docs/title-typo`. `type`
   can be either `docs`, `fix`, `feat`, `build`, or any other conventional
   commit type. `scope` is just a short id that describes the scope of work.

3. Make and commit your changes following the
   [commit convention](https://github.com/keywrite/keywrite/blob/main/CONTRIBUTING.md#commit-convention).
   As you develop, you can run `yarn workspace @keywrite/<module> build` and
   `yarn workspace @keywrite/<module> test` to make sure everything works as expected. Please
   note that you might have to run `yarn install` first in order to build all
   dependencies.

4. Run `yarn changeset` to create a detailed description of your changes. This
   will be used to generate a changelog when we publish an update.
   [Learn more about Changeset](https://github.com/atlassian/changesets/tree/main/packages/cli).
   Please note that you might have to run `git fetch origin main:main`
   (where origin will be your fork on GitHub) before `yarn changeset` works.

> If you made minor changes like CI config, prettier, etc, you can run
> `yarn changeset add --empty` to generate an empty changeset file to document
> your changes.

### Tests

All commits that fix bugs or add features need a test.

## License

By contributing your code to the keywrite GitHub repository, you agree to
license your contribution under the MIT license.
