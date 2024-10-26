// task: merge two arrays

const array_1 = [0, 1, 2, 3, 4]
const array_2 = [5, 6, 7, 8, 9]

const array_3 = []

for (let i = 0; i < array_1.length; i++) {
    array_3[i] = array_1[i]
}

for (let i = 0; i < array_2.length; i++) {
    array_3[array_3.length] = array_2[i]
}

console.log(array_3)