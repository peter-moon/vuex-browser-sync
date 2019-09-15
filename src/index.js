import uaParser from 'ua-parser-js';
import viewportDimensions from 'viewport-dimensions';

export const UA_SET = 'UA_SET';

/**
 * Parse user agent by ua-parser-js
 * @typedef {Object} UAParsed
 * @see {@link https://www.npmjs.com/package/ua-parser-js|detail ua-parser-js returns}
 * @param {string} ua : useragent string
 * @returns {UAParsed} ua parsed result
 */
const parseUa = ua => {
    return uaParser(ua);
}

/**
 * Parse viewport by viewport-dimensions
 * @typedef {Object} ViewportParsed
 * @see {@link https://www.npmjs.com/package/viewport-dimensions|detail viewport-dimensions returns}
 * @returns {ViewportParsed} viewport parsed result
 */
const parseViewport = _ => {
    if(typeof window === 'undefined' || typeof document === 'undefined'){
        return {
            viewport: {
                err: true, 
                message: 'NEEDS window.document'
            }
        }   
    }

    const width = viewportDimensions.width();
    const height = viewportDimensions.height();
    const max = viewportDimensions.max();
    const min = viewportDimensions.min();

    return {
        viewport: {
            err: null,
            message: null,
            width,
            height,
            max,
            min
        }
    }
}

export const browserSync = ({ moduleName = 'browser', ua = window.navigator.userAgent }) => {
    return store => {
        store.registerModule(moduleName, {
            namespcaed: true,
            state: Object.freeze({ ...parseUa(ua), ...parseViewport() })
        });
    }
}
