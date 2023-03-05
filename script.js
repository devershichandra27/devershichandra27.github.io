const eventCards = document.querySelectorAll(".event-card")
window.addEventListener('scroll', displayBoxes)
displayBoxes()

function displayBoxes() {
    const triggerBottom = window.innerHeight/5 *4;
    eventCards.forEach(eventCard => {
        const eventCardTop = eventCard.getBoundingClientRect().top
        if(eventCardTop < triggerBottom){
            eventCard.classList.add("show")
        }else{
            eventCard.classList.remove("show")
        }
    })
}