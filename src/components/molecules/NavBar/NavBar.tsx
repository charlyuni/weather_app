import { FC } from "react";
import Inputs from "../../atoms/Inputs/Inputs";
import TopButtons from "../TopButton/TopButtons";
import { ICitiesProps } from '../../types/module';

export interface INavProps {
    onclick?: (event: React.MouseEvent<HTMLElement>) => void;
    onClickInput: (value: string) => void;
    onClickLocatio: (lat: number, long: number) => void;
    cities: ICitiesProps[];
    onClickTopBotton?: (event: React.MouseEvent<HTMLElement>) => void;
}

const NavBar: FC<INavProps> = ({ onclick, onClickInput, onClickLocatio, cities, onClickTopBotton }) => {
    return (
        <>
            <TopButtons cities={cities} onClickTopBotton={onClickTopBotton} />
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 pl-8 pr-8 pt-3 pb-3 mb-4 bg-black items-center">
                <div className="col-span-1" >
                    <h2 className="text-2xl font-bold text-white">Weather App</h2>
                </div>
                <div className="col-span-2">
                    <Inputs onclick={onclick} onClickInput={onClickInput} onClickLocatio={onClickLocatio} />
                </div>
            </div>
        </>
    )
}
export default NavBar