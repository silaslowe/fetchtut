
async function getData() {
    const response = await fetch('ZonAnn.Ts+dSST.csv')
    const data = await response.text()
    const rows = data.split('\n').slice(1)
    rows.map(elt => {
        const row = elt.split(',')
        const year = row[0]
        const av = row[1]
        year ? console.log("YEAR: ", year, "AV: ", av) : null
    })
}

getData()