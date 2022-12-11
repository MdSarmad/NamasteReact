export const listFetch = (Ids) => {
    const listOfData = Ids.map(async(id) => {
        const data = await fetch(`https://api.github.com/users/${id}`)
        const res = data.json();
        return res;
    })
    return listOfData;
}