import { Material, yieldStrength } from '../data/Material'
import { Newton, Kg, Millimeters } from './units'

export const g: Newton = 9.98

export const KgToN = (kg: Kg): number => kg * g

export const NtoKg = (n: Newton): number => n / g;

export const getMoment = (kg: Kg, distance: Millimeters): Newton => KgToN(kg) * (distance / 1000);

export const covertSecondMomentOfArea = (value: number): number => value * 10 ** 4

export const getMaxMoment = (material: Material, distance: Millimeters) => (yieldStrength * covertSecondMomentOfArea(material.sma)) / (distance * material.thickness);

export const getMaxLength = (material: Material, moment: Newton) => (yieldStrength * covertSecondMomentOfArea(material.sma)) / (moment * material.thickness);

export const findMaterial = (width: Millimeters, height: Millimeters, list: Material[]): Material | null => list.find((item) => item.width === width && item.height === height) || null