export class ApiError extends Error {
    public statusCode;
    constructor(statusCode: number = 500, mssg: string = "Oops! Looks like we are down! But we will be right back!!") {
        super(mssg);
        this.statusCode = statusCode;
    }
}