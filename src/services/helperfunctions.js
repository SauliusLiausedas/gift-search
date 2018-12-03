export default class {
    static cloneArray(array) {
        return JSON.parse(JSON.stringify(array))
    }

    static joinArray(array) {
        return array.join(',')
    }
}