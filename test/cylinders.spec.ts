import { CylinderKey, cylinders } from '../lib';

describe('Cylinders', () => {
  const existingKeys = [];
  const existingNames = [];

  for (const key of Object.keys(CylinderKey)) {
    it(`should have a key of ${key}`, () => {
      const exists = cylinders.some(cylinder => cylinder.key === CylinderKey[key]);
      expect(exists).toBeTruthy();
    });
  }

  for (const cylinder of cylinders) {
    it(`${cylinder.key} key should be unique`, () => {
      expect(existingKeys.includes(cylinder.key)).toBe(false);
      existingKeys.push(cylinder.key);
    });

    it(`${cylinder.key} name should be unique`, () => {
      expect(existingNames.includes(cylinder.name)).toBe(false);
      existingNames.push(cylinder.name);
    });

    it(`${cylinder.key} should have at least one size`, () => {
      expect(cylinder.sizes).toBeTruthy();
      expect(cylinder.sizes.length).toBeGreaterThan(0);
    });

    it(`${cylinder.key} should not have duplicate sizes`, () => {
      const duplicates = cylinder.sizes.filter(
        (size, index, self) => self.indexOf(size) !== index
      );

      expect(duplicates.length).toBe(0);
    })

    it(`${cylinder.key} should have at least one country`, () => {
      expect(cylinder.countries).toBeTruthy();
      expect(cylinder.countries.length).toBeGreaterThan(0);
    });

    it(`${cylinder.key} should not have duplicate countries`, () => {
      const duplicates = cylinder.countries.filter(
        (country, index, self) => self.indexOf(country) !== index
      );

      expect(duplicates.length).toBe(0);
    });
  }
});
