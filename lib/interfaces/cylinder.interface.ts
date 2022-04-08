import { CylinderKey } from './key.interface';
import { CylinderSize } from './size.interface';

type Country = 'KE';

export type Cylinder = {
  key: CylinderKey;
  name: string;
  sizes: CylinderSize[];
  countries: Country[];
}
