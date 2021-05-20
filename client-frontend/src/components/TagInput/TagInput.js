import React from "react";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SkillSet from "../../constants/skills";

export default function FixedTags(props) {
  const fixedOptions = [SkillSet[2]];
  const [value, setValue] = React.useState([]);

  const handleSkill = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div>
      <Autocomplete
        multiple
        id="fixed-tags-demo"
        value={value}
        onChange={(event, newValue) => {
          setValue([
            ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
          ]);
        }}
        options={SkillSet}
        getOptionLabel={(option) => option}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip label={option} {...getTagProps({ index })} />
          ))
        }
        style={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label=""
            variant="outlined"
            placeholder="Required Skills"
          />
        )}
      />
      <button onClick={handleSkill}>Press</button>
    </div>
  );
}
