export interface Interfaces {
    name: string;
    icon: string;
    redirectTo: string;
    color: string;
}

export interface IAlimento {
    id: number;
    name: string;
    calorias: number;
    grasas: number;
    grasas_saturadas: number;
    hidratos_de_carbono: number;
    hidratos_de_carbono_azucares: number;
    proteinas: number;
    sal: number;
    foto: string;
}
