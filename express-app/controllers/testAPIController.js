module.exports = {
        getTest: async (req, res) => {
        return res.status(200).json({'greeting': "Hello", 'lucky_num': 3});
     }
}