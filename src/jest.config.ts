import type { Config } from "jest";

const config: Config = {
    moduleNameMapper: {
        "@components/(.*)": ["<rootDir>/src/components/$1"],
        "@model/(.*)": ["<rootDir>/src/model/$1"],
        "@pages/(.*)": ["<rootDir>/src/pages/$1"],
        "@api/(.*)": ["<rootDir>/src/api/$1"]
    }
};

export default config;
