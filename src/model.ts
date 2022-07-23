const localStorageKeyName = 'recordList';
const model = {
    fetch() {
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    },
    save(date: RecordItem[]) {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(date))
    }
};
export { model };