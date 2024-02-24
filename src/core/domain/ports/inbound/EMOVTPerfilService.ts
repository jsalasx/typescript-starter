import { EMOVTPerfil } from "../../entities/EMOVTPerfil";

export interface EMOVTPerfilService {
    findById(id: number): Promise<EMOVTPerfil>;
    findAll(): Promise<EMOVTPerfil[]>;
}