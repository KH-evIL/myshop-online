
alert("Hello! Welcome to myShop! \nComplete the list, please")
var firstName = prompt("Your name:", "").trim().toUpperCase();
var surName = prompt("Surname:", "").trim().toUpperCase();
var age = prompt("How old are you?", "");
console.log(`name: ${firstName}, \nsurname: ${surName}, \nage ${age}`);

alert(`Check it, please \nYour name: ${firstName}, \nSurname: ${surName}, \nAge: ${age}`);

alert("We have an iPhone-14 \nIt costs - 2000$");
var phonePrice = 2000;
var money = prompt("How much money do you have?");
var header = document.createElement("h2")
document.body.append(header);

if (money > phonePrice) { 
    header.style.color = "white"
    header.textContent = "Congratulations! You're buy new phone"
} else {
    header.style.color = "white"
    header.textContent = "Sorry, you don't have enough money)"
}
