/* Require modules */
const fs = require('fs');
const path = require('path');
const colors = require('colors');


/* Variables */
const args = process.argv.slice(2)
const pathProject = '../'
const Arguments = {
    operation: args[0],
    type: args[1],
    name: args[2]
}
let result = null


/* Check data */
const check = (data) => {
    if (data.length === 2) {
        fs.writeFileSync('./data.json', JSON.stringify({ "pages": [], "components": [] }))
    }
}
check(fs.readFileSync('./data.json', err => console.log(err)).toString())


/* Require functions */
const { createComponent } = require('./components/create');
const { removeComponent } = require('./components/remove')

const { createPage } = require('./pages/create');
const { removePage } = require('./pages/remove')


/* Main code */
try {
    if (args.length < 3) throw Error(`${colors.red('Неверно указаны аргументы')}:\nАргументы: ${args.length ? args : undefined}`)

    if (Arguments.operation === 'create') {
        if (Arguments.type === 'component') {
            result = createComponent(Arguments.name)

        }
        if (Arguments.type === 'page') {
            result = createPage(Arguments.name)

        }
    } else if (Arguments.operation === 'remove') {
        if (Arguments.type === 'component') {
            result = removeComponent(Arguments.name)
        }
        if (Arguments.type === 'page') {
            result = removePage(Arguments.name)
        }
    }

    if (!result.run) throw Error(`${colors.red('Ошибка при запуске программы')}:\nАргументы: ${args.length ? args : undefined}\nРезультат:`)
    const data = {}
    console.log(colors.green('Успешно!'))
    console.log('Результат', result)

} catch (err) {
    console.log(String(err))
    console.log(result)
}