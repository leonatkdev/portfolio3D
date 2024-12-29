import { useState, useEffect } from "react";

import { HiOutlineTrash } from "react-icons/hi2";
import { TbEdit } from "react-icons/tb";

import InputField from "../atoms/inputField";

import Modal from "../molecules/Modal";
import Pagination from "../atoms/pagination";
import Table from "../molecules/Table";

const PageUsers = ({ title = "authors", api = "authors" }) => {
  const [modal, setModal] = useState(false);

  const [deleteModal, setDeleteModal] = useState(false);

  const [data, setData] = useState([]);

  console.log('api', api)
  console.log('api === "authors"', api === "authors")

  useEffect(() => {
    fetch(
      api === "authors"
        ? `https://portfolio3d-c4gq.onrender.com/api/authors`
        : `https://portfolio3d-c4gq.onrender.com/api/auth/${api}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [api]);

  const columns = [
    { key: "username", header: "Username" },
    { key: "role", header: "Role" },
    { key: "tools", header: "Tools" },
  ];

  const authorColumns = [
    { key: "name", header: "Name" },
    { key: "tools", header: "Tools" },
  ];

  const addAuthor = async () => {
    try {
      fetch(`https://portfolio3d-c4gq.onrender.com/api/auth/${api}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "test",
          file: "test",
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log("data", data);

  return (
    <>
      <div className="p-4 pt-0">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">{title}</h1>
          <button
            onClick={() => setModal(true)}
            class=" block m-3 mr-6 ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Add {title}
          </button>
        </div>

        <div className=" flex gap-3 border border-[#F0F3F5] p-4 bg-white rounded-lg">
          <InputField label={`Search for ${title}`} placeholder="Search" />
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 mt-0">
        <Table
          data={data}
          columns={api === "authors" ? authorColumns : columns}
          tools={[
            <HiOutlineTrash
              color="#6B7380"
              className="h-6 w-6"
              onClick={() => setDeleteModal(true)}
            />,
            <TbEdit color="#6B7380" className="h-6 w-6" />,
          ]}
        />
      </div>

      <Pagination items={data?.users} itemsPerPage={10} />

      {modal && (
        <Modal modal={modal} setModal={setModal} onConfirm={addAuthor}>
          <form
            method="post"
            encType="multipart/form-data"
            action="/upload"
            className="flex flex-col mt-3"
          >
            <label>Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Author Name"
              className="p-2 rounded-md bg-white border border-[gray]"
            />
            <input type="file" name="file" className="mt-3" />
          </form>
        </Modal>
      )}

      {deleteModal && (
        <Modal
          modal={deleteModal}
          setModal={setDeleteModal}
          title="Delete account"
          desc="Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
        ></Modal>
      )}
    </>
  );
};

export default PageUsers;
