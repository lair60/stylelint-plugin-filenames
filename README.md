# stylelint-plugin-filenames


__Please note__: This plugin will only lint the filenames of the `.css` files you are linting with stylelint. It will ignore other files that are not linted with stylelint.

Adds [stylelint](https://stylelint.io/) rules to ensure consistent filenames for your css files.

## Enabling the plugin

This plugin requires a version of `stylelint>=13.0.0` to be installed as a peer dependency.

Modify your `.stylelintrc` file to load the plugin and enable the rules you want to use.

```json
{
  "plugins": [
    "@lair60/stylelint-plugin-filenames"
  ],
  "rules": {
    "filenames/match-regex": [ 2, "^[a-z_A-Z]+(\\.css)$"]
  }
}
```

## Changelog

#### 1.0.2
- Added github repo info in README

#### 1.0.1
- Fix example in README

#### 1.0.0
- Initial Release