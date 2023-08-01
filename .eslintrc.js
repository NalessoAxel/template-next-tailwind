module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb', 'prettier', 'eslint:recommended', 'plugin:react-hooks/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
	ignorePatterns: ['!**/.eslintrc*', 'public/static', 'node_modules*', '**/node_modules/**', 'dist', '*.svg', '*.ico', '*.json', '.gitignore', '*.md', '*.log', '*.loc'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier', 'simple-import-sort', ' import/recommended', 'react/recommended'],
	rules: {
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		caseSensitive: false,
		'no-use-before-define': 'off',
		'import/named': 2,
		'import/namespace': 2,
		'import/default': 2,
		'import/export': 2,
		'import/order': [
			'error',
			{
				'newlines-between': 'always-and-inside-groups',
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
				pathGroupsExcludedImportTypes: ['builtin'],
				alphabetize: {
					order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
					caseInsensitive: true /* ignore case. Options: [true, false] */,
				},
			},
		],

		camelcase: 'off',
		'no-param-reassign': 'off',
		'prefer-destructuring': [
			'error',
			{
				object: true,
				array: false,
			},
		],
		// enforces only object destructuring, but not array destructuring
		indent: [
			'warn',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'no-multi-assign': 'off',
		'no-unused-vars': 'error',
		'no-console': 'warn',
		'no-plusplus': 'off',
		'func-names': 'off',
		'no-process-exit': 'off',
		'object-shorthand': 'off',
		'class-methods-use-this': 'off',
		//react
		'react/jsx-props-no-spreading': 'warn',
		'react/jsx-boolean-value': 'off',
		'react/no-array-index-key': 'on',
		'react/react-in-jsx-scope': 'off',
		'react/forbid-prop-types': 'off',
		'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
		'jsx-a11y/anchor-is-valid': 'off',
		// nextjs uses <a> tags without href
		'import/no-dynamic-require': 'off',
	},
};
