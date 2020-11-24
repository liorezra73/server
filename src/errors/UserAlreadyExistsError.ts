import { MyCustomError } from './MyCustomError';
class UserAlreadyExistsError extends MyCustomError {
    public constructor(
         code: number,
        message?: string,
    ) {
        super(code,message)
    }
}

export default UserAlreadyExistsError;
 