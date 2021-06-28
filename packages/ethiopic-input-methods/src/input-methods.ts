import { InputMethodMeta } from './interfaces';
const inputMethods: Record<string, InputMethodMeta> = {
    'am-ET': { path: 'am-ET', name: 'Amharic', regions: ['am-ET'] },
    'awn-ET_byn-ER_xan-ET': {
        path: 'awn-ET_byn-ER_xan-ET',
        name: 'Awngi, Blin, Xamtanga',
        regions: ['awn-ET', 'byn-ER', 'xan-ET'],
    },
    'bcq-ET': {
        path: 'bcq-ET',
        name: 'Bench',
        regions: ['bcq-ET'],
    },
    'mym-ET_muz-ET_suq-ET_mdx-ET': {
        path: 'mym-ET_muz-ET_suq-ET_mdx-ET',
        name: "Dizi, Me'en, Mursi, Suri",
        regions: ['mym-ET', 'muz-ET', 'suq-ET', 'mdx-ET'],
    },
    'gez-ET_gez-ER': {
        path: 'gez-ET_gez-ER',
        name: "Ge'ez",
        regions: ['gez-ET', 'gez-ER'],
    },
    'har-ET': {
        path: 'har-ET',
        name: 'Harari',
        regions: ['har-ET'],
    },
    'sgw-ET': {
        path: 'sgw-ET',
        name: 'Sebatbeit',
        regions: ['sgw-ET'],
    },
    'xst-ET': {
        path: 'xst-ET',
        name: "Silt'e",
        regions: ['xst-ET'],
    },
    'ti-ER': {
        path: 'ti-ER',
        name: 'Tigrinya(Eritrean)',
        regions: ['ti-ER'],
    },
    'ti-ET': {
        path: 'ti-ET',
        name: 'Tigrinya(Ethiopia)',
        regions: ['ti-ET'],
    },
    ET: {
        path: 'ET',
        name: 'Ethiopic(Language Neutral)',
        regions: ['ET'],
    },
};
export default inputMethods;
