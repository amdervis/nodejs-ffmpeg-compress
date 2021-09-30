const { exec } = require('child_process')

const args = process.argv.slice(2)
const source = args[0]
const destination = args[1]
const cmd = `ffmpeg -n -loglevel error -i ${source} -vcodec libx264 -crf 28 -preset faster -tune film ${destination}`
exec(cmd, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    //console.log(`stdout: ${stdout}`);
});