/**
 * This file was generated from NativeBackground.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { DynamicValue, NativeImage } from "mendix";
import { ReactNode } from "react";

interface CommonProps<Style> {
    name: string;
    style: Style[];
}

export interface NativeBackgroundProps<Style> extends CommonProps<Style> {
    content?: ReactNode;
    background: DynamicValue<NativeImage>;
}
