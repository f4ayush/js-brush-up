let name = {
    firstName: "Ayush",
    lastName: "Anand"
}


let fullName = function (city) {
    console.log(this.firstName + " " + this.lastName + " lives in " + city)
}


fullName.call(name, "Mau")

let name2 = {
    firstName: "Anjali",
    lastName: "Tripathi"
}

fullName.call(name2, "Mau")
// function borrowing

fullName.apply(name, ["mau"])
fullName.apply(name2, ["mau"])

let myName = fullName.bind(name, "mau")


myName()


