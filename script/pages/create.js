/* Modules */
const fs = require('fs');
const path = require('path');
const colors = require('colors');


/* Variables */
const scssPath = '../induck/src/styles/scss/'
const pagePath = '../induck/src/pages/'
const { pages, components } = JSON.parse(fs.readFileSync('./data.json'));


/* Temp */
let tempFileJS = fs.readFileSync('./pages/template.tmp').toString()
let tempFileSCSS = fs.readFileSync(path.join(scssPath, 'pages', '_index.scss')).toString()


/* Main function */
function createPage(pageName) {
    function save(pagePath, pageName, pagePath, tempFileJS, tempFileSCSS, scssPath) {
        fs.mkdirSync(path.join(pagePath, pageName))
        fs.writeFileSync(path.join(pagePath, pageName, `index.tsx`), tempFileJS)
        fs.writeFileSync(path.join(scssPath, 'pages', `_${pageName}.scss`), '')
        fs.writeFileSync(path.join(scssPath, 'pages', `_index.scss`), tempFileSCSS)
    }

    tempFileJS = tempFileJS
        .replace('{*NAME*}', pageName)
        .replace('{*NAMECLASS*}', pageName.toLocaleLowerCase())
        .replace('{*NAME*}', pageName)


    let run = false
    let scssImport = `@import "./${pageName}";`
    let text = ''

    tempFileSCSS = `${scssImport}\n${tempFileSCSS}`.toString()


    /* Start */
    if (pages.length > 0 && !pages.includes(pageName)) {
        try {
            save(pagePath, pageName, pagePath, tempFileJS, tempFileSCSS, scssPath)

            pages.push(pageName)
            run = true
        } catch (err) {
            console.log(err)
            run = false
            text = 'Ошибка при создании файла'
        }
    } else if (pages.length === 0) {
        try {
            save(pagePath, pageName, pagePath, tempFileJS, tempFileSCSS, scssPath)
        } catch (err) {
            console.log(err)
            run = false
            text = 'Ошибка при создании файла'
        }
        pages.push(pageName)
        run = true
    } else {
        text = `${pageName} уже существует: [${pages}]`
    }


    if (run) fs.writeFileSync('data.json', JSON.stringify({ pages, components }));

    return {
        run,
        text,
        pageName,
        components,
        pages,
    }
}

module.exports = { createPage }