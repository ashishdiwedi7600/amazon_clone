// const {spawn} = require('child_process')
const spawn = require('child_process').spawn
const path = require('path');
const { MongoTools, MTCommand } = require("node-mongotools")




// async function dumpAndRotate(uri, path) {
//     console.log("hi node mongotools")
//     var mt = new MongoTools();
//     var mtc = new MTCommand();// to reuse log methods
//     // mongodump
//     const dumpResult = await mt.mongodump({ uri, path })
//         .catch(e=>console.log("first",e));
//     if (dumpResult === undefined) {// error case
//         process.exit(1);
//     }
//     console.log(dumpResult,"hjvhfufuygiu")
//     // mtc.logSuccess(dumpResult);

//     // backups rotation
//     // const rotationResult = await mt.rotation({ path, rotationWindowsDays: 5, rotationMinCount: 1 })
//     //     .catch(mtc.logError.bind(mtc,"uuyuyu"));
//     // if (rotationResult === undefined) {// error case
//     //     process.exit(1);
//     // }
//     // mtc.logSuccess(rotationResult);
// }

// // const uri = process.env.MY_MONGO_URI
// // const path = `backup/${os.hostname()}`;

// // dumpAndRotate(uri, path);  

exports.dbdump = async (req, res, next) => {
    console.log("dumping start")
    const DB_NAME = 'dumpAshish';
    const ARCHIVE_PATH = path.join(__dirname, './', `${DB_NAME}.gzip`);
    let url = `mongodb+srv://diwediashish:1234@cluster0.rmrzj.mongodb.net/second?retryWrites=true&w=majority`
    // let backupProcess = spawn('mongodump', [
    //     `--uri=${url}`,
    //     // `--nsInclude=${ARCHIVE_PATH}`,
    //     // `${ARCHIVE_PATH}`,
    //     // // `--nsTo="localDB.${collName}"`,
    //     // // `--archive`
    //     `--archive=${ARCHIVE_PATH}`,
    //     '--gzip',
    // ]);
    let backupProcess = spawn('mongorestore', [
        `--uri=${url}`,
        // `--nsInclude=${ARCHIVE_PATH}`,
        `${ARCHIVE_PATH}`,
        `--archive=${ARCHIVE_PATH}`,
        '--gzip',
    ]);

    // dumpAndRotate(url, ARCHIVE_PATH);
    backupProcess.stdout.on('data', (data) => {
        console.log('stdout:\n', data);
    });
    backupProcess.stderr.on('data', (data) => {
        console.log('stderr:\n', Buffer.from(data).toString());
    });
    backupProcess.on('error', (error) => {
        console.log('error:\n', error);
    });
    backupProcess.on('exit', (code, signal) => {
        if (code) console.log('Process exit with code:', code);
        else if (signal) console.log('Process killed with signal:', signal);
        else console.log('Backup is successfull ✅');
    });
}

