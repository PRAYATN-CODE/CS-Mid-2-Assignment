// q2_range_variance_stddev.js

function computeStats(data) {
    const n = data.length;
    const mean = data.reduce((a, b) => a + b, 0) / n;

    // Squared differences
    const squaredDiffs = data.map(x => (x - mean) ** 2);
    const variance = squaredDiffs.reduce((a, b) => a + b, 0) / n;
    const stdDev = Math.sqrt(variance);

    // Range
    const range = Math.max(...data) - Math.min(...data);

    console.log("Data:", data);
    console.log("Mean:", mean);
    console.log("Squared Differences:", squaredDiffs);
    console.log("Variance:", variance);
    console.log("Standard Deviation:", stdDev);
    console.log("Range:", range);
}

computeStats([10, 12, 23, 23, 16, 23, 21, 16]);
