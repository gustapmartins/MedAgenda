import { Dispatch, SetStateAction } from "react";

type IconName = "AntDesign" | "MaterialCommunityIcons";

export interface IInput {
    placeholder: string;
    checkField?: boolean;
    placeholderError?: string;
    onChangeValue: Dispatch<SetStateAction<string>>;
    value: string;
    Icon?: string;
    secureTextEntry: boolean
}