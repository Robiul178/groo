import { ArrowDownZA } from "lucide-react";

const DynamicCard = ({ title, description, gradientColors, iconBgColor }) => {
  return (
    <div>
      <div
        className={`bg-gradient-to-r shadow rounded-sm ${gradientColors} w-full p-8`}
      >
        <div className={`bg-slate-600 inline-block p-1 rounded-sm`}>
          <ArrowDownZA className="text-white" />
        </div>
        <h2 className="text-lg font-bold text-slate-800 py-2 mt-6">{title}</h2>
        <p className="text-slate-700 font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default DynamicCard;
