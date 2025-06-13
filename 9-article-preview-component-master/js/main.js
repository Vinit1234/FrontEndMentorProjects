const shareBtn = document.querySelector(".share");
const socialLinksBox = document.querySelector(".card__social-links-box");

function toggleSocialLinks(){
   socialLinksBox.classList.toggle("hidden") ;
   
}

shareBtn.addEventListener("click",toggleSocialLinks);