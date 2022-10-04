
interface LocationProps {
  country: string;
  city: string;
}

const Location = ({ city, country }: LocationProps) => {

  return (
    <div className="flex justify-center items-center mt-3">
      <p className="text-white text-xl font-medium">
        {city} - {country}
      </p>
    </div>
  )
}
export default Location