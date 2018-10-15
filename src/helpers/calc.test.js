import {
    g,
    KgToN,
    NtoKg,
    getMoment,
    covertSecondMomentOfArea,
    getMaxMoment,
    getMaxLength,
    findMaterial
 } from './calc'

describe('calculations', () => {
    it('should convert kg to newtons', () => {
        const m = 10
        const n = KgToN(m)
        expect(n).toEqual(m * g)
    })

    it('should convert n to kg', () => {
        const m = 10 * g
        const n = NtoKg(m)
        expect(n).toEqual(m / g)
    })
})