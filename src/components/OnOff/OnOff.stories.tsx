import React, {useState} from 'react';
import Rating, {RatingValueType} from "./Rating";
import OnOff from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff,
}

const callback = action('clicked')

export const OnMode = () => <OnOff on={true} setOnValue={callback}/>
export const OffMode = () => <OnOff on={false} setOnValue={callback}/>


export const ModeChanging = () => {

    const [value, setValue] = useState<boolean>(true)

    return <OnOff on={value} setOnValue={setValue} />
}
