/* eslint-disable react/prop-types */
import { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import EditorHeader from "./Editor/EditorHeader";
import Sidebar from "./Editor/Sidebar/PrimaryMenu";
import Content from "./Editor/modules/Content";
import Modules from "./Modules";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const PageDashboard = () => {
  const [PageForm, setPageForm] = useState({
    generalData: {},
    title: "",
    path: "",
    layout: "None",
    language: "English",
    authID: "",
    publishDate: "",
    modules: [],
  });
  const [authors, setAuthors] = useState([]);
  const [activeTab, setActiveTab] = useState("Page");
  const [nestedData, setNestedData] = useState("Page");
  const [allComponents, setAllComponents] = useState([]);
  const [elmClicked, setElmClicked] = useState(null);
  const [screen, setScreen] = useState("desktop");
  const [width, setWidth] = useState(400);
  const [isEditingText, setIsEditingText] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:4000/api/authors")
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:4000/api/pages/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPageForm((prevPageForm) => ({
            ...prevPageForm,
            ...data,
          }));
          const modules = data.modules.map((module) => {
            if (
              module?.content?.includes("costumeComponent") &&
              module.values.text
            ) {
              console.log("module", module?.values?.text);
              return {
                ...module,
                values: {
                  ...module.values,
                  editorState: EditorState.createWithContent(
                    convertFromRaw(JSON.parse(module.values.text))
                  ),
                },
              };
            }
            return module;
          });
          setAllComponents(modules);
        });
    }
  }, [id]);

  useEffect(() => {
    setPageForm((prevPageForm) => ({
      ...prevPageForm,
      modules: allComponents,
    }));
  }, [allComponents]);

  const startResizing = (mouseDownEvent) => {
    const startX = mouseDownEvent.clientX;
    const startWidth = width;

    const onMouseMove = (mouseMoveEvent) => {
      const currentX = mouseMoveEvent.clientX;
      const newWidth = startWidth + (currentX - startX);
      setWidth(newWidth);
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const itemsRef = useRef([]);

  const handleDragStart = (e, id, isNestedData = false) => {
    if (isEditingText) return;

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

    let dropPositionIndex = -1;
    const pageContainerRect = document
      .getElementById("page-container")
      .getBoundingClientRect();
    const dropY = e.clientY - pageContainerRect.top;

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
    if (dropPositionIndex === -1) dropPositionIndex = allComponents.length;

    setAllComponents((prevComponents) => {
      let newComponents = [...prevComponents];
      if (isNestedData) {
        const newItem = {
          id,
          content: id.split("-")[1],
          values: { editorState: EditorState.createEmpty() },
        };
        newComponents.splice(dropPositionIndex, 0, newItem);
      } else {
        const draggedIndex = newComponents.findIndex((comp) => comp.id === id);
        if (draggedIndex === -1 || draggedIndex === dropPositionIndex)
          return prevComponents;
        const [draggedItem] = newComponents.splice(draggedIndex, 1);
        if (draggedIndex < dropPositionIndex) dropPositionIndex--;
        newComponents.splice(dropPositionIndex, 0, draggedItem);
      }
      return newComponents;
    });
  };

  const handleContentChange = useCallback((index, newEditorState) => {
    setAllComponents((prevComponents) => {
      const newComponents = [...prevComponents];
      newComponents[index].values.editorState = newEditorState;
      return newComponents;
    });
  }, []);

  const handleSave = useCallback((index, content) => {
    setAllComponents((prevComponents) => {
      const newComponents = [...prevComponents];
      newComponents[index].values.text = JSON.stringify(convertToRaw(content));
      return newComponents;
    });
    // Optionally, you can make an API call here to save the content
    // fetch('/api/saveContent', { method: 'POST', body: JSON.stringify({ content }) })
  }, []);

  const renderComponents = () =>
    PageForm?.modules.map((component, index) => (
      <div
        id={`component-${index}`}
        key={component.id}
        draggable={!isEditingText}
        onDragStart={(e) => handleDragStart(e, component.id)}
        onClick={(e) => {
          setElmClicked({
            id: component?.id,
            index: index,
            ModuleName: component?.content,
          });
        }}
        className={
          "text-black relative" +
          (elmClicked?.index === `${index}` ? " border border-sky-500" : "")
        }
      >
        <Modules
          value={component}
          index={index}
          itemsRef={itemsRef}
          handleContentChange={handleContentChange}
          handleSave={handleSave}
          setIsEditingText={setIsEditingText}
        />
      </div>
    ));

  console.log("PageForm", PageForm);

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
          authors={authors}
        />
        <div className="flex flex-1 flex-col bg-slate-400 p-6">
          <div
            id="page-container"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className={
              "flex flex-1 flex-col relative bg-white m-auto w-full" +
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
        {/* {elmClicked && (
          <ModuleDetails
            elmClicked={elmClicked}
            setElmClicked={setElmClicked}
          />
        )} */}
      </div>
    </div>
  );
};

export default PageDashboard;
