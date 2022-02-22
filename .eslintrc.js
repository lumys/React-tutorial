module.exports = {
  parser: 'babel-eslint', // JavaScript transpiler 및 ES 언어 features 을 조정할 수 있습니다.
  extends: ['airbnb', 'react-app', 'prettier'], // 확장하고 싶은 기본 규칙 추가 ex) ["eslint:recommended", "plugin:react/recommended"]
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  env: {
    browser: true, // ex) document, setInterval, clearInterval
    es6: true,
  },
  rules: {
    // 0 false, 1 warn, 2 error
    'for-direction': 2, // for 루프가 무한대로 실행되는 것을 방지
    'no-unused-vars': 2,
    'no-undef': 2,
    'no-console': 1,
    'no-empty': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-unreachable': 2,
    'no-param-reassign': 0,
    'react/jsx-key': 2,
    'react/function-component-definition': 0,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-uses-vars': 2,
    'react/no-children-prop': 2,
    'react/no-deprecated': 2, // react version 감지하여 deprecated 된 함수 경고
    'react/no-direct-mutation-state': 2, // state 를 직접 바꾸지 않게하기 위한 옵션
    'react/no-is-mounted': 2,
    'react/no-render-return-value': 2,
    'react/no-unknown-property': 2,
    'react/require-render-return': 2, // render method 를 작성할때 return 이 없으면 경고
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'react/destructuring-assignment': 1,
    'import/no-cycle': 1,
    'no-shadow': 1,
    'react/no-did-update-set-state': 1,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
  },
};
