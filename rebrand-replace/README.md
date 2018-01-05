# Replacing old Sass/React variables

This script uses a few JSON files to perform find/replace operations `.scss`, `.jsx`, and `.js`.

## Usage

- `node replace.js all`

To run them individually:

- `node replace.js scss`
- `node replace.js react`
- `node replace.js import`

## Manual Steps

After running `node replace.js import`

1. open `thumbprint/globals/styles/includes/_color.scss`
2. remove everything except for `$modal-backdrop` and the Facebook colors
3. re-add the reference to `../globals/styles/includes/color` on the 6 or so pages that still need it


## Opertions

- `node replace.js scss`
    - TPv1 variables: `$coral` > `$tp-color__red`
    - TPv2 variables: `$tp-color__ui__bad-news` > `$tp-color__red`
    - TPv1 variables: `$thumbtack-orange` > `$tp-color__ui__brand`

Note: The orange color variables will not be mapped as those will have to be determined by a designer, however TPv1 variables are being updated to TPv2.

- `node replace.js react`
    - React variables: `tpColorUiBadNews` > `tpColorRed`

- `node replace.js import`
    - Replaces all `../globals/styles/includes/color` with `@thumbtack/thumbprint-tokens/dist/scss/_index`
