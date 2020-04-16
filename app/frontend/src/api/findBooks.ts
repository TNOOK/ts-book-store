export const findBooks = async (): Promise<any> =>{
    return fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(data =>  data);
}