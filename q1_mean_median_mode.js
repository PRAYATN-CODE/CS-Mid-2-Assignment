// q1_mean_median_mode.js

function calculateStatistics(data, weights = null) {
    const n = data.length;

    // Mean
    const mean = data.reduce((a, b) => a + b, 0) / n;

    // Median
    const sorted = [...data].sort((a, b) => a - b);
    const median =
        n % 2 === 0 ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2 : sorted[Math.floor(n / 2)];

    // Mode
    const freq = {};
    data.forEach(num => freq[num] = (freq[num] || 0) + 1);
    const maxFreq = Math.max(...Object.values(freq));
    const mode = Object.keys(freq)
        .filter(key => freq[key] === maxFreq)
        .map(Number);

    // Weighted Mean
    let weightedMean = null;
    if (weights && weights.length === data.length) {
        const sumProduct = data.reduce((acc, val, i) => acc + val * weights[i], 0);
        const sumWeights = weights.reduce((a, b) => a + b, 0);
        weightedMean = sumProduct / sumWeights;
    }

    console.log("Data:", data);
    console.log("Mean:", mean);
    console.log("Median:", median);
    console.log("Mode:", mode);
    console.log("Weighted Mean:", weightedMean);
}

calculateStatistics([10, 20, 20, 30, 40], [1, 2, 3, 2, 2]);
