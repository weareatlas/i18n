import { i18n } from './i18n';

describe('When loading i18n', () => {
    it('should have translations for en-GB', () => {
        expect(i18n['en-GB']).not.toBeNull();
    });
    it('should have translations for it-IT', () => {
        expect(i18n['it-IT']).not.toBeNull();
    });
});
