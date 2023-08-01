const inpSearch = document.querySelector('.inp_search')
const trs = document.querySelectorAll('.card')
const blockPlaceholder = document.querySelector('.blockPlaceholder')
const adress = document.querySelectorAll('.adressDocTer')

const searchDoc = (e) => {
    const input = e.target;
    const req = new RegExp(input.value)
    const arr = []
    trs.forEach((item) => {
        const content = item.querySelector('.content').textContent
        req.test(content) ?  arr.push(content) : false
    })
    setPlaceholder(arr, req)
}

const setPlaceholder = (arr, req) => {
    arr.forEach(item => {
        const str = item
        const dataText = str.match(req).input
        console.log(dataText.match(req))
    })
}

inpSearch.addEventListener('input', searchDoc)