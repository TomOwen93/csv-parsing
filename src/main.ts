import { createObjectCsvWriter } from 'csv-writer'

const fs = require('fs');

const jokes = fs.readFileSync('./src/jokes.txt', 'utf-8')


const splittedJokesArray: string[] = jokes.split(/\n{2,}/g);

type jokes = { id:number, joke:string}
const jokesObjects: jokes[] = splittedJokesArray.map((el, index) => ({id:index, joke: el}))
console.log(jokesObjects)


const createCsvWriter = require('csv-writer').createObjectCsvWriter

const csvWriter = createCsvWriter({path: './src/jokes.csv', header: [{id: 'jokesId', title: 'Id'}, {id: 'jokes', title: 'Joke description'}]});

