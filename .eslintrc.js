module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: ['~/plugins/pinia.js'],
  // add your custom rules here
  rules: {
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/html-closing-bracket-newline': 'off', // Desativa completamente a regra
    quotes: ['error', 'single'],
    'arrow-parens': ['error', 'always'] // Corrigida a aspa simples aqui
  }
}
