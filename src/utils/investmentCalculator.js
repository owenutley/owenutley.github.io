

function calculateInvestment(principal, years, rate) {
  return principal * Math.pow(1 + rate, years);
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export { calculateInvestment, formatCurrency}