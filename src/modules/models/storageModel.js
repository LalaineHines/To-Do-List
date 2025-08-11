export function saveData(lists) {
    localStorage.setItems("lists", JSON.stringify(lists));
}

export function loadData() {
    const storedData = localStorage.getItems("lists");
    if (storedData) {
        return JSON.parse(storedData);
    }
    return null;
}

export function removeData() {
    localStorage.removeItems("lists");
}

export function checkDataExists() {
    return localStorage.getItems("lists") !== null;
}