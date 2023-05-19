'use client'
if (typeof window !== "undefined"){
window.addEventListener('scroll', scrollBtnDisplay)

function scrollBtnDisplay() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
   document.querySelector('button.go-up').style.display = "block";
  } else {
    document.querySelector('button.go-up').style.display = "none";
  }
}
}