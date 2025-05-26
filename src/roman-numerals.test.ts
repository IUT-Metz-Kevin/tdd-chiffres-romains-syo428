// Write your tests here
import {expect, test} from 'vitest';

class ChiffresRomains {
    of (value : string) {
        return this.convertir(value);
    }

  convertir(value: string): number {
    // On peut utiliser un objet pour mapper les chiffres romains à leurs valeurs

    const chiffresRomains: { [index : string]: number } = {

        "I":  1,
        "II" : 2,
        "III" : 3,
        "IV" : 4,
        "V" : 5,
    }

    return chiffresRomains[value] || 0;  
}
    verifierChiffresRomainsValides(chiffresRomains: string): void {
    const casInvalid = ["IIII", "IIIII"];

    if (casInvalid.includes(chiffresRomains)) {
        throw new Error(`Le cas ${chiffresRomains} n'est pas valide`);
    }
}



}

//Test de la classe ChiffresRomains

test('convertir', ()=>{
    const chiffresRomains = new ChiffresRomains();
    /*
    expect(chiffresRomains.convertir("I")).toBe(1);
    expect(chiffresRomains.convertir("II")).toBe(2);
    expect(chiffresRomains.convertir("III")).toBe(3);
    expect(chiffresRomains.convertir("IIII")).toBe(4);
    expect(chiffresRomains.convertir("IIIII")).toBe(5);
    */

    expect(chiffresRomains.convertir("I")).toBe(1);
    expect(chiffresRomains.convertir("II")).toBe(2);
    expect(chiffresRomains.convertir("III")).toBe(3);
    expect(chiffresRomains.convertir("IV")).toBe(4);
    expect(chiffresRomains.convertir("V")).toBe(5);

    expect(() => chiffresRomains.verifierChiffresRomainsValides("IIII")).toThrow("Le cas IIII n'est pas valide");
    expect(() => chiffresRomains.verifierChiffresRomainsValides("IIIII")).toThrow("Le cas IIIII n'est pas valide");
})

// Write your test here
