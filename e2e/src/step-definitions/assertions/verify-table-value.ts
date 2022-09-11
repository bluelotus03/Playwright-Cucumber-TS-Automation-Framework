import { DataTable, Then } from '@cucumber/cucumber';
import { ElementKey } from '../../env/global';
import { getElementLocator } from '../../support/web-element-helper';
import { ScenarioWorld } from "../setup/world";
import { waitFor, waitForSelector } from '../../support/wait-for-behavior';
import { logger } from '../../logger';
import { getTableData } from '../../support/html-behavior';

Then(
    /^the "([^"]*)" table should( not)? equal the following:$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean, dataTable: DataTable) {
        const {
            screen: { page },
            globalConfig,
        } = this;
        logger.log(`the ${elementKey} table should ${negate?'not ':''}equal the following:`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);
        logger.log(elementIdentifier+" tbody tr");

        await waitFor(async () => {
                const elementStable = await waitForSelector(page, elementIdentifier);

                if (elementStable) {
                    const tableDataBefore = await getTableData(page, elementIdentifier);

                    logger.log("html table ", JSON.stringify(tableDataBefore));
                    logger.log("cucumber table ", JSON.stringify(dataTable.raw()));

                    return tableDataBefore === JSON.stringify(dataTable.raw()) === !negate;

                } else {
                    return elementStable;
                }
            }, 
            globalConfig,
            { target: elementKey }
        );
    }
);