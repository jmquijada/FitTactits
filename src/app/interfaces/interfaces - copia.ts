export interface Interfaces {
    name: string;
    icon: string;
    redirectTo: string;
    color: string;
}

export interface IAlimento {
    id: number;
    nombre: string;
    calorias: number;
    grasas_saturadas: number;
    hidratos_de_carbono: number;
    hidratos_de_carbono_azucares: number;
    proteinas: number;
    sal: number;
}
