# KitonCLI architecture

KitonCLI should stay as an orchestration layer, not a fork of framework starters.

## Command flow

1. Ask for the framework and target directory.
2. Resolve the matching framework installer.
3. Run the official project bootstrap step for that framework.
4. Run post-create plugins against the generated project.
5. Validate the result and finish with a ready-to-use app.

## Responsibilities

### Installers

Installers own the framework-specific project creation step.

They should:

- translate user answers into the official generator invocation
- keep framework quirks isolated from the rest of the CLI
- expose a stable interface to the orchestration layer

They should not:

- install auth, database, UI, or deployment tooling
- know about other frameworks
- embed long-term project conventions that the framework already owns

### Plugins

Plugins own post-create transformation.

They should:

- install or configure capabilities like auth, database, UI, and deployment
- operate on a generated project rather than on a template
- be composable and order-aware when a plugin depends on another plugin

They should not:

- create the base framework project
- assume a single framework unless they explicitly target one
- duplicate framework scaffolding logic

### Core

The core layer should only coordinate prompts, installer selection, plugin execution, and validation.

## Suggested folder layout

```text
src/
  core/
  installers/
  plugins/
  prompts/
  utils/
```

## Why this is the right boundary

Framework generators change frequently. Plugins and post-processing rules change less often. Keeping those concerns separate lets KitonCLI stay aligned with upstream tooling without turning the repo into a copy of each framework starter.