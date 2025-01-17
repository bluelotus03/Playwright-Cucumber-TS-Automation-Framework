import dotenv from 'dotenv'
import { env, getJsonFromFile } from './env/parseEnv'
import { GlobalConfig, HostsConfig, PagesConfig, PageElementMappings, EmailsConfig, ErrorsConfig } from './env/global'
import * as fs from "fs"
import { generateCucumberRuntimeTag } from './support/tag-helper'

const environment = env('NODE_ENV')

dotenv.config( { path: env('COMMON_CONFIG_FILE')})
dotenv.config( { path: `${env('ENV_PATH')}${environment}.env`})

const hostsConfig: HostsConfig = getJsonFromFile(env('HOSTS_URL_PATH'))
const pagesConfig: PagesConfig = getJsonFromFile(env('PAGES_URL_PATH'))
const emailsConfig: EmailsConfig = getJsonFromFile(env('EMAILS_URL_PATH'))
const errorsConfig: ErrorsConfig = getJsonFromFile(env('ERRORS_URL_PATH'))
const mappingFiles = fs.readdirSync(`${process.cwd()}${env('PAGE_ELEMENTS_PATH')}`)
const getEnvList = (): string[] => {
    const envList = Object.keys(hostsConfig)

    if (envList.length === 0) {
        throw Error(`❗️ No environments mapped in your ${env('HOSTS_URL_PATH')}`)
    }

    return envList
}

const pageElementMappings: PageElementMappings = mappingFiles.reduce(
    (pageElementConfigAcc, file) => {
        const key = file.replace('.json', '')
        const elementMappings = getJsonFromFile(`${env('PAGE_ELEMENTS_PATH')}${file}`)
        return {...pageElementConfigAcc, [key]: elementMappings}
    },
    {}
)

const worldParameters: GlobalConfig = {
    hostsConfig,
    pagesConfig,
    emailsConfig,
    errorsConfig,
    pageElementMappings,
}


const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/step-definitions/**/*.ts \
                --world-parameters ${JSON.stringify(worldParameters)} \
                -f json:./reports/report.json \
                --format progress-bar \
                --parallel ${env('PARALLEL')} \
                --retry ${env('RETRY')}`

const dev = generateCucumberRuntimeTag(common, environment, getEnvList(), 'dev')
const smoke = generateCucumberRuntimeTag(common, environment, getEnvList(), 'smoke')
const regression = generateCucumberRuntimeTag(common, environment, getEnvList(), 'regression')

export { dev, smoke, regression, environment }