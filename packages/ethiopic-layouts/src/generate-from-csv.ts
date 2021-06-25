import { generateMapForRow } from '@keywrite/layout-generator';
import csvParser from 'csv-parser';
import fs from 'fs';
import layouts from './layouts';
const punctuation = {};
fs.createReadStream(`${__dirname}/csv/punctuation.csv`)
    .pipe(csvParser())
    .on('data', (row) => {
        generateMapForRow(punctuation, row);
    })
    .on('end', () => {
        console.log('layout successfully generated for punctuation');
    });
for (const [code, { name, path }] of Object.entries(layouts)) {
    const layout = {};
    fs.createReadStream(`${__dirname}/csv/${path}.csv`)
        .pipe(csvParser())
        .on('data', (row) => {
            generateMapForRow(layout, row);
        })
        .on('end', () => {
            console.log(`layout successfully generated for ${name}`);
            const meta = {
                name,
                regions: code.split('_'),
            };

            fs.writeFileSync(
                `${__dirname}/${code}.ts`,
                `import { KeyboardLayout } from '@keywrite/core';
                type LayoutMeta = {name: string; regions: string[];};
                type LayoutSpec = { meta:LayoutMeta; layout: KeyboardLayout; };
                const layout : LayoutSpec = ${JSON.stringify({ meta, layout: { ...layout, ...punctuation } })};
                export default layout;
                `,
            );
        });
}
// write index indexFile
// const layoutMap:Record<string,KeyboardLayout> = {}
let index = `
import { KeyboardLayout } from '@keywrite/core';
const layouts:Record<string,KeyboardLayout> = {};`;
for (const { path, name } of Object.values(layouts)) {
    const layout = name.replace(/[^a-zA-Z]/g, '');
    index += `
    import ${layout} from './${path}';
    layouts[${layout}.meta.name] = ${layout}.layout;
    `;
}
index += `export default layouts;`;
fs.writeFileSync(`${__dirname}/index.ts`, index);
