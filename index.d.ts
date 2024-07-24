import type { OptionsConfig, TypedFlatConfigItem, Awaitable } from "@antfu/eslint-config";
import { FlatConfigComposer } from "eslint-flat-config-utils";
import { Linter } from "eslint";

export default function generateConfig(
  overrides?: OptionsConfig & TypedFlatConfigItem
): [
  OptionsConfig & TypedFlatConfigItem,
  ...Awaitable<
    | TypedFlatConfigItem
    | TypedFlatConfigItem[]
    | FlatConfigComposer<any, any>
    | Linter.FlatConfig[]
  >[]
];
