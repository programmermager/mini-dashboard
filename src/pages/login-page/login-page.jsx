import FormLogin from "./components/form-login";

function LoginPage(){
    return (
        <div className="flex justify-center min-h-screen">
            <div className="flex justify-center items-center">
                <div className="flex flex-col mr-20">
                    <div className="flex flex-row items-center">
                        <div className="flex mr-2">
                            <div className="w-16 h-16 bg-[#de688a] rounded-full"></div>
                            <div className="w-16 h-16 z-10 bg-[#012238] bg-opacity-85 rounded-full -mx-4"></div>
                            <div className="w-16 h-16 bg-[#2f3369] rounded-full"></div>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-lg font-bold">Wakanda </p>
                            <p className="text-lg font-bold">Forever </p>
                        </div>
                    </div>
                    <p className="text-xl font-bold mt-5">Masuk</p>
                    <div className="flex flex-row">
                        <p className="text-sm">Belum punya akun Wakanda Forever?</p>
                        <p className="text-sm text-blue-800 font-bold ml-1">Registrasi Disini</p>
                    </div>
                    <hr className="mt-2"/>
                    
                    <FormLogin/>

                    <p className="text-center mt-2">Dengan menekan tombol masuk, Anda telah menyetujui</p>
                    <div className="flex flex-row justify-center">
                        <a href="https://id.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever" className="font-bold text-red-500">Kebijakan Privasi</a>
                        <p className="mx-2">&</p>
                        <a href="https://www.imdb.com/title/tt9114286/" className="font-bold text-red-500">Ketentuan Cookies</a>
                    </div>
                </div>
                <img alt="" className="hidden lg:block rounded-3xl w-auto h-[50rem]" src="https://cdn.europosters.eu/image/1300/149853.jpg"/>
            </div>
        </div>
    );
}

export default LoginPage;