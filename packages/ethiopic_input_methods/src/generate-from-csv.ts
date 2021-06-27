import { generateMapForRow } from '@keywrite/input-method-generator';
import csvParser from 'csv-parser';
import fs from 'fs';
import inputMethods from './input-methods';
const punctuation = {};
fs.createReadStream(`${__dirname}/csv/punctuation.csv`)
    .pipe(csvParser())
    .on('data', (row) => {
        generateMapForRow(punctuation, row);
    })
    .on('end', () => {
        console.log('inputMethod successfully generated for punctuation');
    });
for (const [code, { name, path, regions }] of Object.entries(inputMethods)) {
    const inputMethod = {};
    fs.createReadStream(`${__dirname}/csv/${path}.csv`)
        .pipe(csvParser())
        .on('data', (row) => {
            generateMapForRow(inputMethod, row);
        })
        .on('end', () => {
            console.log(`input method successfully generated for ${name}`);
            const meta = {
                name,
                regions,
            };

            fs.writeFileSync(
                `${__dirname}/${code}.ts`,
                `import { InputMethod } from '@keywrite/core';
                import {InputMethodMeta, InputMethodSpec} from './interfaces';
                const inputMethod : InputMethodSpec = ${JSON.stringify({
                    meta,
                    inputMethod: { ...inputMethod, ...punctuation },
                })};
                export default inputMethod;
                `,
            );
        });
}
// write index indexFile
let index = `
import { InputMethod } from '@keywrite/core';
const inputMethods:Record<string,InputMethod> = {};`;
for (const { path, name } of Object.values(inputMethods)) {
    const inputMethod = name.replace(/[^a-zA-Z]/g, '');
    index += `
    import ${inputMethod} from './${path}';
    export {default as ${inputMethod}} from  './${path}';
    inputMethods[${inputMethod}.meta.name] = ${inputMethod}.inputMethod;
    `;
}
index += `export default inputMethods;`;
fs.writeFileSync(`${__dirname}/index.ts`, index);
