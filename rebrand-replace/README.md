# Replacing old Sass/React variables

This script uses a few JSON files to perform find/replace operations `.scss`, `.jsx`, and `.js`.

## Usage

- `node replace.js all`

To run them individually:

- `node replace.js scss`
- `node replace.js react`
- `node replace.js import`

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

## Manual Steps

### Website

1. open `thumbprint/globals/styles/includes/_color.scss`
2. remove everything except for `$modal-backdrop` and the Facebook colors
3. re-add the import `../globals/styles/includes/color` in:
    - legacy-css/thumbprint/patterns/global/modals.scss
    - components/modal-standard/styles/modal-standard.scss
    - components/modal-basic/styles/modal-basic.scss
    - modules/media-viewer/styles/media-viewer.scss
    - components/modal-flyover/styles/modal-flyover.scss
4. remove colors dupes in:
    - pages/customer-profile/components/footer/footer.jsx
    - pages/customer-profile/components/mini-profile/mini-profile.jsx
    - pages/pro-profile/subcomponents/pro-profile-media/pro-profile-media-edit.jsx
    - pages/settings-page/components/service-tab-educational/service-tab-educational.jsx