import React from 'react'

export function StyledBtn(props) {
 
  return (
    <div
        style={{
            border: "1px solid black",
            width: props.width || "25px",
            height: props.height,
            backgroundColor: props.backgroundColor
        }}
    >
    </div>
  );
}

export function StyledInput() {
 
    return (
        <div>
           <input
                type="text"
                placeholder="write here"
            /> 
        </div>
    );
  }

