import app from './server';
import config from './config/config';
import connect from './db/connect';

const PORT = config.app.PORT;

connect().then(() => {
    console.log('Connected to database!');

    app.listen(PORT, () => {
        console.log(`Server running on port http://localhost:${PORT}/`);
    });
});

