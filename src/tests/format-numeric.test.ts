import { formatNumeric } from "../utils/helpers";

describe('formatNumeric', () => {
    it('should return an empty string if the number is null or undefined', () => {
        expect(formatNumeric(null)).toBe('');
        expect(formatNumeric(undefined)).toBe('');
    });

    it('should correctly format a positive number', () => {
        expect(formatNumeric(123456789)).toBe('123.456.789');
        expect(formatNumeric(9876543210)).toBe('9.876.543.210');
        expect(formatNumeric(123)).toBe('123');
        expect(formatNumeric(0)).toBe('');
    });

    it('should return an empty string if the number is negative', () => {
        expect(formatNumeric(-123456789)).toBe('');
        expect(formatNumeric(-9876543210)).toBe('');
        expect(formatNumeric(-123)).toBe('');
        expect(formatNumeric(-0)).toBe('');
    });

    it('should return an empty string if the number is a decimal', () => {
        expect(formatNumeric(1234567.89)).toBe('');
        expect(formatNumeric(-1234.56789)).toBe('');
    });
});