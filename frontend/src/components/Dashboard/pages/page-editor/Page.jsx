/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
// import ModuleModal from "./ModuleModal.jsx";
import { useParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import EditorHeader from "./Editor/EditorHeader";
import Sidebar from "./Editor/Sidebar/PrimaryMenu";
import Content from "./Editor/modules/Content";
import ModuleDetails from "./Editor/Sidebar/ ModuleDetails";

const PageDashboard = () => {
  // const [pageData, setPageData] = useState();
  const [PageForm, setPageForm] = useState({
    generalData: {},
    title: "",
    path: "",
    // authID: "",
    layout: "None",
    language: "English",
    publishDate: "",
    modules: [],
  });
  const [activeTab, setActiveTab] = useState("Page");
  const [nestedData, setNestedData] = useState("Page");
  const [allComponents, setAllComponents] = useState([]);

  const [elmClicked, setElmClicked] = useState(null); 
  const [screen, setScreen] = useState("desktop");
  const [width, setWidth] = useState(400);

  let { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:4000/api/pages/${id}`)
        .then((res) => res.json())
        .then((data) => {
          // setPageData(data);
          // Update pageForm with fetched data
          setPageForm((prevPageForm) => ({
            ...prevPageForm,
            ...data,
          }));
        });
    }
  }, [id]);

  useEffect(() => {
    setPageForm((prevPageForm) => ({
      ...prevPageForm,
      modules: allComponents
    }));
    PageForm.modules = allComponents;
  }, [allComponents]);


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
    PageForm?.modules.map((component, index) => (
      <div
        id={`component-${index}`} // Assign unique ID
        key={component.id}
        draggable
        onDragStart={(e) => handleDragStart(e, component.id)}
        // ref={(el) => (itemsRef.current[index] = el)}
        onClick={(e) => {
          // if (e.target === itemsRef.current[index]) {
          setElmClicked({
            id: component?.id,
            index: index,
            ModuleName: component?.content,
          });
          // }
        }}
        className={
          "text-black relative" +
          (elmClicked?.index === `${index}` ? " border border-sky-500" : "")
        }
      >
        <Modules value={component.content} index={index} />
        {/* {elmClicked === `component-${index}` && (
          <div className=" flex z-10 absolute bg-black text-white rounded-lg py-4 px-4">
            <div className=" text-xs">Quick Setting</div>
            <IoClose onClick={() => setElmClicked(null)} />
          </div>
        )} */}
        {/* <Content content={component.content} /> */}
        {/* {component.content} */}
      </div>
    ));

    console.log('PageForm', PageForm)

  return (
    <div className="bg-[#E1E2E6]">
      <EditorHeader
        screen={screen}
        setScreen={setScreen}
        allComponents={allComponents}
        id={id}
        PageForm={PageForm}
      />
      <div className="flex mt-[60px]">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          nestedData={nestedData}
          setNestedData={setNestedData}
          handleDragStart={handleDragStart}
          PageForm={PageForm}
          setPageForm={setPageForm}
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
        {elmClicked && <ModuleDetails elmClicked={elmClicked} setElmClicked={setElmClicked} />}
      </div>
    </div>
  );
};

export default PageDashboard;
