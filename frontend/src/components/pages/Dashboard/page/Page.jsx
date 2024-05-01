/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
// import ModuleModal from "./ModuleModal.jsx";
import { IoClose } from "react-icons/io5";
import EditorHeader from "./Editor/EditorHeader";
import Sidebar from "./Editor/Sidebar/MainMenu";
import Content from "./Editor/modules/Content";

const PageDashboard = () => {
  const [activeTab, setActiveTab] = useState("Page");
  const [nestedData, setNestedData] = useState("Page");
  const [allComponents, setAllComponents] = useState([]);

  const [screen, setScreen] = useState("desktop");
  const [elmClicked, setElmClicked] = useState(null);
  const [nestedDataClicked, setNestedDataClicked] = useState(null);
  const [width, setWidth] = useState(400);

  const [settingPanel, setSettingPanel] = useState(false);


  const startResizing = (mouseDownEvent) => {
    // When the mouse is down, start tracking movement
    const startX = mouseDownEvent.clientX;
    const startWidth = width;

    const onMouseMove = (mouseMoveEvent) => {
      // Calculate new width
      const currentX = mouseMoveEvent.clientX;
      const newWidth = startWidth + (currentX - startX);
      setWidth(newWidth);
    };

    const onMouseUp = () => {
      // Stop tracking movement
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const itemsRef = useRef([]);

  // console.log("allComponents", allComponents);

  const handleDragStart = (e, id, isNestedData = false) => {
    e.dataTransfer.setData(
      "application/json",
      JSON.stringify({ id, isNestedData })
    );

    setTimeout(() => {
      setActiveTab(null);
    }, 100); // Delay of 100ms
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const { id, isNestedData } = JSON.parse(
      e.dataTransfer.getData("application/json")
    );

    // Find the drop position index
    let dropPositionIndex = -1;
    const pageContainerRect = document
      .getElementById("page-container")
      .getBoundingClientRect();
    const dropY = e.clientY - pageContainerRect.top; // Y position within the container

    // Assume each component has a ref or way to calculate its middle Y position
    // This part needs adjustment based on your actual DOM structure
    const componentHeights = allComponents.map(
      (_, index) =>
        document.getElementById(`component-${index}`).getBoundingClientRect()
          .top - pageContainerRect.top
    );
    for (let i = 0; i < componentHeights.length; i++) {
      if (dropY < componentHeights[i]) {
        dropPositionIndex = i;
        break;
      }
    }
    if (dropPositionIndex === -1) dropPositionIndex = allComponents.length; // Drop at end if no component is below the drop point

    setAllComponents((prevComponents) => {
      let newComponents = [...prevComponents];
      if (isNestedData) {
        // Handle adding new item from nestedData
        const newItem = { id, content: id.split("-")[1] }; // Or construct content as needed
        newComponents.splice(dropPositionIndex, 0, newItem);
      } else {
        // Handle reordering existing item
        const draggedIndex = newComponents.findIndex((comp) => comp.id === id);
        if (draggedIndex === -1 || draggedIndex === dropPositionIndex)
          return prevComponents; // Item not found or no movement
        const [draggedItem] = newComponents.splice(draggedIndex, 1);
        // Adjust for removal if dragged item was before the drop position
        if (draggedIndex < dropPositionIndex) dropPositionIndex--;
        newComponents.splice(dropPositionIndex, 0, draggedItem);
      }
      return newComponents;
    });
  };

  const Modules = ({ value, index }) => {
    const [text, setText] = useState(null);

    switch (value) {
      case "costumeComponent":
        return <Content text={text} setText={setText} />;
      case "Navigation":
        return (
          <nav
            // className="px-4 py-2"
            style={{ margin: "10px", padding: "8px 16px" }}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            Nav
          </nav>
        );
      case "Container":
        return <div className=" border border-red-600 min-h-8 min-w-8"></div>;
      default:
        return (
          <p className="px-4 py-2" ref={(el) => (itemsRef.current[index] = el)}>
            {value}
          </p>
        );
    }
  };

  const renderComponents = () =>
    allComponents.map((component, index) => (
      <div
        id={`component-${index}`} // Assign unique ID
        key={component.id}
        draggable
        onDragStart={(e) => handleDragStart(e, component.id)}
        // ref={(el) => (itemsRef.current[index] = el)}
        onClick={(e) => {
          // console.log("e", e);
          console.log(
            "elementRef.current.style",
            itemsRef.current[index].style
          );
          // if (e.target === itemsRef.current[index]) {
          setElmClicked(`component-${index}`);
          setNestedDataClicked(itemsRef.current[index]);
          // }
        }}
        className={
          "text-black relative" +
          (elmClicked === `component-${index}` ? " border border-sky-500" : "")
        }
      >
        <Modules value={component.content} index={index} />
        {elmClicked === `component-${index}` && (
          <div className=" flex z-10 absolute bg-black text-white rounded-lg py-4 px-4">
            <div className=" text-xs">Quick Setting</div>
            <IoClose onClick={() => setElmClicked(null)} />
          </div>
        )}
        {/* <Content content={component.content} /> */}
        {/* {component.content} */}
      </div>
    ));

 
  const BoxStyleEditor = () => {
    return (
      <div className="flex justify-center items-center w-fit mx-auto bg-green-300 p-4">
        <div className="relative border-dashed border-2 border-green-500">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
            0
          </div>
          <div className="border-0 p-0">
            <div className="p-7 bg-blue-300 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                30
              </div>

              <div className="w-[78px] h-[14px] bg-blue-200 flex justify-center items-center"></div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                30
              </div>
            </div>
          </div>{" "}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full">
            0
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full">
            0
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#E1E2E6]">
      <EditorHeader screen={screen} setScreen={setScreen} />
      <div className="flex mt-[60px]">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          nestedData={nestedData}
          setNestedData={setNestedData}
          handleDragStart={handleDragStart}
        />
        <div className=" flex flex-1 flex-col bg-slate-400 p-6">
          <div
            id="page-container"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className={
              "flex flex-1  flex-col relative bg-white  m-auto w-full" +
              (screen === "mobile" ? " max-w-[300px]" : "") +
              (screen === "tablet" ? " max-w-[600px]" : "")
            }
            style={
              screen === "resize"
                ? { width: `${width}px`, maxWidth: "100%" }
                : {}
            }
          >
            {renderComponents()}
            {screen === "resize" && (
              <div
                style={{
                  width: "10px",
                  height: "100%",
                  backgroundColor: "darkgrey",
                  position: "absolute",
                  right: 0,
                  cursor: "col-resize",
                }}
                onMouseDown={startResizing}
              ></div>
            )}
          </div>
        </div>
        {elmClicked && (
          <div className="flex flex-col fixed top-[65px] right-0 h-full bg-[#131826] w-[250px]">
            <div className="flex justify-between p-4">
              <span className=" text-lg font-medium">All Settings</span>
              <IoClose
                onClick={() => setElmClicked(null)}
                width={24}
                height={24}
                className=" w-6 h-6"
              />
            </div>

            <BoxStyleEditor />
          </div>
        )}
      </div>
    </div>
  );
};

export default PageDashboard;
