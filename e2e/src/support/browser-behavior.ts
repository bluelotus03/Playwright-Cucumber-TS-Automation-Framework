import { devices } from "playwright"
import { envNumber } from "../env/parseEnv"

export const getViewport = (): { width: number, height: number } => {
    let viewport
    const emulation = process.env.EMULATION || "browser"

    if (emulation != "browser") {
        const device = devices[emulation]
        viewport = {
            width: device.viewport.width,
            height: device.viewport.height
        }
    } else {
        viewport = {
            width: envNumber('BROWSER_WIDTH'),
            height: envNumber('BROWSER_HEIGHT')
        }
    }
    return viewport
}