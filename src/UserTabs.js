import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "i'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  console.log("initialTab", initialTab, "allTabs", allTabs);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  console.log(currentIndex, allTabs[0]);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

export default function UserTabs() {
  // const tabs = useTabs(0, content);
  const { currentItem, changeItem } = useTabs(0, content);
  console.log(currentItem);
  return (
    <div className="App">
      <h3>* User Tabs</h3>
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
