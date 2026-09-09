import express from 'express'

const app = express()
app.use(express.json())
const port = 3000

app.get("/api/formulas", (_, res) => {
    res.send("Possuir as fórmulas para conversão de : Celsius para Fahrenheit, Fahrenheit para Celsius, Celsius para Kelvin.")
})

app.post("/api/fahrenheit", (req, res) => {
    const cel = req.body.cel
    const valor = (cel * 9 / 5) + 32


    res.send({ Fahrenheit: valor })
})

app.post("/api/celsius", (req, res) => {
    const fah = req.body.fah
    const valor = (fah - 32) * 5 / 9

    res.send({ Celsius: valor })
})

app.post("/api/kelvin", (req, res) => {
    const cel = req.body.cel
    const valor = cel + 273.15

    res.send({ Kelvin: valor })
})

app.listen(port, () => {
    console.log(`A porta de entrada é a ${port}`)
})