// eslint-disable-next-line react/prop-types
export const FeatureCard = ({ title, desc }) => {
  return (
    <div>
      <h4 className="text-[#fff]">{title}</h4>
      <h4 className="text-[#fff]">{desc}</h4>
    </div>
  );
};
