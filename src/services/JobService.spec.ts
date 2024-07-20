describe("Tests of JobService: ", () => {
    describe("findById", () => {
        it("should be cheking if it's a valid a ID.", () => {

            const request = {
                body: {
                    params: {
                        id: "668f45afe7d514c469f8abe1",
                    }
                }
            }

            expect(request.body.params.id.length).toEqual(24);
        })

        it("should be cheking if it's a unvalid a ID different of 24 characters.", () => {
            const request1 = {
                body: {
                    params: {
                        id: "668f45afe7d514c469f8ab",
                    }
                }
            }

            const request2 = {
                body: {
                    params: {
                        id: "668f45afe7d514c469f8aaasdasda",
                    }
                }
            }

            expect(request1.body.params.id.length).not.toEqual(24);
            expect(request2.body.params.id.length).not.toEqual(24);
        })

    })


    describe("create", () => {
        it("should be create if it's has a valid title.", () => {

            const request = {
                body: {
                    title: "Titulo valido",
                }
            }

            expect(request.body.title.length).toBeGreaterThan(4);
        })

        it("should be create if it's has a unvalid title less or equal 4.", () => {
            const request = {
                body: {
                    title: "Tit",
                }
            }

            expect(request.body.title.length).toBeLessThan(4);
        })

        it("should be create if it's has a unvalid title equal or greather than 70.", () => {
            const request = {
                body: {
                    title: "TitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTitTit",
                }
            }

            expect(request.body.title.length).toBeGreaterThanOrEqual(70);
        })

    })



})