import { useState } from 'react';
import { calculateInvestment, formatCurrency } from '../../utils/investmentCalculator';

function Fun() {
    const [money, setMoney] = useState("");
    const [years, setYears] = useState("");
    const [rate, setRate] = useState(7);
    const [total, setTotal] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = calculateInvestment(money, years, rate / 100);
        setTotal(result);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            <label>
                How much money to invest?
                <input
                type="number"
                value={money}
                onChange={(e) => setMoney(e.target.value)}
                required
                />
            </label>

            <label>
                How many years to invest?
                <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                required
                />
            </label>

            <label>
                Expected annual return rate (%):
                <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                required
                />
            </label>

            <button type="submit">Calculate Investment</button>
            </form>

            {total !== null && <p>Result: {formatCurrency(total)}</p>}
        </>
    );
}

export default Fun;