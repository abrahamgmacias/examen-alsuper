

export interface authorObj {
    nombre: string,
    segundo_nombre?: string | null | undefined,
    apellido_paterno: string | null | undefined,
    apellido_materno?: string | null | undefined,
    fecha_de_nacimiento?: Date | null | undefined
}

export interface bookObj {
    nombre: string | null | undefined, 
    fecha_de_publicacion?: string | null | undefined, 
    autor_id: number | null | undefined, 
    editorial?: string | null | undefined
}

export interface usuarioObj {
    nombre: string | null | undefined, 
    segundo_nombre?: string | null | undefined, 
    apellido_paterno: string | null | undefined, 
    apellido_materno?: string | null | undefined,  
    fecha_de_nacimiento?: Date | null | undefined, 
    correo_electronico?: string | null | undefined,  
    contrasena?: string | null | undefined
}