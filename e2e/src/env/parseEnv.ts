export const env = (key: string): string => {
    const value = process.env[key];
    if(!value) {
        throw Error(`No environment variable found for ${key}`);
    }
    return value;
}

export const getJsonFromFile = <T = Record<string, string>>(path: string): T => {
    return require(`${process.cwd()}${path}`);
}

// TODO: Fix returning undefined -- happened with new waitForSelector implementation
export const envNumber = (key: string): number => {
    return Number(env[key]);
}