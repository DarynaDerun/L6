const { expect } = require('chai');
const { hammingEncode, hammingDecode } = require('./hamming');

describe('Hamming Encoding and Decoding', () => {
    it('Should correctly encode and decode a bit string with no errors', () => {
        // Given
        const data = [0, 1, 0, 1, 1, 0, 1]; // Input bit string
        // When
        const encoded = hammingEncode(data);
        const decoded = hammingDecode(encoded);
        // Then
        expect(decoded).to.deep.equal(data);
    });

    it('Should correctly encode and decode a bit string with single-bit error', () => {
        // Given
        const data = [0, 1, 0, 1, 1, 0, 1]; // Input bit string
        // When
        const encoded = hammingEncode(data);
        // Introduce error
        encoded[3] = 1 - encoded[3]; // Flip one bit
        const decoded = hammingDecode(encoded);
        // Then
        expect(decoded).to.deep.equal(data);
    });

    it('Should correctly encode and decode a bit string with two-bit error', () => {
        // Given
        const data = [0, 1, 0, 1, 1, 0, 1]; // Input bit string
        // When
        const encoded = hammingEncode(data);
        // Introduce errors
        encoded[3] = 1 - encoded[3]; // Flip one bit
        encoded[5] = 1 - encoded[5]; // Flip another bit
        const decoded = hammingDecode(encoded);
        // Then
        expect(decoded).to.deep.equal(data);
    });
    it('Should correctly encode and decode an empty bit string', () => {
        // Given
        const data = []; // Empty input bit string
        // When
        const encoded = hammingEncode(data);
        const decoded = hammingDecode(encoded);
        // Then
        expect(decoded).to.deep.equal(data);
    });
    
    it('Should correctly encode and decode a bit string with all zeros', () => {
        // Given
        const data = [0, 0, 0, 0, 0, 0, 0]; // Input bit string with all zeros
        // When
        const encoded = hammingEncode(data);
        const decoded = hammingDecode(encoded);
        // Then
        expect(decoded).to.deep.equal(data);
    });
});
