import { MyCustomError } from './MyCustomError';
class OfficeNameAlreadyExistsError extends MyCustomError {
    public constructor(
         code: number,
        message?: string,
    ) {
        super(code,message)
    }
}

export default OfficeNameAlreadyExistsError;