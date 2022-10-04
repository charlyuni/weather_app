import { FC } from 'react';
import { ICitiesProps } from '../../types/module';

export interface ITopProps {
  onClickTopBotton?: (event: React.MouseEvent<HTMLElement>) => void;
  cities: ICitiesProps[];
}

const TopButtons: FC<ITopProps> = ({ cities, onClickTopBotton }) => {

  return (
    <div className='flex flex-row relative items-center justify-around bg-gray-400 p-2'>
      {cities.map((city, index) => (
        <button key={index} title={city.name} className='text-black text-xs font-bold  hover:text-white' onClick={onClickTopBotton}>
          {city.name}
        </button>
      ))}
    </div>
  )
}
export default TopButtons