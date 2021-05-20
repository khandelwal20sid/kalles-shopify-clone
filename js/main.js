// owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,   
    nav:false,    
    dots: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1024:{
            items:4
        },
        1050: {
            items:6
        }
    }
})

// sidebar
function openSidebar() {         
    document.getElementById('sidebar').classList.add('toggle-sidebar')   
}

function closeSidebar() {         
    document.getElementById('sidebar').classList.remove('toggle-sidebar')  
}

// login-sidebar
function openLoginBar() {
    document.getElementById('login-sidebar').classList.add('toggle-loginbar')
}

function closeLoginBar() {         
    document.getElementById('login-sidebar').classList.remove('toggle-loginbar')  
}

// shopping-cart
function openShoppingCart() {
    document.getElementById('shopping-cart-sidebar').classList.add('toggle-shopping-cart')
}

function closeShoppingCart() {         
    document.getElementById('shopping-cart-sidebar').classList.remove('toggle-shopping-cart')  
}
