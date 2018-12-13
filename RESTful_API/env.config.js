import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

let env = argv.env || 'pro';

export {env};
