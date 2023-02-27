import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useEffect } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "US East (Ohio)",
  "US East (N. Virginia)",
  "US West (N. California)",
  "US West (Oregon)",
  "Africa (Cape Town)",
  "Asia Pacific (Hong Kong)",
  "Asia Pacific (Hyderabad)",
  "Asia Pacific (Jakarta)",
  "Asia Pacific (Mumbai)",
  "Asia Pacific (Osaka)",
  "Asia Pacific (Seoul)",
  "Asia Pacific (Singapore)",
  "Asia Pacific (Sydney)",
  "Asia Pacific (Tokyo)",
  "Canada (Central)",
  "Europe (Frankfurt)",
  "Europe (Ireland)",
  "Europe (London)",
  "Europe (Milan)",
  "Europe (Paris)",
  "Europe (Spain)",
  "Europe (Stockholm)",
  "Europe (Zurich)",
  "Middle East (Bahrain)",
  "Middle East (UAE)",
  "South America (São Paulo)"

];

export default function MultipleSelectCheckmarks({multi, name, event_name, onChange, props_value}) {
  // console.log(props_value);
  const [personName, setPersonName] = React.useState([]);
  useEffect(() => {
    if(props_value){
      const old_value = props_value.split(',');
      setPersonName(old_value);
    }
  },[props_value])
  const handleChange = (event) => {
    onChange(event);
    const {
      target: { value },
    } = event;
    
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log(personName);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">{name}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple={multi}
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          name={event_name}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {multi ? <Checkbox checked={personName.indexOf(name) > -1} /> : null}
              {/* {multi ? <Checkbox checked="checked" /> : null} */}
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}