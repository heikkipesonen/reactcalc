import { Kg, Millimeters } from "../helpers/units";

export enum Types {
    RHS = 'RHS',
    SHS = 'SHS'
}

export interface Material {
    type: Types
    width: Millimeters
    height: Millimeters
    thickness: Millimeters
    rext: Millimeters // r of external corner
    rint: Millimeters // r of internal corner
    mass: Kg // kg/m
    aos: number // Area of Section
    sma: number // Second Moment of Area
    smaY?: number // Second Moment of Area
    rog: number // Radius of Gyration
    rogY?: number // Radius of Gyration
    sm: number // Section Modulus
    smY?: number // Section Modulus
    pm: number // Plastic Modulus
    pmY?: number // Plastic Modulus
    // Torsional Constants
    inertia: number // Inertia
    modulus: number // Modulus
    ssa: number // Section Surface Area
}

export const yieldStrength: number = 280;

export const getMass = (length: Millimeters, mass: Kg) => length * (mass / 1000);

