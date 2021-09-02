function Name(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName

}


let myName = new Name("Ayush", "Anand")

Name.prototype.fullName = function () {
    console.log(this.firstName + " " + this.lastName)
}

myName.fullName()