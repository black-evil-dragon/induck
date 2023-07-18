/* Modules */
const fs = require('fs');
const path = require('path');
const colors = require('colors');


/* Variables */
const scssPath = '../induck/src/styles/scss/'
const componentPath = '../induck/src/components/'
const { pages, components } = JSON.parse(fs.readFileSync('./data.json'));


/* Temp */
let tempFileJS = fs.readFileSync('./components/template.tmp').toString()
let tempFileSCSS = fs.readFileSync(path.join(scssPath, 'components', '_index.scss')).toString()


/* Main function */
function createComponent(componentName) {
    function save(componentPath, componentName, scssPath, tempFileSCSS, tempFileJS) {
        fs.mkdirSync(path.join(componentPath, componentName))
        fs.writeFileSync(path.join(componentPath, componentName, `index.tsx`), tempFileJS)
        fs.writeFileSync(path.join(scssPath, 'components', `_${componentName}.scss`), '')
        fs.writeFileSync(path.join(scssPath, 'components', `_index.scss`), tempFileSCSS)
    }
    let scssImport = `@import "./${componentName}";`
    let run = false
    let text = ''

    tempFileJS = tempFileJS
        .replace('{*NAME*}', componentName)
        .replace('{*NAMECLASS*}', componentName.toLocaleLowerCase())
        .replace('{*NAME*}', componentName)

    tempFileSCSS = `${scssImport}\n${tempFileSCSS}`.toString()



    /* Start */
    if (components.length > 0 && !components.includes(componentName)) {
        try {
            save(componentPath, componentName, scssPath, tempFileSCSS, tempFileJS)
        } catch (err) {
            console.log(err)
            run = false
            text = 'Ошибка при создании файла'
        }

        components.push(componentName)
        run = true
    } else if (components.length === 0) {
        try {
            save(componentPath, componentName, scssPath, tempFileSCSS, tempFileJS)
        } catch (err) {
            console.log(err)
            run = false
            text = 'Ошибка при создании файла'
        }
        components.push(componentName)
        run = true
    } else {
        text = `${componentName} уже существует: [${components}]`
    }


    if (run) fs.writeFileSync('data.json', JSON.stringify({ pages, components }));

    return {
        run,
        text,
        componentName,
        components,
        pages,
    }
}

module.exports = { createComponent }