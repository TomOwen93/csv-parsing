
const fs = require('fs');

const jokes = fs.readFileSync('./src/jokes.txt', 'utf-8')


const splittedJokesArray: string[] = jokes.split(/\n{2,}/g);

type jokes = { jokesId:number, jokes:string}
const jokesObjects: jokes[] = splittedJokesArray.map((el, index) => ({jokesId:index, jokes: el}))
console.log(jokesObjects)


const createCsvWriter = require('csv-writer').createObjectCsvWriter

const csvWriter = createCsvWriter({path: './src/jokes.csv', header: [{id: 'jokesId', title: 'Id'}, {id: 'jokes', title: 'Joke description'}]});
csvWriter.writeRecords(jokesObjects)
.then(() => {console.log('done')})

