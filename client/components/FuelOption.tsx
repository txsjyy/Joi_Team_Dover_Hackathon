// components/FuelOption.tsx
type Props = {
    title: string;
    price: string;
    details: string;
    octaneRating: number;
  };
  
  const FuelOption: React.FC<Props> = ({ title, price, details, octaneRating }) => {
    return (
      <div className="w-1/5 border-2 border-black p-2.5 mx-2.5 text-center rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-orange-500"> {/* Adjusted hover:scale-105 for Tailwind default, consider customizing if needed */}
        <h4>{title}</h4>
        <div className="text-base text-black bg-white rounded-md p-1.25 m-1.25">{price}</div> {/* Corrected className typo */}
        <div className="text-xs text-gray-600 mb-2.5">{details}</div>
        <div className="text-2xl text-black bg-yellow-400 rounded-md p-2.5 my-2.5 border border-black font-bold shadow-lg">{octaneRating}</div>
      </div>
    );
  };
  
  export default FuelOption;
  