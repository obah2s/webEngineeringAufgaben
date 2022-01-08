const person1 = {
    name: 'Oumar',
    age: 25,
    autos: auto1,
}
const auto1 = {
    marque: "BMW",
}
function conflict(argument1, argument2) {
    if (argument1.autos == argument2.autos) {
        return "Das Auto ist von mehr als einer Person besetzt.";
    }
    return "Das Auto ist nur von einer Person besetzt.";
}