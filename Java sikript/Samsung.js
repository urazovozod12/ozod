let ol_1 = document.querySelectorAll('.ol_1');
let mobil = document.querySelectorAll('.mobil');
let li_1 = document.querySelectorAll('.li_1');
let mobil_b_2 = document.querySelectorAll('.mobil_b_2');
let img = document.querySelectorAll('.mobil_b_1 img');
let img_x = document.querySelectorAll('.img_x');
let search = document.querySelector('.search');
let search_00 = document.querySelector('.search_00 img');
let img_search = document.querySelector('.img_search');
let input = document.querySelector('.input');
let img_del = document.querySelector('.img_del')

ol_1.forEach((li, index) => {
    li.addEventListener('mouseenter', (event) => {
        event.preventDefault()
        remove2()
        mobil[index].classList.add('mobil_active')
        mobil[index].classList.add('animate__backInDown')
        img_left.style.display = "none"
        img_right.style.display = "none"
    })
})

function remove2() {
    mobil.forEach((item, index) => {
        item.classList.remove('mobil_active')
        item.classList.remove('animate__backInDown')
    })
}

li_1.forEach((li, index) => {
    li.addEventListener('mouseenter', () => {
        remove()
        mobil_b_2[index].classList.add('mobil_b_2_active')
        mobil_b_2[index].classList.add('animate__backInLeft')
        img[index].style.display = "initial"
    })
})

function remove() {
    mobil_b_2.forEach((item, index) => {
        item.classList.remove('mobil_b_2_active')
        item.classList.remove('animate__backInLeft')
        img[index].style.display = "none";

    })
}

img_x.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        mobil[index].classList.remove('mobil_active')
    })
})
img_search.addEventListener('click', (event) => {
    search.classList.add('search_active')
})

search_00.addEventListener('click', (event) => {

    search.classList.remove('search_active')
    img_left.style.display = "none"
    img_right.style.display = "none"
    mobil_b_2.style.display = "none"
})
img_del.addEventListener('click', () => {
    input.value = ""
})


// mouseenter
//mouseleave
// animate__backInLeft


let img_right = document.querySelector('.img_right');
let img_left = document.querySelector('.img_left');
let galiriya = document.querySelectorAll('.galiriya');
let slide = document.querySelectorAll('.slide');

img_left.addEventListener('click', () => {
    let galiriya_a_active = document.querySelector('.galiriya_a_active');
    galiriya_a_active.classList.remove('galiriya_a_active')
    if (galiriya_a_active.previousElementSibling) {
        galiriya_a_active.previousElementSibling.classList.add('galiriya_a_active')
    } else {
        slide[slide.length - 1].classList.add('galiriya_a_active')
    }
})
img_right.addEventListener('click', () => {
    let galiriya_a_active = document.querySelector('.galiriya_a_active');
    galiriya_a_active.classList.remove('galiriya_a_active')
    if (galiriya_a_active.nextElementSibling) {
        galiriya_a_active.nextElementSibling.classList.add('galiriya_a_active')
    } else {
        slide[0].classList.add('galiriya_a_active')
    }
})
let shops_a_1 = document.querySelectorAll('.shops_a_1 b');
let shops_a_2_a = document.querySelectorAll('.shops_a_2_a');
shops_a_1.forEach(b => {
    b.addEventListener('mouseenter', () => {
        b.classList.add('active_hover')
    })
    b.addEventListener('mouseleave', () => {
        b.classList.remove('active_hover')
    })
})
shops_a_1.forEach((b, index) => {
    b.addEventListener('click', () => {
        remove5()
        shops_a_2_a[index].classList.add('shops_a_2_a_active')
        shops_a_2_a[index].classList.add('animate__backInLeft')
    })
})

function remove5() {
    shops_a_2_a.forEach((item, index) => {
        item.classList.remove('shops_a_2_a_active')
        item.classList.remove('animate__backInLeft')
    })
}

let tv_all = document.querySelectorAll('.tv_all');
let tv_aoudio_a_1 = document.querySelectorAll('.tv_aoudio_a_1 button');
console.log(tv_all)
console.log(tv_aoudio_a_1)
tv_aoudio_a_1.forEach((button, index) => {
    button.addEventListener('click', () => {
        remove6()
        tv_all[index].classList.add('tv_aoudio_b_active')
        tv_all[index].classList.add('animate__fadeInRight')
    })
})

function remove6() {
    tv_all.forEach((item, index) => {
        item.classList.remove('tv_aoudio_b_active')
        item.classList.remove('animate__fadeInRight')
    })
}

let get_lost = document.querySelectorAll('.get_lost');
let popular_goods_b_1 = document.querySelectorAll('.popular_goods_b_1');
let popular_goods_b_2_b = document.querySelectorAll('popular_goods_b_2_b');
function hoverButton(hover_item, button) {
    hover_item.forEach((a, index) => {
        a.addEventListener('mouseenter', () => {
            button[index].classList.add('get_lost_active')
            button[index].classList.add('animate__backInUp')
            button[index].classList.remove('animate__backOutDown')
        })
        a.addEventListener('mouseleave', () => {
            button[index].classList.remove('get_lost_active')
            button[index].classList.add('animate__backOutDown')
            button[index].classList.remove('animate__backInUp')
        })
    })
}
hoverButton(popular_goods_b_1,get_lost)

hoverButton(popular_goods_b_2_b,get_lost)


let add_injection_b_0 = document.querySelectorAll('.add_injection_b_0');
let add_injection_b_1_b_3 = document.querySelectorAll('.add_injection_b_1_b_3');
let add_injection_b_1_b = document.querySelectorAll('.add_injection_b_1_b');
function hoverimg(hover_items, text) {
    hover_items.forEach((hr, indext) =>{
        hr.addEventListener('mousenter', () =>{
            text[indext].classList.add('.add_injection_b_0_active')
            text[indext].classList.add('.add_injection_b_1_b_3_active')
        })
        hr.addEventListener('mouseleave', () =>{
            text[indext].classList.remove('.add_injection_b_0_active')
            text[indext].classList.remove('.add_injection_b_1_b_3_active')
        })
    })
}

hoverimg( add_injection_b_1_b_3,add_injection_b_0)

hoverimg(add_injection_b_1_b,add_injection_b_0)



let google_seach_1_input = document.querySelector('.google_seach_1_input');
let img_del_u = document.querySelector('.img_del_u');
    img_del_u.addEventListener('click', () => {
    google_seach_1_input.value = ""
})

// mousenter
// mouseleave