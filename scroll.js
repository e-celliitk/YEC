window.onscroll = function() {scrollFunction()}
function scrollFunction(){
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    // console.log(scrollTop);
    var navElement = document.querySelector("header")
    var targetEls = document.querySelector("#nav-bar").querySelectorAll('li')
    // console.log(targetEls);
    var logoText = document.querySelector('.logo-text')
    // console.log(logoText)
    if(scrollTop > 200){
        // console.log(navElement)
        navElement.style.backgroundColor = "black"
        // document.querySelector('.logo-text').style.color = "black"
        logoText.style.color = "white"
        targetEls.forEach((ele)=>{
            ele.querySelector('a').style.color = "white";
            // console.log(ele.querySelector('a'));
        })
    }else{
        navElement.style.backgroundColor = "transparent"
        // document.querySelector('.logo-text').style.color = "white"
        logoText.style.color = "black"
        targetEls.forEach((ele)=>{
            ele.querySelector('a').style.color = "black";
        })
    }

}