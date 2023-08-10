if(document.querySelector('.inp_search') != null){
    const inpSearch = document.querySelector('.inp_search')
    const inpSubmit = document.querySelector('.inp_submit')
    const trs = document.querySelectorAll('.card')
    const searchBlock = document.querySelector('.searchBlock')
    const adress = document.querySelectorAll('.adressDocTer')
    const body = document.querySelector('body')
    const blockPlaceholder = document.querySelector('.blockPlaceholder')
    const globalBlockDiv = document.createElement('div') 
    const clueBlock = document.createElement('div')
    const searchParg = document.querySelector('.searchParg')
    const inputBlock = document.querySelector('.inputBlock')
    const searchResult = document.querySelector('.searchResult')
    const modalOpenTer = document.createElement('div')
    
    const searchDoc = (text) => {
        let count = 1 
        if(text.length>1){
            clueBlock.classList.add('clue') 
            inputBlock.append(clueBlock)
            clueBlock.innerHTML = `
                <img src="https://совбольница.рф/images/icons/arrow.png"/>
                <p> Выберите адрес</p>
            `
            adress.forEach((item) =>{
                const req = new RegExp(text.toLowerCase())
                if(req.test(item.textContent.toLowerCase()) === true){
                    let li = document.createElement('li')
                    li.appendChild(document.createTextNode(item.textContent))
                    blockPlaceholder.style.height = (count * 42) + 'px'
                    blockPlaceholder.append(li)
                    count++
                }
            })
        }
        let oneli = document.querySelectorAll('li')
            oneli.forEach(w => {
                w.addEventListener('click', (e) =>{
                    inpSearch.value = e.target.textContent
                    blockPlaceholder.style.height = "0px"
                    count = 1
                    CleaningLi() 
                    clueBlock.remove() 
            })
        })
       
    }

    globalBlockDiv.addEventListener('click', () => {
        blockPlaceholder.style.height = "0px"
        globalBlockDiv.remove()
        searchParg.classList.remove('activeP')
    })

    inpSubmit.addEventListener('click', () =>{
        modalOpenTer.remove()
        searchParg.classList.remove('activeP')
        globalBlockDiv.remove()
        searchBlock.style.zIndex = "0"
        finalSearch()
        inpSearch.value = ''
    })
    
    const CleaningLi = () => {
        let allLi = Array.from(document.querySelectorAll('li'))
        allLi.map(item=>item.remove())
        
    }

    inpSearch.addEventListener('input', (e) => {
        CleaningLi()
        searchDoc(inpSearch.value)
    })

    inpSearch.addEventListener('focus', () => {
        
        searchBlock.style.zIndex = "1"
        searchParg.classList.add('activeP')
        globalBlockDiv.classList.add('curtain')
        body.append(globalBlockDiv)
    })

    const finalSearch = () => {
           adress.forEach((item) => {
            if(inpSearch.value === item.textContent){
                const obj =item.parentElement.parentElement.childNodes[1].children
                const obj2 = item.parentElement.parentElement.childNodes[5].children;
                const numUch = item.parentElement.parentElement.previousElementSibling.previousElementSibling.innerHTML
                // const modalOpen = document.createElement('div')
                // modalOpen.classList.add('modalOpen')
                // body.append(modalOpen)
               
                modalOpenTer.classList.add('modalOpenTer')
                // modalOpen.append(modalOpenTer)
                searchResult.append(modalOpenTer)
                modalOpenTer.innerHTML = `
                    <span class="contCloss"> <img src="https://совбольница.рф/images/icons/close.png"/> </span>
                    <h1>${numUch}</h1>
                    <div class="modalTitel">
                        <div class="modalTitel1">Должность Ф.И.О.</div>
                        <div class="modalTitel2">Номер кабинета, <br> телефон рабочий</div>
                    </div>
                    <div class="modalBlock">
                        <div class="contImg"></div>
                        <div class=contContact"><p>${obj2[0].innerHTML}</p></div>
                    </div>    
                `
                for(let i=0; i<obj.length; i++){
                    if(obj[i].tagName === 'IMG'){
                        const contImg = document.querySelector('.contImg')
                        contImg.insertAdjacentHTML("beforeend",  `<img  src='${obj[i].src}'/>`)
                    }
                    else{
                        const contImg = document.querySelector('.contImg')
                        contImg.insertAdjacentHTML("beforeend",  `<p>${obj[i].innerHTML}</p>`)
                        
                    }
                }
                const contCloss = document.querySelector('.contCloss')
                contCloss.addEventListener('click', () => {
                    document.querySelector('.modalOpen').remove()
                    
                })
            }
        })
    }
}