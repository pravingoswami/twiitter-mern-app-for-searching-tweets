const Twitter = require('twitter')

module.exports = (app, io) => {
    const client = new Twitter({
        consumer_key: '881flbXb16SbwdP3R2sRKvdji',
        consumer_secret: '1lgXzKUdWoMzdvba4r1YEY7gAEXqlMOSRMq99Iz7mUM2nNikFi',
        access_token_key: '1132229170388332545-j5aLvteIDWWuSyHyJPvqXgsHi3DMpP',
        access_token_secret: 'ISSVhx8UxSnDZ7cX1TklJ5BfYHIbZrGi2hJa8Sb97G2i7'
    })

    let socketConnection
    let search

    const stream = () => {
        client.stream('statuses/filter', { track: search }, (stream) => {
            stream.on('data', (tweet) => {
                sendMessage(tweet);
            });

            stream.on('error', (error) => {
                console.log(error);
            });
        });
    }

    app.post('/tweets', (req, res) => {
        search = req.body.search;
        // this is for the search for the tweets and the count is 100
        client.get('search/tweets', {q : search, count : 100})
        .then(tweets => {
            res.json(tweets) 
        })
        .catch(err => res.json(err))
        stream()
    })

    io.on("connection", socket => {
        socketConnection = socket
        stream()
        socket.on("connection", () => console.log("Client connected"))
        socket.on("disconnect", () => console.log("Client disconnected"))
    })

    const sendMessage = (msg) => {
        socketConnection.emit("tweets",msg);
    }
}