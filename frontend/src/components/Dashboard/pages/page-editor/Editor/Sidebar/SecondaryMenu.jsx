import { useState } from "react";
import { IoClose } from "react-icons/io5";
import SimpleForm from "../modules/PageForm";

import Seo from "../modules/Seo";
import Content from "../modules/Content";

const IframTest = () => (
  <iframe
    src="https://www.google.com/webhp?igu=1"
    height="300"
    width="400"
    // style="border: 4px solid orange"
  ></iframe>
);

const generateUniqueKey = (prefix = "key") => {
  return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
};

const SubMenu = ({
  activeTab,
  setActiveTab,
  nestedData,
  setNestedData,
  handleDragStart,
  PageForm,
  setPageForm,
}) => {
  if (!activeTab) return null;

  const sectionsMenuDetails = {
    Elements: {
      Text: {
        costumeComponent: {
          componentName: "Content",
          draggable: true,
          component: <Content />,
        },
        Navigation: "value1",
        Container: "Container",
        Paragraf: "value2",
      },
      Image: {
        innerKey3: "value3",
        innerKey4: "value4",
      },
    },
    Page: {
      Page: {
        costumeComponent: {
          draggable: false,
          component: (
            <SimpleForm PageForm={PageForm} setPageForm={setPageForm} />
          ),
        },
      },
      Seo: {
        costumeComponent: {
          draggable: false,
          component: <Seo />,
        },
      },
      CodeInjecton: {
        costumeComponent: {
          draggable: false,
          component: "Code Injection",
        },
      },
    },
    Sections: {
      middleKey3: {
        costumeComponent: {
          draggable: true,
          component: <IframTest />,
        },

        innerKey6: "value6",
      },
      middleKey4: {
        innerKey7: "value7",
        innerKey8: "value8",
      },
    },
    Menu: {
      Menu: {
        costumeComponent: "Menu",
      },
      Footer: {
        costumeComponent: "Footer",
      },
    },
  };
  const details = sectionsMenuDetails[activeTab];
  const detailKeys = details && Object?.keys(details);

  const thirdMenu = details[nestedData]
    ? details[nestedData]
    : details[Object.keys(details)[0]];

  return (
    detailKeys && (
      <div
        className={`bg-white text-black fixed left-[65px] z-20 top-[65px] bottom-0 shadow-md`}
      >
        <div className="flex justify-between border-t-8 border-sky-600 text-lg font-semibold py-3 px-4 border-b-2 border-b-[#dfe5eb]">
          Add Elements
          <IoClose onClick={() => setActiveTab(null)} />
        </div>
        <div className="flex h-full">
          <div className="flex h-full flex-col relative bg-[#f7f8f8] align-top min-w-[125px] max-w-[186px] border-r border-[#dfe5eb]">
            {detailKeys?.map((key) => (
              <span
                key={key}
                onClick={() => setNestedData(key)}
                className={
                  "text-sm min-h-[30px] p-3 " +
                  (nestedData === key && " bg-white ")
                }
              >
                {key}
              </span>
            ))}
          </div>
          {thirdMenu && (
            <div className="flex flex-col relative h-full align-top p-3">
              {/* min-w-[125px] max-w-[186px] */}
              {Object.entries(thirdMenu)?.map(([key, value]) => {
                const unikeKey = generateUniqueKey(`${nestedData}-${key}`);

                if (key === "costumeComponent") {
                  if (value.draggable === false) {
                    return (
                      <div
                        key={unikeKey} // Assuming this ensures uniqueness
                        className="text-sm min-h-[30px] max-w-[200px]"
                      >
                        {value.component}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={unikeKey} // Assuming this ensures uniqueness
                        draggable
                        onDragStart={(e) => {
                          handleDragStart(e, unikeKey, true);
                        }}
                        className="text-sm min-h-[30px] min-w-[125px] max-w-[200px]"
                      >
                        {value.component}
                      </div>
                    );
                  }
                }

                return (
                  <div
                    key={unikeKey} // Assuming this ensures uniqueness
                    draggable
                    onDragStart={(e) => {
                      handleDragStart(e, unikeKey, true);
                    }}
                    className="text-sm min-h-[30px] min-w-[125px]"
                  >
                    {key}
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
