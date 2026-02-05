import { useState } from 'react';
import { calculateInvestment, formatCurrency } from '../../utils/investmentCalculator';
import './Fun.css';

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
        <main>
            <form onSubmit={handleSubmit}>
            <label>
                <p>How much money to invest?</p>
                <input
                type="number"
                value={money}
                onChange={(e) => setMoney(e.target.value)}
                required
                />
            </label>
            <br />
            <label>
                <p>How many years to invest?</p>
                <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                required
                />
            </label>
            <br />
            <label>
                <p>Expected annual return rate (%):</p>
                <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                required
                />
            </label>
            <br />
            <button type="submit">Calculate Investment</button>
            </form>

            {total !== null && <p>Result: {formatCurrency(total)}</p>}
        <main />
    );
}

export default Fun;