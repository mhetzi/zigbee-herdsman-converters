import {Definition} from '../lib/types';
import extend from '../lib/extend';

const definitions: Definition[] = [
    {
        zigbeeModel: ['AL8TC13W-AP'],
        model: 'AL8TC13W-AP',
        vendor: 'Alchemy',
        description: 'Downlight with tuneable white',
        extend: extend.light_onoff_brightness_colortemp({colorTempRange: [153, 370]}),
    },
    {
        zigbeeModel: ['AL8RGB13W-AP'],
        model: 'AL8RGB13W-AP',
        vendor: 'Alchemy',
        description: 'Downlight RGBW',
        extend: extend.light_onoff_brightness_colortemp_color({colorTempRange: [153, 370]}),
    },
];

export default definitions;
module.exports = definitions;
