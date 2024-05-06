
function hammingEncode(data) {
    let parityBits = Math.ceil(Math.log2(data.length + Math.log2(data.length) + 1));
    let encoded = new Array(data.length + parityBits).fill(0);
    let j = 0;

    for (let i = 0; i < encoded.length; i++) {
        if ((i + 1) !== Math.pow(2, j)) {
            encoded[i] = data[j++];
        }
    }

    for (let i = 0; i < parityBits; i++) {
        let parity = 0;
        for (let j = 0; j < encoded.length; j++) {
            if (((j + 1) >> i) & 1) {
                parity ^= encoded[j];
            }
        }
        encoded[Math.pow(2, i) - 1] = parity;
    }

    return encoded;
}

module.exports = {
    hammingEncode
};
