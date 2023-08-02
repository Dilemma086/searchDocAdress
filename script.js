const inpSearch = document.querySelector('.inp_search')
const inpSubmit = document.querySelector('.inp_submit')
const trs = document.querySelectorAll('.card')
const blockPlaceholder = document.querySelector('.blockPlaceholder')
const adress = document.querySelectorAll('.adressDocTer')

const searchDoc = (text) => {
    // const input = e.target;
    // const req = new RegExp(input.value)
    const arr = []
    adress.forEach((item) =>{
        const req = new RegExp(text)
        
        if(req.test(item.textContent) === true){
            item.classList.add('active')
            blockPlaceholder.insertAdjacentHTML('beforeend', `<li>${item.textContent}</li>`)
        }
    })
    // trs.forEach((item) => { // item блок одного участка с врачем и адресами
    //     const content = item.querySelector('.content').textContent // выбераем блок с адресами
    //     if(req.test(content) === true){// test возвращает true или false
    //        arr.push(content)
    //        console.log(arr)
    //     }
    // })
    // setPlaceholder(arr, req)
}

// const setPlaceholder = (arr, req) => {
//     arr.forEach(item => {
//         const str = item
//         const dataText = str.match(req).input
//         console.log(dataText.match(req))
//     })
// }
inpSearch.addEventListener('input', (e) => {
    adress.forEach(item => item.classList.remove('active'))
    searchDoc(inpSearch.value)
})

// inpSearch.addEventListener('input', searchDoc)