// q4_correlation_regression.js

function correlationAndRegression(x, y) {
    const n = x.length;

    const meanX = x.reduce((a, b) => a + b, 0) / n;
    const meanY = y.reduce((a, b) => a + b, 0) / n;

    const numerator = x.map((_, i) => (x[i] - meanX) * (y[i] - meanY))
        .reduce((a, b) => a + b, 0);

    const denominator = Math.sqrt(
        x.map(v => (v - meanX) ** 2).reduce((a, b) => a + b, 0) *
        y.map(v => (v - meanY) ** 2).reduce((a, b) => a + b, 0)
    );

    const r = numerator / denominator;

    // Regression coefficients
    const b = numerator / x.map(v => (v - meanX) ** 2).reduce((a, b) => a + b, 0);
    const a = meanY - b * meanX;

    console.log("X:", x);
    console.log("Y:", y);
    console.log("Correlation Coefficient (r):", r);
    console.log(`Regression Line: y = ${a.toFixed(2)} + ${b.toFixed(2)}x`);
}

correlationAndRegression([2, 3, 4, 5, 6], [81, 86, 89, 93, 97]);
