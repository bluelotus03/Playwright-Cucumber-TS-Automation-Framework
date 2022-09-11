import { Then } from '@cucumber/cucumber';
import { waitFor, waitForSelector } from '../../support/wait-for-behavior';
import { ScenarioWorld } from '../setup/world';
import { getElementLocator } from '../../support/web-element-helper';
import { elementChecked } from '../../support/html-behavior';
import { ElementKey } from '../../env/global';
import { logger } from '../../logger';

Then(
    /^the "([^"]*)" (?:radio button|check box|switch) should( not)? be checked$/,
    async function(this:ScenarioWorld, elementKey: ElementKey, negate: boolean) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(`the ${elementKey} radio button|check box|switch should ${negate?'not ':''}be checked`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor( async () => {
                const elementStable = await waitForSelector(page, elementIdentifier);

                if (elementStable) {
                    const isElementChecked = await elementChecked(page, elementIdentifier);
                    return (isElementChecked === !negate);
                } else {
                    return elementStable;
                }
            }, 
            globalConfig,
            { target: elementKey }
        );
    }
)