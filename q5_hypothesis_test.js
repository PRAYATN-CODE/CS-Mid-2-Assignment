// q5_hypothesis_test.js

function tTestTwoSamples(classA, classB) {
    const meanA = classA.reduce((a, b) => a + b, 0) / classA.length;
    const meanB = classB.reduce((a, b) => a + b, 0) / classB.length;

    const varA = classA.map(x => (x - meanA) ** 2).reduce((a, b) => a + b, 0) / (classA.length - 1);
    const varB = classB.map(x => (x - meanB) ** 2).reduce((a, b) => a + b, 0) / (classB.length - 1);

    const se = Math.sqrt(varA / classA.length + varB / classB.length);
    const t = (meanA - meanB) / se;

    console.log("Class A Marks:", classA);
    console.log("Class B Marks:", classB);
    console.log("Mean(A):", meanA, "Mean(B):", meanB);
    console.log("Variance(A):", varA, "Variance(B):", varB);
    console.log("t-statistic:", t);
    console.log("Null Hypothesis (H0): Means are equal");
    console.log("Alternative Hypothesis (H1): Means are different");

    console.log(
        Math.abs(t) > 2
            ? "Reject H0 → Significant difference"
            : "Fail to Reject H0 → No significant difference"
    );
}

tTestTwoSamples([78, 85, 82, 90, 88], [75, 80, 78, 84, 79]);
