import { defineConfigObject, vueFiles } from '@/utils';

export const vueA11yRules = defineConfigObject({
  name: 'airbnb/config/vue/jsx-a11y',
  files: vueFiles,
  // View link below for vuejs-accessibility rules documentation
  // https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/
  rules: {
    // Enforce that all elements that require alternative text have meaningful information
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/alt-text.md
    'vuejs-accessibility/alt-text': [
      'error',
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: [],
        object: [],
        area: [],
        'input[type="image"]': [],
      },
    ],

    // Enforce that anchors have content
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/anchor-has-content.md
    'vuejs-accessibility/anchor-has-content': [
      'error',
      { components: [], accessibleChildren: [], accessibleDirectives: [] },
    ],

    // Enforce all aria-* props are valid.
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/aria-props.md
    'vuejs-accessibility/aria-props': 'error',

    // Require ARIA roles to be valid and non-abstract
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/aria-role.md
    'vuejs-accessibility/aria-role': ['error', { ignoreNonDOM: false }],

    // Enforce that elements that do not support ARIA roles, states, and
    // properties do not have those attributes.
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/aria-unsupported-elements.md
    'vuejs-accessibility/aria-unsupported-elements': 'error',

    // require onClick be accompanied by onKeyUp/onKeyDown/onKeyPress
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/click-events-have-key-events.md
    'vuejs-accessibility/click-events-have-key-events': 'error',

    // Enforce that a control (an interactive element) has a text label.
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/form-control-has-label.md
    'vuejs-accessibility/form-control-has-label': 'error',

    // ensure <hX> tags have content and are not aria-hidden
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/heading-has-content.md
    'vuejs-accessibility/heading-has-content': 'error',

    // ensure iframe elements have a unique title
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/iframe-has-title.md
    'vuejs-accessibility/iframe-has-title': 'error',

    // Elements with an interactive role and interaction handlers must be focusable
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/interactive-supports-focus.md
    'vuejs-accessibility/interactive-supports-focus': 'error',

    // Enforce that a label tag has a text label and an associated control.
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/label-has-for.md
    'vuejs-accessibility/label-has-for': [
      'error',
      {
        // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/issues/119#issuecomment-787999600
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],

    // media elements must have captions
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/media-has-caption.md
    'vuejs-accessibility/media-has-caption': 'error',

    // require that mouseover/out come with focus/blur, for keyboard-only users
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/mouse-events-have-key-events.md
    'vuejs-accessibility/mouse-events-have-key-events': 'error',

    // Prevent use of `accessKey`
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/no-access-key.md
    'vuejs-accessibility/no-access-key': 'error',

    // prohibit autoFocus prop
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/no-autofocus.md
    'vuejs-accessibility/no-autofocus': ['error', { ignoreNonDOM: true }],

    // prevent distracting elements, like <marquee> and <blink>
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/no-distracting-elements.md
    'vuejs-accessibility/no-distracting-elements': [
      'error',
      {
        elements: ['marquee', 'blink'],
      },
    ],

    // This is where we differ from the `vuejs-accessibility/recommended` ruleset
    // So turning it off explicitly here.
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/issues/97
    'vuejs-accessibility/no-onchange': 'off',

    // ensure HTML elements do not specify redundant ARIA roles
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/no-redundant-roles.md
    'vuejs-accessibility/no-redundant-roles': 'error',

    // Enforce that elements with ARIA roles must have all required attributes
    // for that role.
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/role-has-required-aria-props.md
    'vuejs-accessibility/role-has-required-aria-props': 'error',

    // Enforce tabIndex value is not greater than zero.
    // https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/main/docs/tabindex-no-positive.md
    'vuejs-accessibility/tabindex-no-positive': 'error',
  },
});
