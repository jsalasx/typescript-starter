import { EMOVTPerfil } from "../entities/EMOVTPerfil";
import { EMOVTPerfilService } from "../ports/inbound/EMOVTPerfilService";
import { EMOVTPerfilRepositoy } from "../ports/outbound/EMOVTPerfilRepository";

export class EMOVTPerfilDomainService implements EMOVTPerfilService {

    constructor(private repository: EMOVTPerfilRepositoy) {}

    findById(id: number): Promise<EMOVTPerfil> {
        return this.repository.findById(id);
    }
    findAll(): Promise<EMOVTPerfil[]> {
        return this.repository.findAll();
    }

}