var hrs = document.getElementById("timer-hrs")
var min = document.getElementById("timer-min")
var sec = document.getElementById("timer-sec")
var start = document.getElementById("btnstart")

// var userInput = 1
// var usersec = 0


start.addEventListener('click', () =>{
    var countdate = new Date('Mar 23, 2022 00:00:00').getTime()
    console.log(countdate)
    var now = new Date().getTime()
    var gap = countdate - now
    console.log(gap)

    const second = 1000
    const minutes = second*60
    const hours = minutes*60
    // const day = hours*24
    const showhours = Math.floor(gap/hours)
    console.log('showhours' , showhours)
})
