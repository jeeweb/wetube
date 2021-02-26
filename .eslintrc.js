module.exports = {
  env: {
    browser: true,
    es2021: true,
		node: true,
  },
  extends: [
    'eslint:recommended',
		'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
  },
};
