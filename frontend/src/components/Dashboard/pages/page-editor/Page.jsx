import React, { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import EditorHeader from "./Editor/EditorHeader";
import Sidebar from "./Editor/Sidebar/PrimaryMenu";
import ModulesComponent from "./Modules";
import Modal from "../../molecules/Modal";

const fetchAuthors = async (setAuthors) => {
  const response = await fetch("http://localhost:4000/api/authors");
  const data = await response.json();
  setAuthors(data);
};

const fetchPageData = async (id, setPageForm, setAllComponents) => {
  const response = await fetch(`http://localhost:4000/api/pages/${id}`);
  const data = await response.json();
  setPageForm((prevPageForm) => ({ ...prevPageForm, ...data }));
  const modules = data.modules.map((module) => {
    if (module.component === "Content" && module.values?.text) {
      return {
        component: module.component,
        values: {
          ...module.values,
          editorState: EditorState.createWithContent(
            convertFromRaw(JSON.parse(module.values.text))
          ),
        },
      };
    }
    return {
      component: module.component,
      values: module.values || {},
    };
  });
  setAllComponents(modules);
};

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
  const [isEditingText, setIsEditingText] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState("");

  console.log("allComponents", allComponents);

  let { id } = useParams();

  const isAuthenticated = JSON.parse(sessionStorage.getItem("user")) || null;
  const isAdmin = isAuthenticated?.role === "admin";

  useEffect(() => {
    fetchAuthors(setAuthors);
  }, []);

  useEffect(() => {
    if (id) {
      fetchPageData(id, setPageForm, setAllComponents);
    }
  }, [id]);

  useEffect(() => {
    setPageForm((prevPageForm) => ({
      ...prevPageForm,
      modules: allComponents,
    }));
  }, [allComponents]);

  const itemsRef = useRef([]);

  const handleDragStart = (e, component, isNestedData = false) => {
    if (isEditingText) return;

    e.dataTransfer.setData(
      "application/json",
      JSON.stringify({ component, isNestedData })
    );

    setTimeout(() => {
      setActiveTab(null);
    }, 100); // Delay of 100ms
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const { component, isNestedData } = JSON.parse(
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
          component,
          values:
            component === "Content"
              ? { editorState: EditorState.createEmpty() }
              : {},
        };
        newComponents.splice(dropPositionIndex, 0, newItem);
      } else {
        const draggedIndex = newComponents.findIndex(
          (comp) => comp.component === component
        );
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
  }, []);

  const handleCodeChange = useCallback((index, code) => {
    setAllComponents((prevComponents) => {
      const newComponents = [...prevComponents];
      newComponents[index].values.code = code;
      return newComponents;
    });
  }, []);

  const handleImageChange = useCallback((index, file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setAllComponents((prevComponents) => {
        const newComponents = [...prevComponents];
        newComponents[index].values.image = e.target.result;
        return newComponents;
      });
    };
    reader.readAsDataURL(file);
  }, []);

  const renderComponents = () =>
    PageForm?.modules.map((component, index) => (
      <div
        id={`component-${index}`}
        key={index}
        draggable={!isEditingText}
        onDragStart={(e) => handleDragStart(e, component.component)}
        onClick={() => {
          setElmClicked({
            index: index,
            ModuleName: component?.component,
          });
        }}
        className={
          "text-black relative py-4 px-6" +
          (elmClicked?.index === index ? " border-2 border-sky-500" : "")
        }
      >
        <ModulesComponent
          value={component}
          index={index}
          itemsRef={itemsRef}
          handleContentChange={handleContentChange}
          handleSave={handleSave}
          handleCodeChange={handleCodeChange}
          handleImageChange={handleImageChange}
          setIsEditingText={setIsEditingText}
        />
      </div>
    ));

  const handlePositionChange = (e) => {
    setSelectedPosition(e.target.value);
  };

  const addComponentAtPosition = () => {
    if (selectedPosition && selectedComponent) {
      const position = parseInt(selectedPosition, 10) - 1;
      setAllComponents((prevComponents) => {
        const newComponents = [...prevComponents];
        const newItem = {
          component: selectedComponent,
          values:
            selectedComponent === "Content"
              ? { editorState: EditorState.createEmpty() }
              : {},
        };
        newComponents.splice(position, 0, newItem);
        return newComponents;
      });
      setSelectedPosition("");
      setModal(false);
    }
  };

  return (
    <div className="bg-[#E1E2E6]">
      <EditorHeader allComponents={allComponents} id={id} PageForm={PageForm} />
      <div className="flex mt-[65px]">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          nestedData={nestedData}
          setNestedData={setNestedData}
          handleDragStart={handleDragStart}
          PageForm={PageForm}
          setPageForm={setPageForm}
          authors={authors}
          isAdmin={isAdmin}
          setModal={setModal}
          setSelectedComponent={setSelectedComponent}
        />
        <div className="flex flex-1 flex-col bg-slate-400 p-6 sm:pl-[88px]">
          <div
            id="page-container"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className={
              "flex flex-1 flex-col relative bg-white m-auto w-full min-h-screen"
            }
          >
            {renderComponents()}
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          modal={modal}
          setModal={setModal}
          zIndex="20"
          onCancel={() => setModal(false)}
          onConfirm={() => addComponentAtPosition()}
          title="Add Module"
          desc="You can write the number where to place"
        >
          <div>
            <div className="flex justify-between items-center mt-5 mb-4">
              <p className="text-black font-semibold">
                {selectedComponent} Component:{" "}
              </p>
              <input
                className="bg-white border rounded-md p-3 py-1 text-black"
                placeholder="Place the number "
                value={selectedPosition}
                onChange={handlePositionChange}
              />
             
            </div>
            <div className="overflow-y-auto max-h-[250px]">
              {allComponents?.map((com, index) => (
                <div
                  className={`text-black flex items-center mb-2 border rounded-md`}
                  key={index}
                >
                  <span className="block p-3 border-r mr-4 min-w-[40px] text-center">
                    {index + 1}
                  </span>
                  {com?.component}
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PageDashboard;
