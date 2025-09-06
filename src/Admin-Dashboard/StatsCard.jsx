const StatsCard = ({ title, value, icon, color }) => {
    return (
        <div className={`flex items-center p-5 rounded-2xl shadow-md text-white ${color}`}>
            <div className="text-4xl mr-4">{icon}</div>
            <div>
                <h3 className="text-lg">{title}</h3>
                <p className="text-2xl font-bold">{value}</p>
            </div>
        </div>
    );
};

export default StatsCard;
