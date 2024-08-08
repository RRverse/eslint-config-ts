import { defu } from "defu";

const antfuDefaultConfig = {
	typescript: {
		tsconfigPath: "tsconfig.json",
		overrides: {
			"ts/require-await": "error",
			"ts/no-magic-numbers": [
				"warn",
				{
					ignoreArrayIndexes: true,
					ignore: [-1, 0, 1, 2, 24, 60, 10, 100, 1000, 10000, 100000, 1000000, 10000000],
					enforceConst: true,
					ignoreEnums: true,
				},
			],
			"ts/no-for-in-array": "off",
			"ts/explicit-member-accessibility": [
				"warn",
				{
					accessibility: "explicit",
					overrides: {
						constructors: "no-public",
					},
				},
			],
			"ts/no-unnecessary-boolean-literal-compare": "warn",
			"ts/member-ordering": [
				"error",
				{
					default: [
						// Índices
						"signature",
						// Static fields
						"public-static-field",
						"protected-static-field",
						"private-static-field",
						// Decorated fields
						"public-decorated-field",
						"protected-decorated-field",
						"private-decorated-field",
						// Instance fields
						"public-instance-field",
						"protected-instance-field",
						"private-instance-field",
						// Constructors
						"constructor",
						// Static methods
						"public-static-method",
						"protected-static-method",
						"private-static-method",
						// Decorated methods
						"public-decorated-method",
						"protected-decorated-method",
						"private-decorated-method",
						// Instance methods
						"public-instance-method",
						"protected-instance-method",
						"private-instance-method",
					],
				},
			],
		},
	},
	stylistic: {
		indent: "tab",
		quotes: "single",
		semi: true,
	},
	ignores: ["test/**", "**/src/migrations", ".oc-deploy.yml"],
};

const userConfigs = [
	{
		rules: {
			"style/padded-blocks": ["error", "always"],
			"style/padding-line-between-statements": [
				"error",
				{ blankLine: "always", prev: "*", next: "return" },
				{ blankLine: "always", prev: "*", next: "continue" },
			],
			"no-console": "off",
			"no-eq-null": "error",
			"antfu/curly": "off",
			curly: "error",
			"ts/promise-function-async": "off",
			"ts/strict-boolean-expressions": "off",
			'ts/no-for-in-array': 'off',
			"import/order": "off",
			"node/prefer-global/process": "off",
		},
	},
	{
		files: ['**/*.entity.ts', '**/*.dto.ts'],
		rules: {
			"ts/member-ordering": "off",
			"ts/explicit-member-accessibility": "off",
			"ts/indent": "off",
		},
	}
];

function generateConfig (overrides = {}) {

	return [
		defu(overrides, { ...antfuDefaultConfig }),
		...userConfigs
	];

}

export default generateConfig;
