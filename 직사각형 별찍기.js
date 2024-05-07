process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', data => {
    input += data;
});

process.stdin.on('end', () => {
    const [a, b] = input.trim().split(" ").map(Number);

    for (let i = 0; i < b; i++) {
        console.log('*'.repeat(a));
    }
});
