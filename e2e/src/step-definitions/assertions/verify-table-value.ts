import { DataTable, Then } from '@cucumber/cucumber'
import { ElementKey } from '../../env/global'
import { getElementLocator } from '../../support/web-element-helper'
import { ScenarioWorld } from "../setup/world"
import { waitFor, waitForResult, waitForSelector } from '../../support/wait-for-behavior'
import { logger } from '../../logger'
import { getTableData } from '../../support/html-behavior'

Then(
    /^the "([^"]*)" table should( not)? equal the following:$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean, dataTable: DataTable) {
        const {
            screen: { page },
            globalConfig,
        } = this
        logger.log(`the ${elementKey} table should ${negate?'not ':''}equal the following:`)

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig)
        logger.log(elementIdentifier+" tbody tr")

        await waitFor(async () => {
                const elementStable = await waitForSelector(page, elementIdentifier)

                if (elementStable) {
                    const tableDataBefore = await getTableData(page, elementIdentifier)

                    logger.log("html table ", JSON.stringify(tableDataBefore))
                    logger.log("cucumber table ", JSON.stringify(dataTable.raw()))

                    if (tableDataBefore === JSON.stringify(dataTable.raw()) === !negate) { 
                        return waitForResult.PASS
                    } else {
                        return waitForResult.FAIL
                    }

                } else {
                    return waitForResult.ELEMENT_NOT_AVAILABLE
                }
            }, 
            globalConfig,
            { target: elementKey, failureMessage: `❗️ Expected ${elementKey} table to ${negate?'not ':''}equal ${dataTable.raw()}` }
        )
    }
)