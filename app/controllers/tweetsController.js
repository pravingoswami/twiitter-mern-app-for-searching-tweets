const Twitter = require('twitter')


module.exports.tweetsList = (req, res) => {
    const search = req.query.search

    const client = new Twitter({
        consumer_key: '881flbXb16SbwdP3R2sRKvdji',
        consumer_secret: '1lgXzKUdWoMzdvba4r1YEY7gAEXqlMOSRMq99Iz7mUM2nNikFi',
        access_token_key: '1132229170388332545-j5aLvteIDWWuSyHyJPvqXgsHi3DMpP',
        access_token_secret: 'ISSVhx8UxSnDZ7cX1TklJ5BfYHIbZrGi2hJa8Sb97G2i7'
    })

    // ref - https://www.npmjs.com/package/twitter

    client.get('search/tweets', {q : search, count : 200})
        .then(tweets => {
            res.json(tweets) 
        } 
            )
        .catch(err => res.json(err))

}   