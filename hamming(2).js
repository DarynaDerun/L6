

function hammingDecode(encoded) {
    let parityBits = Math.ceil(Math.log2(encoded.length + Math.log2(encoded.length) + 1));
    let decoded = new Array(encoded.length - parityBits).fill(0);
    let j = 0;

    for (let i = 0; i < encoded.length; i++) {
        if ((i + 1) !== Math.pow(2, Math.log2(i + 1) | 0)) {
            decoded[j++] = encoded[i];
        }
    }

    let error = -1;
    for (let i = 0; i < parityBits; i++) {
        let parity = 0;
        for (let j = 0; j < encoded.length; j++) {
            if (((j + 1) >> i) & 1) {
                parity ^= encoded[j];
            }
        }
        if (parity !== encoded[Math.pow(2, i) - 1]) {
            error |= (1 << i);
        }
    }

    if (error !== -1) {
        decoded[error] ^= 1;
    }

    return decoded;
}

module.exports = {
    hammingDecode
};
