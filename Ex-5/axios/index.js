import axios from 'axios';
import * as fs from 'fs/promises';

let response = await axios.get('https://jsonplaceholder.typicode.com/comments');
let mails = {
    count: 0,
    list: []
}

for (let comment of response.data){
    mails.list.push(comment.email);
    mails.count++;
}

await fs.appendFile('emails.json', JSON.stringify(mails));