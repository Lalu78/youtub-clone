import React from "react";
import "./SidebarRow.css";

function SidebarRow({selected,Icon,title}) {
    return (
        <div className={`SidebarRow ${selected&& "selected"}`}>
            <Icon className="SidebarRow_icon"/>
      <h4 className="SidebarRow_title">{title}</h4>
    </div>
    )
}

export default SidebarRow;
