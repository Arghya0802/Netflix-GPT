export class ApiError extends Error {
    public statusCode;
    constructor(statusCode: number = 500, mssg: string = "Something went wrong...") {
        super(mssg);
        this.statusCode = statusCode;
    }
}