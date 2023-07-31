const inpSearch = document.querySelector('.inp_search')
const trs = document.querySelectorAll('.card')
const blockPlaceholder = document.querySelector('.blockPlaceholder')
console.log(trs);

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
    console.log(arr);
    arr.forEach(item => {
        const str = item
     console.log(  str.match(req).input)
    })
}


inpSearch.addEventListener('input', searchDoc)