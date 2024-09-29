import { toast } from "sonner";
import Button from "../../components/button";
import { replace, useNavigate } from "react-router-dom";

function Admin(){
    const navigate = useNavigate();

    function logout(){
        localStorage.removeItem('token');
        navigate('/login', replace);
        toast.success('Berhasil Logout');
    }

    return (
        <div>
            <h1>Hai</h1>
            <Button onClick={logout}/>
        </div>
    );
}

export default Admin;