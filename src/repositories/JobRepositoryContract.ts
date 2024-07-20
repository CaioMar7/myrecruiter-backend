import { IJobService } from "../services/JobService";

export interface JobRepositoryContracts {
    create({title, description} : IJobService): Promise<IJobService>;
    findAll() : Promise<IJobService[]>;
    findById(id: string): Promise<IJobService> ;
    update({ id, title, description }: IJobService): void;
    delete(id: string): Promise<IJobService>;
}