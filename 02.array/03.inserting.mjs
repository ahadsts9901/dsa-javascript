// task: insert element to a specific position

const data = [1, 2, 3, 5, 6, 7]
const position = 3
const element = 4

console.log(data)

for (let i = data.length - 1; i >= 0; i--) {

    if (i >= position) {
        data[i + 1] = data[i]
    }

    if (i == position) {
        data[i] = element
    }

}

console.log(data)