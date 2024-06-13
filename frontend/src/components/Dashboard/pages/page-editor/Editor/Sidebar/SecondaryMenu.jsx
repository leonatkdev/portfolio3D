import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuPlusCircle } from "react-icons/lu";
import SimpleForm from "../modules/PageForm";

import Seo from "../modules/Seo";
// import Content from "../modules/Content";

// const IframTest = () => (
//   <iframe
//     src="https://www.google.com/webhp?igu=1"
//     height="300"
//     width="400"
//     // style="border: 4px solid orange"
//   ></iframe>
// );

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
  authors,
}) => {
  if (!activeTab) return null;

  const sectionsMenuDetails = { 
    Page: {
      Page: {
        costumeComponent: {
          draggable: false,
          component: (
            <SimpleForm
              PageForm={PageForm}
              setPageForm={setPageForm}
              authors={authors}
            />
          ),
        },
      },
      Seo: {
        costumeComponent: {
          draggable: false,
          component: <Seo />,
        },
      },
      "Code Injecton": {
        costumeComponent: {
          draggable: false,
          component: "Code Injection",
        },
      },
    },
    Elements: {
      Text: {
        Content: "Content",
        // costumeComponent: {
        //   componentName: "Content",
        //   draggable: true,
        //   component: <Content />,
        // },
        Code: "Code",
        BlackQuoute: "BlackQuoute",
        Table: "Table",
      },
      Image: {
        Image: "value3",
        Gif: "value4",
      },
    },
   
    // Sections: {
    //   middleKey3: {
    //     costumeComponent: {
    //       draggable: true,
    //       component: <IframTest />,
    //     },

    //     innerKey6: "value6",
    //   },
    //   middleKey4: {
    //     innerKey7: "value7",
    //     innerKey8: "value8",
    //   },
    // },
    // Menu: {
    //   Menu: {
    //     costumeComponent: "Menu",
    //   },
    //   Footer: {
    //     costumeComponent: "Footer",
    //   },
    // },
  };
  const details = sectionsMenuDetails[activeTab];
  const detailKeys = details && Object?.keys(details);

  const thirdMenu = details[nestedData]
    ? details[nestedData]
    : details[Object.keys(details)[0]];


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
        className={`bg-white text-black fixed left-[65px] z-20 top-[65px] bottom-0 shadow-md`}
      >
        <div className="flex justify-between border-t-8 border-sky-600 sm:text-lg font-semibold py-3 px-4 border-b-2 border-b-[#dfe5eb]">
          {getTitle()}
          <IoClose onClick={() => setActiveTab(null)} width={24} height={24} className="w-6 h-6" />
        </div>
        <div className="flex flex-col sm:flex-row h-full">
          <div className="grid grid-cols-3 sm:flex sm:h-full flex-col relative bg-[#f7f8f8] align-top min-w-[125px] sm:max-w-[186px] border-r border-[#dfe5eb]">
            {detailKeys?.map((key) => (
              <span
                key={key}
                onClick={() => setNestedData(key)}
                className={
                  "text-sm min-h-[30px] p-3 content-center text-center sm:text-start " +
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
                        className="text-sm min-h-[30px] sm:max-w-[200px]"
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
                        className="text-sm min-h-[30px] min-w-[125px] max-w-[200px] p-4"
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
                    className=" flex items-center justify-between font-medium text-sm min-h-[30px] min-w-[150px] py-2 px-3 pr-1"
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
