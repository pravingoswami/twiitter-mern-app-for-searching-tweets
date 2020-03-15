// const Twitter = require('twitter')
// const server = require('../../index')
// const socket = require('socket.io')

// module.exports.tweetsList = (req, res) => {
//     const search = req.query.search

//     const client = new Twitter({
//         consumer_key: '881flbXb16SbwdP3R2sRKvdji',
//         consumer_secret: '1lgXzKUdWoMzdvba4r1YEY7gAEXqlMOSRMq99Iz7mUM2nNikFi',
//         access_token_key: '1132229170388332545-j5aLvteIDWWuSyHyJPvqXgsHi3DMpP',
//         access_token_secret: 'ISSVhx8UxSnDZ7cX1TklJ5BfYHIbZrGi2hJa8Sb97G2i7'
//     })

//     // ref - https://www.npmjs.com/package/twitter

//     // client.get('search/tweets', {q : search, count : 200})
//     //     .then(tweets => {
//     //         res.json(tweets) 
//     //     } 
//     //         )
//     //     .catch(err => res.json(err))

// // const io = socket(server)
    

//     let socketConnection

//     // client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
//     //     stream.on('data', function(tweet) {
//     //     //   console.log(event && event.text)
//     //       sendMessage(tweet)
//     //     });
       
//     //     stream.on('error', function(error) {
//     //       throw error;
//     //     });
//     //   });

   
//     // io.on("connection", (socket) => {
//     //    socketConnection = socket
//     // } )
    
//     // const sendMessage = (tweet) => {
//     //     socketConnection.emit("tweets", tweet)
//     // }
   
       
//    //Emits data with socket.io as twitter stream flows in
// //    const stream = () => {
// //     client.stream('statuses/filter', { track: search}, (stream) => {
// //         stream.on('data', (tweet) => {
// //             socketConnection.emit("tweets", tweet)
// //         });

// //         stream.on('error', (error) => {
// //             console.log(error);
// //         });
// //     });
// // }

// //     stream()

//     io.on("connection", socket => {
//         console.log("connection")

//         client.stream('statuses/filter', { track: search}, (stream) => {
//             stream.on('data', (tweet) => {
//                 socket.emit("tweets", tweet)
//             });
    
//             stream.on('error', (error) => {
//                 console.log(error);
//             })
//         })

//         // socketConnection = socket
//         socket.on("connection", () => console.log("Client connected"));
//         socket.on("disconnect", () => console.log("Client disconnected"));
//    });







// }   