import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    options: string[];
}

const Dropdown: React.FC<Props> = ({ label, options, ...props }: Props) => {
    const [index, setIndex] = useState<string>("");

    const handleAge = (event: SelectChangeEvent) => {
        setIndex(event.target.value as string);
    };

    return (
        <div {...props}>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel id="demo-select-small-label">{label}</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={index}
                    label={label}
                    onChange={handleAge}
                >
                    {options.map((item, index) => {
                        return <MenuItem value={index}>{item}</MenuItem>;
                    })}
                </Select>
            </FormControl>
        </div>
    );
};

export default Dropdown;
