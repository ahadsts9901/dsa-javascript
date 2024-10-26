// task: delete element from a specific position

const data = [1, 2, 3, 4, 5, 6, 7]
const position = 3

console.log(data)

for (let i = 0; i < data.length - 1; i++) {

    if (i >= position) {
        data[i] = data[i + 1]
    }

}

data.length = data.length - 1

console.log(data)