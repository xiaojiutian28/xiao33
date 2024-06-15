window.onscroll=()=>{
    if(window.scrollY>0){
        $("nav").addClass('active');
        console.log("滚动事件")
    }
    else{
        $("nav").removeClass('active')
    }
    $(".navbar-nav a").click(function(){
        // console.log("点击")
        $(".navbar-toggler").click()
    })
}