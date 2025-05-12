import { Dispatch, SetStateAction } from "react";

type IconName = "AntDesign" | "MaterialCommunityIcons";

export interface IInput {
    placeholder: string;
    onChangeValue: Dispatch<SetStateAction<string>>;
    secureTextEntry: boolean
    placeholderError?: string;
    checkField?: boolean;
    value: string;
    Icon?: string;
}