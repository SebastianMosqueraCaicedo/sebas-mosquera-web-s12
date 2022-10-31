import PocketBase from './pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');

const uName = Document.getElementById('login-name');
const uPass = Document.getElementById('login-pass');
const uButt = Document.getElementById('login-enter');

uName.addEventListener("input", (event) => {
});

uPass.addEventListener("input", (event) => {
});

uButt.addEventListener("click", loginUser);

const users = await client.users.getFullList(200 /* batch size */, { sort: '-created' });

console.log(users);

/*
const data = { ... };

const updatedRecord = await client.records.update("profiles", "YOUR_USER_PROFILE_ID", data);
*/
