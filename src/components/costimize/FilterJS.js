
import { useLocalStore } from "mobx-react-lite";
import React from "react";
import "./style.css";

// import "bootstrap/dist/css/bootstrap.min.css";

import { CheckboxDropdown } from "./CheckboxDropdown";

export default function FilterJS() {
  const state = useLocalStore(() => ({
    items: [
      { id: "em", label: "Exact Mass", checked: true },
      { id: "f", label: "Formula", checked: true },
      { id: "mw", label: "Molecular Weight", checked: true },
      { id: "cp1", label: "Custom Property 1", checked: true },
      { id: "cp2", label: "Custom Property 2", checked: true },
      { id: "cp3", label: "Custom Property 3", checked: true },
      { id: "cp4", label: "Custom Property 4", checked: true },
      { id: "cp5", label: "Custom Property 5", checked: true },
      { id: "cp6", label: "Custom Property 6", checked: true },
      { id: "cp7", label: "Custom Property 7", checked: true },
      { id: "cp8", label: "Custom Property 8", checked: true }
    ]
  }));

  return (
    <div >
      <CheckboxDropdown items={state.items} />
    </div>
  );
}