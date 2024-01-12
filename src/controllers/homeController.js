
const getHomepage = (req, res) => {
    // call model
    res.render('index.ejs');
}
const getABC = (req, res) => {
    // call model
    res.send('test get /ABC');
}


module.exports = {
    getHomepage,
    getABC
}