type LayoutMeta = { path: string; name: string };
const layouts: Record<string, LayoutMeta> = {
    'am-ET': { path: 'am-ET', name: 'Amharic' },
    'awn-ET_byn-ER_xan-ET': {
        path: 'awn-ET_byn-ER_xan-ET',
        name: 'Awngi, Blin, Xamtanga',
    },
    'bcq-ET': {
        path: 'bcq-ET',
        name: 'Bench',
    },
    'mym-ET_muz-ET_suq-ET_mdx-ET': {
        path: 'mym-ET_muz-ET_suq-ET_mdx-ET',
        name: "Dizi, Me'en, Mursi, Suri",
    },
    'gez-ET_gez-ER': {
        path: 'gez-ET_gez-ER',
        name: "Ge'ez",
    },
    'har-ET': {
        path: 'har-ET',
        name: 'Harari',
    },
    'sgw-ET': {
        path: 'sgw-ET',
        name: 'Sebatbeit',
    },
    'xst-ET': {
        path: 'xst-ET',
        name: "Silt'e",
    },
    'ti-ER': {
        path: 'ti-ER',
        name: 'Tigrinya(Eritrean)',
    },
    'ti-ET': {
        path: 'ti-ET',
        name: 'Tigrinya(Ethiopia)',
    },
    ET: {
        path: 'ET',
        name: 'Ethiopic(Language Neutral)',
    },
};
export default layouts;
