import { InputMethod } from '@keywrite/core';
export type InputMethodMeta = { path?: string; name: string; regions: string[] };
export type InputMethodSpec = { meta: InputMethodMeta; inputMethod: InputMethod };
