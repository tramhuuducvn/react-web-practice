import { createRef } from "react";

export interface DropdownRefType {
    getSelected: () => string;
}

export const DropdownRef = createRef<DropdownRefType>();
