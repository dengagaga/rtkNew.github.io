const sectionBtns  = document.querySelectorAll('.section-products_mid-left-btn')
const headerBtnCash  = document.querySelector('.header__nav-btn-cash-icon')
const cartDropdownCaret  = document.querySelector('.cart__dropdown-caret')
const modalCorzina  = document.querySelector('.modal_corzina')
const modalCorzinaEmpty = modalCorzina.querySelector('.modal_corzina-empty')
const modalCorzinaCartAll = modalCorzina.querySelector('.modal_corzina-cart-all')
const productsListItemBotBtn  = document.querySelectorAll('.products-list__item-2-bot-btn')
const modalCorzinaTotalTopItogo  = document.querySelector('.modal_corzina-total-top-itogo')
const headerNavBtnCashIcon  = document.querySelector('.header__nav-btn-cash-icon')
const jsonCor = JSON.parse(localStorage.getItem('corzina'))
const sectionProductsRightMidAll  = document.querySelector('.section-products-right-mid-all')
const sectionOneDroplist  = document.querySelector('.section-products-right-top-droplist')
const sectionOneDroplist2  = document.querySelector('.section-products-right-mid-droplist')
const sectionProductsRightTopAll  = document.querySelector('.section-products-right-top-all')
const productsListBtnPay  = document.querySelectorAll('.products-list__item-2-bot-btnPay')
let cardArray = localStorage.getItem('corzina') ? JSON.parse(localStorage.getItem('corzina')) : []
const html = (item) => {
    return `<div class="modal_corzina-cart">
    <svg class="close" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
           <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
               <g transform="translate(-20.000000, -148.000000)">
                   <g transform="translate(0.000000, 58.000000)">
                       <g transform="translate(0.000000, 27.000000)">
                           <g transform="translate(20.000000, 63.000000)" id="Icon">
                               <rect x="0" y="0" width="20" height="20"></rect>
                               <g transform="translate(1.000000, 1.000000)">
                                   <path d="M9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 Z" fill="#666F80"></path>
                                   <g transform="translate(6.000000, 6.000000)" stroke="#FFFFFF" stroke-linecap="round" stroke-width="1.5">
                                       <line x1="0" y1="6" x2="6" y2="0"></line>
                                       <line x1="6" y1="6" x2="0" y2="0"></line>
                                   </g>
                               </g>
                           </g>
                       </g>
                   </g>
               </g>
           </g>
       </svg>
    <img src="${item.img}" alt="">
    <div class="modal_corzina-cart-info-all">
       <div class="modal_corzina-cart-info">
           <p class="modal_corzina-cart-text">${item.title}</p>
           <p class="modal_corzina-cart-price">${item.price}</p>
       </div>
       <div class="modal_corzina-cart-info">
           <p class="modal_corzina-cart-text lng-trans-333">Количество поддонов:</p>
           <p class="modal_corzina-cart-price">
           <button class="modal_corzina-cart-minus">
               <svg width="18" height="18" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="11.5" cy="11.5" r="11.5" fill="#3BB17B"></circle>
             <path d="M5.95801 11.5H17.0413" stroke="#DCF2E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
             </svg>
           </button>
           <span class="modal_corzina-cart-count">${item.count}</span>
           <button class="modal_corzina-cart-plus">
           <svg width="18" height="18" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="11.5" cy="11.5" r="11.5" fill="#3BB17B"></circle>
           <path d="M16.2497 10.7099H12.2913V6.75158C12.2913 6.54161 12.2079 6.34025 12.0595 6.19178C11.911 6.04332 11.7096 5.95991 11.4997 5.95991C11.2897 5.95991 11.0883 6.04332 10.9399 6.19178C10.7914 6.34025 10.708 6.54161 10.708 6.75158V10.7099H6.74967C6.53971 10.7099 6.33835 10.7933 6.18988 10.9418C6.04142 11.0903 5.95801 11.2916 5.95801 11.5016C5.95801 11.7115 6.04142 11.9129 6.18988 12.0614C6.33835 12.2098 6.53971 12.2932 6.74967 12.2932H10.708V16.2516C10.708 16.4615 10.7914 16.6629 10.9399 16.8114C11.0883 16.9598 11.2897 17.0432 11.4997 17.0432C11.7096 17.0432 11.911 16.9598 12.0595 16.8114C12.2079 16.6629 12.2913 16.4615 12.2913 16.2516V12.2932H16.2497C16.4596 12.2932 16.661 12.2098 16.8095 12.0614C16.9579 11.9129 17.0413 11.7115 17.0413 11.5016C17.0413 11.2916 16.9579 11.0903 16.8095 10.9418C16.661 10.7933 16.4596 10.7099 16.2497 10.7099Z" fill="#DCF2E7"></path>
           </svg>
           </button></p>
       </div>
       <div class="modal_corzina-cart-info">
           <p class="modal_corzina-cart-text">Итоговая цена:</p>
           <p class="modal_corzina-cart-price">${parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count} €</p>
       </div>
     </div>
   </div>`
}
const html2 = (item) => { 
    return `  
    <div class="section-products-right-top-droplist-item">
    <div class="section-products-right-top-droplist-one">
                <p class="section-products-right-top-droplist-one-p">${item.title}</p>
                <span class="section-products-right-top-droplist-one-span">${item.price}</span>
              </div>
              <div class="section-products-right-top-droplist-two">
                <p class="section-products-right-top-droplist-two-p lng-trans-322">Количество поддонов:</p>
                <div class="section-products-right-top-droplist-two-block">
                  <button class="section-products-right-top-droplist-two-btn section-products-right-top-droplist-two-btn-minus">

                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="11.5" cy="11.5" r="11.5" fill="#3BB17B" />
                      <path d="M5.95801 11.5H17.0413" stroke="#DCF2E7" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </button>
                  <span class="section-products-right-top-droplist-two-span">${item.count}</span>
                  <button class="section-products-right-top-droplist-two-btn">

                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="11.5" cy="11.5" r="11.5" fill="#3BB17B" />
                      <path
                        d="M16.2497 10.7099H12.2913V6.75158C12.2913 6.54161 12.2079 6.34025 12.0595 6.19178C11.911 6.04332 11.7096 5.95991 11.4997 5.95991C11.2897 5.95991 11.0883 6.04332 10.9399 6.19178C10.7914 6.34025 10.708 6.54161 10.708 6.75158V10.7099H6.74967C6.53971 10.7099 6.33835 10.7933 6.18988 10.9418C6.04142 11.0903 5.95801 11.2916 5.95801 11.5016C5.95801 11.7115 6.04142 11.9129 6.18988 12.0614C6.33835 12.2098 6.53971 12.2932 6.74967 12.2932H10.708V16.2516C10.708 16.4615 10.7914 16.6629 10.9399 16.8114C11.0883 16.9598 11.2897 17.0432 11.4997 17.0432C11.7096 17.0432 11.911 16.9598 12.0595 16.8114C12.2079 16.6629 12.2913 16.4615 12.2913 16.2516V12.2932H16.2497C16.4596 12.2932 16.661 12.2098 16.8095 12.0614C16.9579 11.9129 17.0413 11.7115 17.0413 11.5016C17.0413 11.2916 16.9579 11.0903 16.8095 10.9418C16.661 10.7933 16.4596 10.7099 16.2497 10.7099Z"
                        fill="#DCF2E7" />
                    </svg>

                  </button>
                </div>
              </div>
              <div class="section-products-right-top-droplist-three">
                <p class="section-products-right-top-droplist-three-p lng-trans-323">Итоговая цена за 0,975 т:</p>
                <span class="section-products-right-top-droplist-three-span">212,00 €</span>
              </div> </div>`
}


if (localStorage.getItem('corzina')) {

    
    if (jsonCor.length != 0) {
       
        
        modalCorzinaEmpty.classList.add('modal_corzina--none')
        cardArray = jsonCor
        const items = cardArray.map(item => {
            modalCorzinaTotalTopItogo.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
           return html(item)
        }).join('')
       
        headerNavBtnCashIcon.children[1].textContent = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
        modalCorzinaCartAll.innerHTML = ''
        modalCorzinaCartAll.insertAdjacentHTML('beforeend', items)
        
        const items2 = cardArray.map(item => {
            modalCorzinaTotalTopItogo.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
           
           return html2(item)
        }).join('')
        if (sectionOneDroplist) {
            sectionOneDroplist.innerHTML = ''
            sectionOneDroplist.insertAdjacentHTML('beforeend', items2)
            const itog = document.querySelector('.section-products-right-bot-span')
            itog.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`

            sectionOneDroplist.addEventListener('click', (e) => {
                const plus = e.target.closest('.section-products-right-top-droplist-two-btn')
                const minus = e.target.closest('.section-products-right-top-droplist-two-btn-minus')
                
                
                if (plus.classList.value == 'section-products-right-top-droplist-two-btn') {
                    const card = plus.closest('.section-products-right-top-droplist-item')
                    const cardTitle = card.querySelector('.section-products-right-top-droplist-one').children[0].textContent
                    console.log(card, cardTitle);
                    
                    cardArray = cardArray.map(ar => {
                        if (ar.title == cardTitle) {
                            ar.count += 1
                        }
                        return ar
                    })
                    const items2 = cardArray.map(item => {
                        modalCorzinaTotalTopItogo.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                       
                       return html2(item)
                    }).join('')
                    sectionOneDroplist.innerHTML = ''
                    sectionOneDroplist.insertAdjacentHTML('beforeend', items2)
                    const itog = document.querySelector('.section-products-right-bot-span')
                    itog.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                    localStorage.setItem('corzina', JSON.stringify(cardArray))
                }
                console.log(minus.classList.value);
                if (minus.classList.value == 'section-products-right-top-droplist-two-btn section-products-right-top-droplist-two-btn-minus') {
                    console.log('minus');
                    
                    const card = minus.closest('.section-products-right-top-droplist-item')
                    const cardTitle = card.querySelector('.section-products-right-top-droplist-one').children[0].textContent
                    console.log(card, cardTitle);
                    
                    cardArray = cardArray.map(ar => {
                        if (ar.title == cardTitle) {
                            ar.count = ar.count - 1
                        }
                        return ar
                    })
                    const items2 = cardArray.map(item => {
                        modalCorzinaTotalTopItogo.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                       
                       return html2(item)
                    }).join('')
                    sectionOneDroplist.innerHTML = ''
                    sectionOneDroplist.insertAdjacentHTML('beforeend', items2)
                    const itog = document.querySelector('.section-products-right-bot-span')
                    itog.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                    localStorage.setItem('corzina', JSON.stringify(cardArray))
                }
            })
            

           
        }


        



        modalCorzina.addEventListener('click', (e) => {
            const svg = e.target.closest('.close')
            const btnPlus = e.target.closest('.modal_corzina-cart-plus')
            const btnMinus = e.target.closest('.modal_corzina-cart-minus')
            if (svg) {
            if ( svg.classList.value == 'close') {
                const card2 = svg.parentElement
                const cardTitle = card2.querySelector('.modal_corzina-cart-info-all').children[0].children[0].textContent
                console.log(cardTitle);
                cardArray = cardArray.filter(item => item.title != cardTitle)
                console.log(cardArray);
                const items = cardArray.map(item => {
                    
                    return html(item)
                }).join('')
                modalCorzinaTotalTopItogo.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                headerNavBtnCashIcon.children[1].textContent = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                modalCorzinaCartAll.innerHTML = ''
                modalCorzinaCartAll.insertAdjacentHTML('beforeend', items)
                localStorage.setItem('corzina', JSON.stringify(cardArray))
            }
        }
        if (btnPlus) {
            if ( btnPlus.classList.value == 'modal_corzina-cart-plus') {
                const card3 = btnPlus.parentElement.parentElement.parentElement
                const cardTitle = card3.children[0].children[0].textContent
                cardArray = cardArray.map(ar => {
                    if (ar.title == cardTitle) {
                        ar.count += 1
                    }
                    return ar
                })
                console.log(btnPlus);
                
                console.log(cardTitle);
                console.log(cardArray);
                const items = cardArray.map(item => {
                    
                    return html(item)
                }).join('')
                modalCorzinaTotalTopItogo.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                headerNavBtnCashIcon.children[1].textContent = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                modalCorzinaCartAll.innerHTML = ''
                modalCorzinaCartAll.insertAdjacentHTML('beforeend', items)
                localStorage.setItem('corzina', JSON.stringify(cardArray))
                
           }
        }
        if (btnMinus) {
            if ( btnMinus.classList.value == 'modal_corzina-cart-minus') {
                const card4 = btnMinus.parentElement.parentElement.parentElement
                const cardTitle = card4.children[0].children[0].textContent
                cardArray = cardArray.map(ar => {
                    if (ar.title == cardTitle) {
                        ar.count = ar.count - 1
                    }
                    return ar
                })
                console.log(btnPlus);
                
                console.log(cardTitle);
                console.log(cardArray);
                const items = cardArray.map(item => {
                    
                    return html(item)
                }).join('')
                modalCorzinaTotalTopItogo.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                headerNavBtnCashIcon.children[1].textContent = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                modalCorzinaCartAll.innerHTML = ''
                modalCorzinaCartAll.insertAdjacentHTML('beforeend', items)
                localStorage.setItem('corzina', JSON.stringify(cardArray))
                
           }
        }
        })
    } else {
        modalCorzina.addEventListener('click', (e) => {
            console.log('sssssssssssssssssss');
            
            const svg = e.target.closest('.close')
            const btnPlus = e.target.closest('.modal_corzina-cart-plus')
            if (svg) {
            if ( svg.classList.value == 'close') {
                const card2 = svg.parentElement
                const cardTitle = card2.querySelector('.modal_corzina-cart-info-all').children[0].children[0].textContent
                console.log(cardTitle);
                cardArray = cardArray.filter(item => item.title != cardTitle)
                console.log(cardArray);
                const items = cardArray.map(item => {
                    return html(item)
                }).join('')
                modalCorzinaTotalTopItogo.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                headerNavBtnCashIcon.children[1].textContent = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                modalCorzinaCartAll.innerHTML = ''
                modalCorzinaCartAll.insertAdjacentHTML('beforeend', items)
                localStorage.setItem('corzina', JSON.stringify(cardArray))
            }
        }
        if (btnPlus) {
            if ( btnPlus.classList.value == 'modal_corzina-cart-plus') {
                const card3 = btnPlus.parentElement.parentElement.parentElement
                const cardTitle = card3.children[0].children[0].textContent
                cardArray = cardArray.map(ar => {
                    if (ar.title == cardTitle) {
                        ar.count += 1
                    }
                    return ar
                })
                console.log(btnPlus);
                
                console.log(cardTitle);
                console.log(cardArray);
                const items = cardArray.map(item => {
                    
                    return html(item)
                }).join('')
                modalCorzinaTotalTopItogo.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                headerNavBtnCashIcon.children[1].textContent = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                modalCorzinaCartAll.innerHTML = ''
                modalCorzinaCartAll.insertAdjacentHTML('beforeend', items)
                localStorage.setItem('corzina', JSON.stringify(cardArray))
                
           }
        }
        if (btnMinus) {
            if ( btnMinus.classList.value == 'modal_corzina-cart-minus') {
                const card4 = btnMinus.parentElement.parentElement.parentElement
                const cardTitle = card4.children[0].children[0].textContent
                cardArray = cardArray.map(ar => {
                    if (ar.title == cardTitle) {
                        ar.count = ar.count - 1
                    }
                    return ar
                })
                console.log(btnPlus);
                
                console.log(cardTitle);
                console.log(cardArray);
                const items = cardArray.map(item => {
                    
                    return html(item)
                }).join('')
                modalCorzinaTotalTopItogo.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                headerNavBtnCashIcon.children[1].textContent = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                modalCorzinaCartAll.innerHTML = ''
                modalCorzinaCartAll.insertAdjacentHTML('beforeend', items)
                localStorage.setItem('corzina', JSON.stringify(cardArray))
                
           }
        }
        })
    }
}else {
    modalCorzina.addEventListener('click', (e) => {
        console.log('sssssssssssssssssss');
        
        const svg = e.target.closest('.close')
        const btnPlus = e.target.closest('.modal_corzina-cart-plus')
        const btnMinus = e.target.closest('.modal_corzina-cart-minus')
        if (svg) {
        if ( svg.classList.value == 'close') {
            const card2 = svg.parentElement
            const cardTitle = card2.querySelector('.modal_corzina-cart-info-all').children[0].children[0].textContent
            console.log(cardTitle);
            cardArray = cardArray.filter(item => item.title != cardTitle)
            console.log(cardArray);
            const items = cardArray.map(item => {
                return html(item)
            }).join('')
            modalCorzinaTotalTopItogo.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
            headerNavBtnCashIcon.children[1].textContent = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
            modalCorzinaCartAll.innerHTML = ''
            modalCorzinaCartAll.insertAdjacentHTML('beforeend', items)
            localStorage.setItem('corzina', JSON.stringify(cardArray))
        }
    }
    if (btnPlus) {
        if ( btnPlus.classList.value == 'modal_corzina-cart-plus') {
            const card3 = btnPlus.parentElement.parentElement.parentElement
            const cardTitle = card3.children[0].children[0].textContent
            cardArray = cardArray.map(ar => {
                if (ar.title == cardTitle) {
                    ar.count += 1
                }
                return ar
            })
            console.log(btnPlus);
            
            console.log(cardTitle);
            console.log(cardArray);
            const items = cardArray.map(item => {
                
                return html(item)
            }).join('')
            modalCorzinaTotalTopItogo.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
            headerNavBtnCashIcon.children[1].textContent = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
            modalCorzinaCartAll.innerHTML = ''
            modalCorzinaCartAll.insertAdjacentHTML('beforeend', items)
            localStorage.setItem('corzina', JSON.stringify(cardArray))
            
       }
    }
    if (btnMinus) {
        if ( btnMinus.classList.value == 'modal_corzina-cart-minus') {
            const card4 = btnMinus.parentElement.parentElement.parentElement
            const cardTitle = card4.children[0].children[0].textContent
            cardArray = cardArray.map(ar => {
                if (ar.title == cardTitle) {
                    ar.count = ar.count - 1
                }
                return ar
            })
            console.log(btnMinus);
            
            console.log(cardTitle);
            console.log(cardArray);
            const items = cardArray.map(item => {
                
                return html(item)
            }).join('')
            modalCorzinaTotalTopItogo.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
            headerNavBtnCashIcon.children[1].textContent = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
            modalCorzinaCartAll.innerHTML = ''
            modalCorzinaCartAll.insertAdjacentHTML('beforeend', items)
            localStorage.setItem('corzina', JSON.stringify(cardArray))
            
       }
    }
    })
}






sectionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        sectionBtns.forEach(btn => {
            btn.classList.remove('section-products_mid-left-btns--active')
        })
        btn.classList.add('section-products_mid-left-btns--active')
    })
})
headerBtnCash.addEventListener('click', () => {
    console.log('22');
    
    modalCorzina.classList.toggle('modal_corzina--none')
    cartDropdownCaret.classList.toggle('modal_corzina--none')
})







productsListItemBotBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.parentElement.parentElement.parentElement
        const cardImg = card.querySelector('.products-list__item-2-top-right').children[0].src
        const cardTitle = card.querySelector('.products-list__item-2-top-left').children[0].textContent
        const cardPrice = card.querySelector('.products-list__item-2-bot-item-prices-2').children[0].textContent
        const obj = {
            img: cardImg,
            title: cardTitle,
            price: cardPrice,
            count: 1
        }
        let exists = cardArray.filter(item => item.title == obj.title);
        if (exists.length == 0) {
            cardArray.push(obj)
            localStorage.setItem('corzina', JSON.stringify(cardArray))
            modalCorzinaEmpty.classList.add('modal_corzina--none')
            console.log(modalCorzinaCartAll);
            const items = cardArray.map(item => {
                modalCorzinaTotalTopItogo.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                 headerNavBtnCashIcon.children[1].textContent = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                 return html(item)
             }).join('')
             modalCorzinaCartAll.innerHTML = ''
             modalCorzinaCartAll.insertAdjacentHTML('beforeend', items)
        } else {
            cardArray.forEach(item => {
                if (exists[0].title == item.title) {
                    item.count += 1
                    const items = cardArray.map(item => {
                        modalCorzinaTotalTopItogo.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                         headerNavBtnCashIcon.children[1].textContent = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                         return html(item)
                     }).join('')
                     modalCorzinaCartAll.innerHTML = ''
                     modalCorzinaCartAll.insertAdjacentHTML('beforeend', items)
                }
            })
            localStorage.setItem('corzina', JSON.stringify(cardArray))
            console.log(cardArray, 'Объект уже существует в массиве');
        }
    })
})




productsListBtnPay.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.products-list__item-2')
        const cardTitle = card.querySelector('.products-list__item-2-top-left').children[0].textContent
        const cardPrice = card.querySelector('.products-list__item-2-bot-item-prices-2').children[0].textContent
        const cardImg = card.querySelector('.products-list__item-2-top-right').children[0].src
        const obj = {
            img:cardImg,
            title: cardTitle,
            price: cardPrice,
            count: 1
        }
        console.log(btn, obj);
        let exists = cardArray.filter(item => item.title == obj.title);
        if (exists.length == 0) {
            cardArray.push(obj)
            localStorage.setItem('corzina', JSON.stringify(cardArray))
            modalCorzinaEmpty.classList.add('modal_corzina--none')
            console.log(modalCorzinaCartAll);
            const items = cardArray.map(item => {
                modalCorzinaTotalTopItogo.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                 headerNavBtnCashIcon.children[1].textContent = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                 
                 return html(item)
             }).join('')
        
             modalCorzinaCartAll.innerHTML = ''
             modalCorzinaCartAll.insertAdjacentHTML('beforeend', items)
        } else {
            cardArray.forEach(item => {
                if (exists[0].title == item.title) {
                    item.count += 1
                    const items = cardArray.map(item => {
                        modalCorzinaTotalTopItogo.innerHTML = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                         headerNavBtnCashIcon.children[1].textContent = `${cardArray.reduce((acc, item) => acc + parseFloat(item.price.replace('€', '').trim().replace(',', '.')) * item.count, 0)} €`
                         
                         return html(item)
                     }).join('')
                     modalCorzinaCartAll.innerHTML = ''
                     modalCorzinaCartAll.insertAdjacentHTML('beforeend', items)
                }
                
            })
            
            localStorage.setItem('corzina', JSON.stringify(cardArray))
            console.log('Объект уже существует в массиве');
        }
        
    })
})


if (sectionProductsRightTopAll) {
    sectionProductsRightTopAll.addEventListener('click', (e) => {
        sectionOneDroplist.classList.toggle('section-products-right-top-droplist--none')
    })
}
if (sectionProductsRightMidAll) {
    sectionProductsRightMidAll.addEventListener('click', (e) => {
        sectionOneDroplist2.classList.toggle('section-products-right-top-droplist--none')
    })
}


const formZakazDeliveryItem = document.querySelectorAll('.form_zakaz-delivery-item')
const formZakazDeliveryItem1 = document.querySelector('.form_zakaz-delivery-item-one')
const formZakazDeliveryItem3 = document.querySelector('.form_zakaz-delivery-item-three')
const lngTrans326 = document.querySelector('.lng-trans-326')


formZakazDeliveryItem.forEach(item => {
    
    item.addEventListener('click', () => {
        formZakazDeliveryItem.forEach(item => {
            item.classList.remove('form_zakaz-delivery-item--active')
        })
        item.classList.add('form_zakaz-delivery-item--active')
    })
})
if (formZakazDeliveryItem1) {
    formZakazDeliveryItem1.addEventListener('click', () => {
        lngTrans326.textContent = 'Стандартная доставка'
    })
}
if (formZakazDeliveryItem3) {
    formZakazDeliveryItem3.addEventListener('click', () => {
        lngTrans326.textContent = 'Без доставки'
    })
}

