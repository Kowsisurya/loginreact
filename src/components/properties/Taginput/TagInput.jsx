import React, { useState } from 'react';
import { render } from 'react-dom';
import { COUNTRIES } from './countries';
import { WithContext as ReactTags } from 'react-tag-input';
import "./taginput.css";
import { useEffect } from 'react';


export const ENVIRONMENT_LIST = [
    "Production",
    "Non-Production",
    "Dev-Ops",
    "Sandbox",
    "Development",
    "Staging",
    "Testing"
];

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];


const TagInput = ({placeholder, input_name, input_id, onChange, props_value}) => {

    // console.log(props);
    // const [tags, setTags] = React.useState([
    //     { id: 'Thailand', text: 'Thailand' },
    //     { id: 'India', text: 'India' },
    //     { id: 'Vietnam', text: 'Vietnam' },
    //     { id: 'Turkey', text: 'Turkey' },
    //   ]);
      const [tags, setTags] = React.useState([]);
      const [suggestions, setSuggestions] = React.useState([]);
      useEffect(() => {
        if(props_value){
            const old_value = props_value.split(',');
            const oldvalue = old_value.map((env) => {
                return {
                  id: env,
                  text: env,
                };
              });
              setTags(oldvalue);
        }

        const suggestions = ENVIRONMENT_LIST.map((env) => {
            return {
              id: env,
              text: env,
            };
          });
          setSuggestions(suggestions);
      },[props_value]);

      const handleDelete = (i) => {
        setTags(tags.filter((tag, index) => index !== i));
      };
      useEffect(() => {
        const value = tags.map(v => v.text);
        const name = input_name;
        onChange({ target: { value, name } });
      },[tags])
      const handleAddition = (tag) => {
        setTags([...tags, tag]);
      };
    
      const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();
    
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
    
        // re-render
        setTags(newTags);
      };
    
      const handleTagClick = (index) => {
        console.log('The tag at index ' + index + ' was clicked');
      };
    
      return (
        <div className="tag-body">
          <div>
            <ReactTags
              tags={tags}
              suggestions={suggestions}
              delimiters={delimiters}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              handleDrag={handleDrag}
              handleTagClick={handleTagClick}
              inputFieldPosition="top"
              autocomplete
              editable
              placeholder={placeholder}
              id={input_id}
              name={input_name}
            />
          </div>
        </div>
      );
}

export default TagInput;