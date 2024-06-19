import React from "react";
import { IoClose } from "react-icons/io5";
import { LuPlusCircle } from "react-icons/lu";
import SimpleForm from "../modules/PageForm";
import Seo from "../modules/Seo";

const generateUniqueKey = (prefix = "key") => {
  return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
};

const SubMenu = ({
  activeTab,
  setActiveTab,
  nestedData,
  setNestedData,
  handleDragStart,
  setModal,
  setSelectedComponent,
}) => {
  if (!activeTab) return null;

  const sectionsMenuDetails = {
    Page: {
      Page: {
        customComponent: {
          draggable: false,
          component: <SimpleForm />,
        },
      },
      Seo: {
        customComponent: {
          draggable: false,
          component: <Seo />,
        },
      },
      "Code Injection": {
        customComponent: {
          draggable: false,
          component: "Code Injection",
        },
      },
    },
    Elements: {
      Text: {
        Content: "Content",
        Code: "Code",
        Blockquote: "Blockquote",
        Table: "Table",
      },
      Image: {
        Image: "Image",
        Gif: "Gif",
      },
    },
  };

  const details = sectionsMenuDetails[activeTab];
  const detailKeys = details && Object.keys(details);

  const thirdMenu = details[nestedData] || details[Object.keys(details)[0]];

  const getTitle = () => {
    switch (activeTab) {
      case "Page":
        return "Page/SEO";
      case "Elements":
        return "Add Elements";
      case "Sections":
        return "Add Sections";
      default:
        return "Tab";
    }
  };

  return (
    detailKeys && (
      <div
        className={`bg-white text-black fixed left-[64px] z-20 top-[65px] bottom-0 shadow-md`}
      >
        <div className="flex justify-between border-t-8 border-sky-600 sm:text-lg font-semibold py-3 px-4 border-b-2 border-b-[#dfe5eb]">
          {getTitle()}
          <IoClose
            onClick={() => setActiveTab(null)}
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
        <div className="flex flex-col sm:flex-row h-full">
          <div className="grid grid-cols-3 sm:flex sm:h-full flex-col relative bg-[#f7f8f8] align-top min-w-[125px] sm:max-w-[186px] border-r border-[#dfe5eb]">
            {detailKeys?.map((key) => (
              <span
                key={key}
                onClick={() => setNestedData(key)}
                className={
                  "text-sm min-h-[30px] p-3 content-center text-center sm:text-start " +
                  (nestedData === key ? " bg-white " : "")
                }
              >
                {key}
              </span>
            ))}
          </div>
          {thirdMenu && (
            <div className="flex flex-col relative h-full align-top p-3">
              {Object.entries(thirdMenu)?.map(([key, value]) => {
                const uniqueKey = generateUniqueKey(`${nestedData}-${key}`);

                if (key === "customComponent") {
                  if (value.draggable === false) {
                    return (
                      <div
                        key={uniqueKey}
                        className="text-sm min-h-[30px] sm:max-w-[200px]"
                      >
                        {value.component}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={uniqueKey}
                        draggable
                        onDragStart={(e) => handleDragStart(e, key, true)}
                        className="text-sm min-h-[30px] min-w-[125px] max-w-[200px] p-4"
                      >
                        {value.component}
                      </div>
                    );
                  }
                }

                return (
                  <div
                    key={uniqueKey}
                    draggable
                    onDragStart={(e) => handleDragStart(e, value, true)}
                    className="flex items-center justify-between font-medium text-sm min-h-[30px] min-w-[150px] py-2 px-3 pr-1"
                    onClick={() => {
                      setModal(true);
                      setSelectedComponent(key);
                    }}
                  >
                    {key}
                    <LuPlusCircle className="w-5 h-5" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default SubMenu;
