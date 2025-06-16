const cool = process.argv.slice(2);
console.log(`${cool[0] || 'undefined'} is ${cool[1] || 'undefined'}`);
