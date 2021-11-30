    import * as fs from 'fs/promises';

// file can also be .mjs

// try{
//     let result = await fs.readFile('boardgames.json');
//     console.log(result);
//     let data = JSON.parse(result);
//     console.log(data)
// }catch(error){
//     console.log(error)
// }

    let boardgames = 'boardgames.json'

    let result = await fs.readFile(boardgames);
    let data = JSON.parse(result);
    // console.log(data)
    // console.log(error)

    function makeFiles() {
        for(let id in data){
                // console.log(data[boardgame].name);
                // console.log(data[boardgame].description + "\n new iteration \n");
                let boardgame = data[id];
                let filename = `${id}.json`;

                fs.writeFile(filename, JSON.stringify(boardgame), (err) => {
                    if(err) throw err
                    console.log(filename + 'has been saved!')
                })
        }
    }

    makeFiles();