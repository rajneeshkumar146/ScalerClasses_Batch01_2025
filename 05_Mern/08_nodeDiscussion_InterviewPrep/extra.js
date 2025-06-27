// Memoization concept.
const fibo = (n, dp) => {
    if (n <= 1) {
        dp[n] = n;
        return;
    }

    // ask to memory do you have the result?
    if (dp[n] != 0) {
        return dp[n];
    }

    return dp[n] = fibo(n - 1, dp) + fibo(n - 2, dp);
}

// Tabulation concept.
const fibo2 = (N, dp) => {
    for (let n = 0; n <= N; n++) {
        if (n <= 1) {
            dp[n] = n;
            continue;
        }

        dp[n] = dp[n - 1] + dp[n - 2];
    }
}

