"use client"
import { Key } from "react";
import { Select } from "@heroui/react";
import { Label, ListBox } from "@heroui/react";
interface Option {
    value: string;
}

interface SelectInputProps {
    label?: string;
    placeholder?: string;
    items: string[]; // Use a clear object structure
    onChange: (value: Key | null) => void;
}
export default function SelectInput({ label , placeholder , items, onChange }: SelectInputProps) {


    return <Select onChange={onChange} className="rounded-md" placeholder={placeholder}>
        <Label className="text-black font-bold text-gray-700 ml-1">{label}</Label>
        <Select.Trigger className="bg-gray-100 rounded-md">
            <Select.Value />
            <Select.Indicator />
        </Select.Trigger>
        <Select.Popover className="rounded-md">
            <ListBox >
                {
                    items.map(item => (<ListBox.Item className="rounded-md text-black" key={item} id={item} textValue={item}>
                        {item}
                        <ListBox.ItemIndicator />
                    </ListBox.Item>))
                }

            </ListBox>
        </Select.Popover>
    </Select>
}