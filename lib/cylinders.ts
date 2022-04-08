import { Cylinder } from './interfaces/cylinder.interface';
import { CylinderKey } from './interfaces/key.interface';
import { CylinderSize } from './interfaces/size.interface';

export const cylinders: Cylinder[] = [
  {
    key: CylinderKey.AFRI_GAS,
    name: 'Afri Gas',
    sizes: [
      CylinderSize.KG_6,
      CylinderSize.KG_13,
      CylinderSize.KG_45
    ],
    countries: ['KE']
  },
  {
    key: CylinderKey.ALFA_GAS,
    name: 'Alfa Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.AMAAN_GAS,
    name: 'Amaan Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.CAPITAL_GAS,
    name: 'Capital Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.CITY_GAS,
    name: 'City Gas',
    sizes: [CylinderSize.KG_6, CylinderSize.KG_13],
    countries: ['KE']
  },
  {
    key: CylinderKey.DEL_GAS,
    name: 'Del Gas',
    sizes: [
      CylinderSize.KG_6,
      CylinderSize.KG_13,
      CylinderSize.KG_45,
      CylinderSize.KG_50
    ],
    countries: ['KE']
  },
  {
    key: CylinderKey.FAST_GAS,
    name: 'Fast Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.FUTURE_GAS,
    name: 'Future Gas',
    sizes: [
      CylinderSize.KG_6,
      CylinderSize.KG_13,
      CylinderSize.KG_50
    ],
    countries: ['KE']
  },
  {
    key: CylinderKey.G_GAS,
    name: 'G-Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.GASKY_GAS,
    name: 'Gasky Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.GULF_PETROCHEM_GAS,
    name: 'Gulf Petrochem Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.HANDI_GAS,
    name: 'Handi Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.HASHI_GAS,
    name: 'Hashi Gas',
    sizes: [
      CylinderSize.KG_6,
      CylinderSize.KG_13,
      CylinderSize.KG_35,
      CylinderSize.KG_50
    ],
    countries: ['KE']
  },
  {
    key: CylinderKey.HASS_GAS,
    name: 'Hass Gas',
    sizes: [
      CylinderSize.KG_6,
      CylinderSize.KG_13,
      CylinderSize.KG_50
    ],
    countries: ['KE']
  },
  {
    key: CylinderKey.HOME_GAS,
    name: 'Home Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.HUNKAR_GAS,
    name: 'Hunkar Gas',
    sizes: [
      CylinderSize.KG_6,
      CylinderSize.KG_13,
      CylinderSize.KG_50
    ],
    countries: ['KE']
  },
  {
    key: CylinderKey.JAMII_GAS,
    name: 'Jamii Gas',
    sizes: [CylinderSize.KG_6, CylinderSize.KG_13],
    countries: ['KE']
  },
  {
    key: CylinderKey.K_GAS,
    name: 'K-Gas',
    sizes: [
      CylinderSize.KG_6,
      CylinderSize.KG_13,
      CylinderSize.KG_35,
      CylinderSize.KG_50
    ],
    countries: ['KE']
  },
  {
    key: CylinderKey.KAPRI_GAS,
    name: 'Kapri Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.KERRY_GAS,
    name: 'Kerry Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.LAKE_GAS,
    name: 'Lake Gas',
    sizes: [
      CylinderSize.KG_6,
      CylinderSize.KG_13,
      CylinderSize.KG_40,
      CylinderSize.KG_50
    ],
    countries: ['KE']
  },
  {
    key: CylinderKey.MEN_GAS,
    name: 'Men Gas',
    sizes: [
      CylinderSize.KG_6,
      CylinderSize.KG_13,
      CylinderSize.KG_50
    ],
    countries: ['KE']
  },
  {
    key: CylinderKey.MID_GAS,
    name: 'Mid Gas',
    sizes: [
      CylinderSize.KG_3,
      CylinderSize.KG_6,
      CylinderSize.KG_13,
      CylinderSize.KG_50
    ],
    countries: ['KE']
  },
  {
    key: CylinderKey.MOTO_GAS,
    name: 'Moto Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.MPISHI_GAS,
    name: 'Mpishi Gas',
    sizes: [
      CylinderSize.KG_6,
      CylinderSize.KG_13,
      CylinderSize.KG_40
    ],
    countries: ['KE']
  },
  {
    key: CylinderKey.OILCOM_GAS,
    name: 'Oilcom Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.ORANGE_GAS,
    name: 'Orange Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.ORYX_GAS,
    name: 'Oryx Gas',
    sizes: [CylinderSize.KG_3, CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.P_GAS,
    name: 'P-Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.PET_GAS,
    name: 'Pet Gas',
    sizes: [
      CylinderSize.KG_6,
      CylinderSize.KG_13,
      CylinderSize.KG_50
    ],
    countries: ['KE']
  },
  {
    key: CylinderKey.PRO_GAS,
    name: 'Pro Gas',
    sizes: [CylinderSize.KG_6, CylinderSize.KG_13],
    countries: ['KE']
  },
  {
    key: CylinderKey.SAFARI_GAS,
    name: 'Safari Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.SAFE_GAS,
    name: 'Safe Gas',
    sizes: [CylinderSize.KG_13],
    countries: ['KE']
  },
  {
    key: CylinderKey.SALAMA_GAS,
    name: 'Salama Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.SEA_GAS,
    name: 'Sea Gas',
    sizes: [
      CylinderSize.KG_3,
      CylinderSize.KG_6,
      CylinderSize.KG_13
    ],
    countries: ['KE']
  },
  {
    key: CylinderKey.SUPA_GAS,
    name: 'Supa Gas',
    sizes: [
      CylinderSize.KG_6,
      CylinderSize.KG_13,
      CylinderSize.KG_50
    ],
    countries: ['KE']
  },
  {
    key: CylinderKey.T_GAS,
    name: 'T-Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.TEX_GAS,
    name: 'Tex Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.TOSHA_GAS,
    name: 'Tosha Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
  {
    key: CylinderKey.TOTAL_GAS,
    name: 'Total Gas',
    sizes: [
      CylinderSize.KG_3,
      CylinderSize.KG_6,
      CylinderSize.KG_13,
      CylinderSize.KG_22_5,
      CylinderSize.KG_50
    ],
    countries: ['KE']
  },
  {
    key: CylinderKey.VENN_GAS,
    name: 'Venn Gas',
    sizes: [CylinderSize.KG_6],
    countries: ['KE']
  },
];
