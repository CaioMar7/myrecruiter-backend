import { JobRepository } from "./JobRepository";

describe("JobRepository", () => {
    describe("findById", () => {
        it("should be get a user if ID exists in database.", async () => {
            const repository = new JobRepository();

            const id = "668f45afe7d514c469f8abe1"

            const response = await repository.findById(id);

            expect(response.id).toEqual(id)
        })

        it("dont should be get a user if ID not exists in database", async () => {
            const repository = new JobRepository();

            const id = "668f45afe7d514c469f8abe5"
            //Necessário 24 caracteres para OBJECT ID

            const response = await repository.findById(id);

            expect(response).toBeNull();
        })
    })


    describe("findByAll", () => {
        it("should be get all users.", async () => {
            const repository = new JobRepository();

            const response = await repository.findAll();

            expect(response).toBeTruthy();
        })

    })


})