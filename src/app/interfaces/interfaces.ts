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

export interface IRutina {
    id?: number;
    nombre: string;
    tipo: string;
    sistema: string;
    objetivo: string;
    material: boolean;
    numDias: number;
    dias: IDias[];
}

export interface IDias {
    id?: number;
    nombre: string;
    ejercicios: IEjercicio[];
}

export interface IEjercicio {
    nombre: string;
    musculo?: string;
    equipamiento?: boolean;
    descripcion?: string;
    imagen: string;
    series?: number;
    repeticiones?: number;
    descanso?: number;
}