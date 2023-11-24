type PeriodButtonProps = {
    children: React.ReactNode;
    periodValue: string;
    period: string;
    setPeriod: React.Dispatch<React.SetStateAction<string>>;
};

export const PeriodButton = ({ children, periodValue, period, setPeriod }: PeriodButtonProps) => {
    return (
        <button
            onClick={() => setPeriod(periodValue)}
            className={`text-primaryBlue-800 hover:text-primaryBlue-900 cursor-pointer hover:font-bold ${
                periodValue === period && "font-bold "
            }`}
        >
            {children}
        </button>
    );
};
