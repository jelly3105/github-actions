const core = require('@actions/core');
const exec  = require('@actions/exec');

function run() {
    // 1. Get input values
    const bucket = core.getInput('bucket', {required :  true});
    const bucketRegion = core.getInput('bucket-region', {required :  true});
    const distFolder = core.getInput('dist-folder', {required :  true});

    // 2. Upload files
    const S3Uri = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${distFolder} ${S3Uri} --region ${bucketRegion}`);
    core.notice('Hello World!')
}

run();