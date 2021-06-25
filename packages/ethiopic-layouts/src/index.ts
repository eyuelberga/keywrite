import { KeyboardLayout } from '@keywrite/core';
const layouts: Record<string, KeyboardLayout> = {};
import Amharic from './am-ET';
layouts[Amharic.meta.name] = Amharic.layout;

import AwngiBlinXamtanga from './awn-ET_byn-ER_xan-ET';
layouts[AwngiBlinXamtanga.meta.name] = AwngiBlinXamtanga.layout;

import Bench from './bcq-ET';
layouts[Bench.meta.name] = Bench.layout;

import DiziMeenMursiSuri from './mym-ET_muz-ET_suq-ET_mdx-ET';
layouts[DiziMeenMursiSuri.meta.name] = DiziMeenMursiSuri.layout;

import Geez from './gez-ET_gez-ER';
layouts[Geez.meta.name] = Geez.layout;

import Harari from './har-ET';
layouts[Harari.meta.name] = Harari.layout;

import Sebatbeit from './sgw-ET';
layouts[Sebatbeit.meta.name] = Sebatbeit.layout;

import Silte from './xst-ET';
layouts[Silte.meta.name] = Silte.layout;

import TigrinyaEritrean from './ti-ER';
layouts[TigrinyaEritrean.meta.name] = TigrinyaEritrean.layout;

import TigrinyaEthiopia from './ti-ET';
layouts[TigrinyaEthiopia.meta.name] = TigrinyaEthiopia.layout;

import EthiopicLanguageNeutral from './ET';
layouts[EthiopicLanguageNeutral.meta.name] = EthiopicLanguageNeutral.layout;
export default layouts;
