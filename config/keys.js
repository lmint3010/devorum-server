module.exports = {
  mongoURI: 'mongodb+srv://lmint:Taokobiet123@cluster0-l9cgs.gcp.mongodb.net/Devorum?retryWrites=true',
  mongoURI_TEST: 'mongodb+srv://lmint:Taokobiet123@cluster0-l9cgs.gcp.mongodb.net/Devorum?retryWrites=true',//must generate a new url to test
  mongooseOption: {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
  secretKey: 'lmint'
}

// @mongoUser - lmthonga17006@cusc.ctu.edu.vn