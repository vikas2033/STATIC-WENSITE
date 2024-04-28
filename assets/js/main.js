/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})


/*=============== Like ===============*/
const like = document.getElementById('like'),
      likeBtn = document.getElementById('like-btn'),
      likeClose = document.getElementById('like-close')

/* Login show */
likeBtn.addEventListener('click', () =>{
   like.classList.add('show-like')
})

/* Login hidden */
likeClose.addEventListener('click', () =>{
   like.classList.remove('show-like')
})



/*=============== shopping card ===============*/
const carts = document.getElementById('carts'),
      cartsbtn = document.getElementById('carts-btn'),
      cartsclose = document.getElementById('carts-close')

/* Login show */
   cartsbtn.addEventListener('click', () =>{
   carts.classList.add('show-carts')
})

/* Login hidden */
   cartsclose.addEventListener('click', () =>{
   carts.classList.remove('show-carts')
})