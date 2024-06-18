const ratingsContainer=document.querySelector(".ratings")
const thankyouContainer = document.querySelector(".thankyou")
const submitbtn = document.getElementById("sbt-btn")
const ratingnb=document.getElementById("rating")
const ratingbtns = document.querySelectorAll(".btn")
submitbtn.addEventListener("click", () => {
    thankyouContainer.classList.remove("hidden")
    ratingsContainer.classList.add("hidden")
}
)

ratingbtns.forEach((element) => {
    element.addEventListener("click", () => {
        ratingnb.innerHTML=element.innerHTML
    })
});