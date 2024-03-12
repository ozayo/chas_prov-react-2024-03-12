import React, { useState } from "react";

const Panel = ({ title, children, collapsible }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <div>
        <h2>{title}</h2>
        {collapsible && (
          <button onClick={toggleCollapse}>
            {collapsed ? "Visa" : "Mindre"}
          </button>
        )}
      </div>
      <div style={{ display: collapsed ? "none" : "block" }}>{children}</div>
    </div>
  );
};

export default Panel;