module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.eslint.json',
		sourceType: 'module',
		createDefaultProgram: true,
	},
	plugins: ['@typescript-eslint', '@stylistic/ts', 'import'],
	extends: ['plugin:@typescript-eslint/strict'],
	root: true,
	env: {
		node: true,
	},
	overrides: [
		{
			files: ['*.entity.ts'],
			rules: {
				'@typescript-eslint/member-ordering': 'off',
				'@typescript-eslint/explicit-member-accessibility': 'off',
				'@stylistic/ts/indent': 'off',
			},
		},
	],
	rules: {
		// Off rules
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		// Warning rules
		'@typescript-eslint/no-magic-numbers': 'warn',
		'@typescript-eslint/explicit-member-accessibility': [
			'warn',
			{
				accessibility: 'explicit',
				overrides: {
					constructors: 'no-public',
				},
			},
		],
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
		// Error rules
		'@typescript-eslint/member-ordering': [
			'error',
			{
				default: [
					// Índices
					'signature',
					// Static fields
					'public-static-field',
					'protected-static-field',
					'private-static-field',
					// Decorated fields
					'public-decorated-field',
					'protected-decorated-field',
					'private-decorated-field',
					// Instance fields
					'public-instance-field',
					'protected-instance-field',
					'private-instance-field',
					// Constructors
					'constructor',
					// Static methods
					'public-static-method',
					'protected-static-method',
					'private-static-method',
					// Decorated methods
					'public-decorated-method',
					'protected-decorated-method',
					'private-decorated-method',
					// Instance methods
					'public-instance-method',
					'protected-instance-method',
					'private-instance-method',
				],
			},
		],
		'@typescript-eslint/require-await': 'error',
		'@typescript-eslint/no-floating-promises': [
			'error',
			{ignoreIIFE: true},
		],
		'padding-line-between-statements': [
			'error',
			{blankLine: 'always', prev: '*', next: 'return'},
			{blankLine: 'always', prev: '*', next: 'continue'},
		],
		'no-eq-null': 'error',
		eqeqeq: ['error', 'smart'],
		'padded-blocks': ['error', 'always'],
		curly: 'error',
		quotes: ['error', 'single'],
		'comma-dangle': ['error', 'always-multiline'],
		'import/no-restricted-paths': [
			'error',
			{
				zones: [
					{
						target: './src',
						from: './src',
					},
				],
			},
		],
		'no-restricted-imports': [
			'error',
			{
				patterns: ['../*'],
			},
		],
		// Formatting rules
		'@stylistic/ts/quotes': ['error', 'single', {avoidEscape: true}],
		'@stylistic/ts/indent': ['error', 'tab'],
		'@stylistic/ts/semi': ['error', 'always'],
	},
	settings: {
		'import/resolver': {
			node: {
				moduleDirectory: ['node_modules', 'src'],
			},
		},
	},
};
