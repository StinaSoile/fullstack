const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://StinaSoile:${password}@fullstack-course-cluste.ixcnawg.mongodb.net/noteApp?retryWrites=true&w=majority&appName=fullstack-course-cluster1`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    content: 'Rati riti ralla.',
    important: true,
})

Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})
// note.save().then(result => {
//     console.log('note saved!')
//     mongoose.connection.close()
// })