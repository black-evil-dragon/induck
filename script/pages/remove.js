/* Modules */
const fs = require('fs');
const path = require('path');
const colors = require('colors');


/* Variables */
const scssPath = '../induck/src/styles/scss/'
const pagePath = '../induck/src/pages/'
let { pages, components } = JSON.parse(fs.readFileSync('./data.json'));


/* Main function */
function removePage(pageName) {
    let run = false
    let text = ''
    let tempFileSCSS = fs.readFileSync(path.join(scssPath, 'pages', `_index.scss`)).toString()

    try {
        tempFileSCSS = tempFileSCSS.replace(`@import "./${pageName}";`, '')
        fs.writeFileSync(path.join(scssPath, 'pages', `_index.scss`), tempFileSCSS)

        fs.unlinkSync(path.join(pagePath, pageName, 'index.tsx'))
        fs.unlinkSync(path.join(scssPath, 'pages', `_${pageName}.scss`))

        fs.rmdirSync(path.join(pagePath, pageName))

        pages = pages.filter(item => item !== pageName)
        run = true
    } catch (err) {
        run = false
        text = 'Ошибка при удалении файла или директории'
        console.log(err)
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

module.exports = { removePage }