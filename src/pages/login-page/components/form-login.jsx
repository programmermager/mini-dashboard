import Button from "../../../components/Button";

const { default: Form } = require("../../../components/Form");

export function FormLogin(){
    return (
        <div>
            <p className="text-sm mt-4 mb-2">Email</p>
            <Form placeholder="Masukkan Email" type="email"/>
            <p className="text-sm mt-4 mb-2">Password</p>
            <Form placeholder="Masukkan Kata Sandi" type="password"/>
            <div className="flex flex-row justify-between my-5">
                <div className="flex flex-row items-center">
                    <input type="checkbox" name="remember" id="" className="mr-2"/> 
                    <p className="text-primary text-sm font-bold">Ingat Saya</p>

                </div>
                <p className="text-primary text-sm font-bold">Lupa Password</p>
            </div>
            <Button text="Masuk"/>
        </div>
    );
}

export default FormLogin;