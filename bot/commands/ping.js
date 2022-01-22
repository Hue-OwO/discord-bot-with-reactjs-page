exports.run = (client, msg) => {
    client.message.send("test")
    console.log(msg.author + "pinged")

};