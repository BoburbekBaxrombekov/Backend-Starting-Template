const { fetch, fetchAll } = require('../../lib/postgres')

const ALL_TESTS = `
    SELECT
        *
    FROM
        test
    WHERE 
        app_user = $1
`
const NEW_TESTS = `
    INSERT INTO test(label, variant_a, variant_b, variant_c, variant_d, answer, app_user) VALUES ($1, $2, $3, $4, $5, $6, $7)
`

const allTests = (id) => fetchAll(ALL_TESTS, id)
const newTests = (label, variant_a, variant_b, variant_c, variant_d, answer, app_user) => fetchAll(NEW_TESTS, label, variant_a, variant_b, variant_c, variant_d, answer, app_user)

module.exports = {
    allTests,
    newTests
}