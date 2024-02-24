import { EMOVTPerfil } from "../../entities/EMOVTPerfil";

export interface EMOVTPerfilRepositoy {
    findById(id: number): Promise<EMOVTPerfil>;
    findAll(): Promise<EMOVTPerfil[]>;
}