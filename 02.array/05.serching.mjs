// linear search
// task: delete element from a specific position

const data = [1, 2, 3, 4, 5, 6, 7]

const first_item_to_find = 5
const second_item_to_find = 12

let first_item_index = -1
let second_item_index = -1

for (let i = 0; i < data.length; i++) {

    if (data[i] == first_item_to_find) {
        first_item_index = i
        break
    }

}

for (let i = 0; i < data.length; i++) {

    if (data[i] == second_item_to_find) {
        second_item_index = i
        break
    }

}

console.log("first_item_index", first_item_index)
console.log("second_item_index", second_item_index)