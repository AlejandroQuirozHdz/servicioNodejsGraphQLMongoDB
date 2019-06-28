import {app} from '../../server';


app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./public/index.html'))
});