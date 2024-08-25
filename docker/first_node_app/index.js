const express = require('express');

const app = express();

const data = [
    {
        id:'1',
        name:'sayan',
        age:'29'
    },
    {
        id:'2',
        name:'shyam',
        age:'22'
    },
    {
        id:'3',
        name:'Ram',
        age:'24'
    },
    {
        id:'4',
        name:'Raj',
        age:'25'
    },
    {
        id:'5',
        name:'sita',
        age:'27'
    },
    {
        id:'6',
        name:'jack',
        age:'21'
    },
]

app.get('/',(req,res) => {
    res.json(data);
})


app.listen(5000,() => {
    console.log('server is running on port 5000');
})

