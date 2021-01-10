import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledInput stories',
    //component: UncontrolledAccordion,
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {

    const [value, setValue] = useState('')

    return <><input onChange={ (e) => {
       setValue(e.currentTarget.value)
    }  }/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/> <button onClick={save}>save</button> - actual value: {value}</>
}

export const ControlledInput = () =>{

    const [parentValue, setParentValue] = useState('')

    const callback = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={callback}/>
}

export const ControlledCheckbox = () =>{
    const [parentValue, setParentValue] = useState(true)

    const callback = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type='checkbox' checked={parentValue} onChange={callback}/>

}

export const ControlledSelect = () =>{
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    const callback = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={callback}>
        <option value="1">None</option>
        <option value="2">Moscow</option>
        <option value="3">SPb</option>
        <option value="4">Saratov</option>
    </select>

}

