import express from 'express';

const app = express();

const port = process.env.PORT || 4000;


app.get('/', (req,res) => {
    res.send('Ready')
})

//get a list of 3 jokes
app.get('/api/jokes', (req,res) => {
    const jokesArray = [
        {
            id: 1,
            title: 'Joke A',
            content: 'This is Joke A'
        },
        {
            id: 2,
            title: 'Joke B',
            content: 'This is Joke B'
        },
        {
            id: 3,
            title: 'Joke C',
            content: 'This is Joke C'
        }
    ]
    res.send(jokesArray)
})

app.listen(port, () => {
    console.log('App is listening on PORT', port)
})