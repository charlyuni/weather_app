import { FC, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface IInputProps {
    onclick?: (event: React.MouseEvent<HTMLElement>) => void;
    onClickInput: (value : string) => string;
    onClickLocatio: (lat : number , long: number) => string;
}

const Inputs: FC<IInputProps> = ({onclick, onClickInput, onClickLocatio}) => {

    const [value, setValue] = useState('');


    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                onClickLocatio(lat, lon);
            });
        } else {
            toast.error('Geolocalizacion no disponible en su navegador.', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const handleClickSearch = () => {
        if (value !== '' && value.length > 3 ) {
            onClickInput(value)
            setValue("")
        } else {
            toast.error('Ingresar la ciudad que desea buscar', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-row items-center justify-center bg-white rounded-full w-3/4 h-12 space-x-4">
                <input type="text" value={value} className="w-full h-12 rounded-full text-xl font-light shadow-xl capitalize pl-2 focus:outline-none placeholder:lowercase" id="inputCity" placeholder="Ingrese su localidad" onChange={(e) => setValue(e.target.value)} />
            </div>
            <button className="flex flex-row items-center justify-center ml-2">
                <AiOutlineSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125 justify-center" onClick={() => { handleClickSearch() }} />
            </button>
            <button className="flex flex-row items-center justify-center ml-2">
                <GoLocation size={25} className="text-white cursor-pointer transition ease-out hover:scale-125 " onClick={() => handleLocation()} />
            </button>

            <div className="flex flex-row items-center justify-center w-1/4">
                <button className="flex flex-row items-center justify-center ml-2 text-xl text-white" title="metric" onClick={onclick}>
                    °C
                </button>
                <p className="flex flex-row items-center justify-center ml-2 text-xl text-white"> | </p>
                <button className="flex flex-row items-center justify-center ml-2 text-xl text-white" title="imperial" onClick={onclick}>
                    °F
                </button>
            </div>
        <ToastContainer />
        </div>
    )
}
export default Inputs