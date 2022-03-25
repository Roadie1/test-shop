module.exports = {
    distDir: 'build',
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
        })
        return config;
    }
}