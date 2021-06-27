import { InputMethod } from '@keywrite/core';
const inputMethods: Record<string, InputMethod> = {};
import Amharic from './am-ET';
export { default as Amharic } from './am-ET';
inputMethods[Amharic.meta.name] = Amharic.inputMethod;

import AwngiBlinXamtanga from './awn-ET_byn-ER_xan-ET';
export { default as AwngiBlinXamtanga } from './awn-ET_byn-ER_xan-ET';
inputMethods[AwngiBlinXamtanga.meta.name] = AwngiBlinXamtanga.inputMethod;

import Bench from './bcq-ET';
export { default as Bench } from './bcq-ET';
inputMethods[Bench.meta.name] = Bench.inputMethod;

import DiziMeenMursiSuri from './mym-ET_muz-ET_suq-ET_mdx-ET';
export { default as DiziMeenMursiSuri } from './mym-ET_muz-ET_suq-ET_mdx-ET';
inputMethods[DiziMeenMursiSuri.meta.name] = DiziMeenMursiSuri.inputMethod;

import Geez from './gez-ET_gez-ER';
export { default as Geez } from './gez-ET_gez-ER';
inputMethods[Geez.meta.name] = Geez.inputMethod;

import Harari from './har-ET';
export { default as Harari } from './har-ET';
inputMethods[Harari.meta.name] = Harari.inputMethod;

import Sebatbeit from './sgw-ET';
export { default as Sebatbeit } from './sgw-ET';
inputMethods[Sebatbeit.meta.name] = Sebatbeit.inputMethod;

import Silte from './xst-ET';
export { default as Silte } from './xst-ET';
inputMethods[Silte.meta.name] = Silte.inputMethod;

import TigrinyaEritrean from './ti-ER';
export { default as TigrinyaEritrean } from './ti-ER';
inputMethods[TigrinyaEritrean.meta.name] = TigrinyaEritrean.inputMethod;

import TigrinyaEthiopia from './ti-ET';
export { default as TigrinyaEthiopia } from './ti-ET';
inputMethods[TigrinyaEthiopia.meta.name] = TigrinyaEthiopia.inputMethod;

import EthiopicLanguageNeutral from './ET';
export { default as EthiopicLanguageNeutral } from './ET';
inputMethods[EthiopicLanguageNeutral.meta.name] = EthiopicLanguageNeutral.inputMethod;
export default inputMethods;
