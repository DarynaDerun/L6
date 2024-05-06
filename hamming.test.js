const { expect } = import('chai');
const { hammingEncode } = import('./hamming');
const { hammingDecode } = import('./hamming (2)');


describe('Hamming Encoding and Decoding', () => {
    describe('Hamming Encoding', () => {
        it('should encode data correctly', () => {
            const data = [1, 0, 1, 1];
            const encoded = hammingEncode(data);
            expect(encoded).to.deep.equal([1, 1, 0, 1, 0, 1, 1]);
        });
    });

    describe('Hamming Decoding', () => {
        it('should decode data correctly without errors', () => {
            const encoded = [1, 1, 0, 1, 0, 1, 1];
            const decoded = hammingDecode(encoded);
            expect(decoded).to.deep.equal([1, 0, 1, 1]);
        });

        it('should correct single-bit errors', () => {
            const encodedWithError = [1, 1, 1, 1, 0, 1, 1]; // introducing error in the third bit
            const decoded = hammingDecode(encodedWithError);
            expect(decoded).to.deep.equal([1, 0, 1, 1]);
        });
    });
});
