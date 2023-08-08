import EventEmitter from "events";

let deleteClient = new EventEmitter(); 
let editClient = new EventEmitter(); 

export {deleteClient, editClient};