const { 
    allTests,
    newTests
} = require('./model')

module.exports = {
    GET: async (req, res) => {
        try {
            const { id } = req.params
            const user_tests = await allTests(id)
            res.send(user_tests)
        } catch (err) {
            console.log(err.message)
        }
    },
    POST: async (req, res) => {
        try {
            const {
                label, variant_a, variant_b, variant_c, variant_d, answer, app_user
            } = req.body
            await newTests(
                label, variant_a, variant_b, variant_c, variant_d, answer, app_user
            )
            res.send("ok")
        } catch (err) {
            console.log(err.message)
        }
    }
}