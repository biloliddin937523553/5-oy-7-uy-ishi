let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

let res = data.map((value) =>  {
    if (value > 50 ) {
        let h1 = document.createElement('h1')
        h1.innerHTML = value
        document.body.append(h1)
        h1.style.background = 'green'
        h1.style.color = 'white'
        h1.style.width = '51%'
        h1.style.paddingLeft = '49%'
    }else{
        let h1 = document.createElement('h1')
        h1.innerHTML = value
        document.body.append(h1)
        h1.style.background = 'red'
        h1.style.color = 'white'
        h1.style.width = '51%'
        h1.style.paddingLeft = '49%'
    }   
})
document.body.style.display = 'flex'
document.body.style.flexDirection = 'column'
document.body.style.alignItems = 'center'