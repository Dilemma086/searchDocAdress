const inpSearch = document.querySelector('.inp_search')
const inpSubmit = document.querySelector('.inp_submit')
const trs = document.querySelectorAll('.card')
const blockPlaceholder = document.querySelector('.blockPlaceholder')
const adress = document.querySelectorAll('.adressDocTer')
const body = document.querySelector('body')


const searchDoc = (text) => {
    const arr = []
    if(text.length>1){
        adress.forEach((item) =>{
            const req = new RegExp(text.toLowerCase())
            if(req.test(item.textContent.toLowerCase()) === true){
                item.classList.add('active')
                let li = document.createElement('li')
                li.appendChild(document.createTextNode(item.textContent))
                blockPlaceholder.append(li)
            }
        })
    }

    let oneli = document.querySelectorAll('li')
        oneli.forEach(w => {
            w.addEventListener('click', (e) =>{
                inpSearch.value = e.target.textContent
                CleaningLi()  
        })
    })
    // const input = e.target;
    // const req = new RegExp(input.value)
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
// inpSearch.addEventListener('input', searchDoc)

inpSubmit.addEventListener('click', () =>{
    finalSearch()
})


const CleaningLi = () => {
    adress.forEach(item => item.classList.remove('active'))
    let allLi = Array.from(document.querySelectorAll('li'))
    allLi.map(item=>item.remove())
}

inpSearch.addEventListener('input', (e) => {
    CleaningLi()
    searchDoc(inpSearch.value)
})

const finalSearch = () => {
       adress.forEach((item) =>{
        if(inpSearch.value === item.textContent){
            const obj =item.parentElement.parentElement.childNodes[1].children
            const obj2 = item.parentElement.parentElement.childNodes[5].children;
            const numUch = item.parentElement.parentElement.previousElementSibling.previousElementSibling.innerHTML
            const modalOpen = document.createElement('div')
            modalOpen.classList.add('modalOpen')
            body.append(modalOpen)
            const modalOpenTer = document.createElement('div')
            modalOpenTer.classList.add('modalOpenTer')
            modalOpen.append(modalOpenTer)
            modalOpenTer.innerHTML = `
                <span class="contCloss"> x </span>
                <h1>${numUch}</h1>
                <div class="contImg"><img src='${obj[0].src}'/></div> 
                <div class="contName">${obj[1].textContent}</div>
                <div class=contContact">${obj2[0].textContent}</div>
            `
            const contCloss = document.querySelector('.contCloss')
            contCloss.addEventListener('click', () =>{document.querySelector('.modalOpen').remove()})
        }
    })
}

