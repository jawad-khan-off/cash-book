import { RiDeleteBinLine, RiEdit2Line, RiMore2Line, RiSearch2Line } from "@remixicon/react";
import { useState } from "react";
import { Link } from "react-router";

const Index = () => {
  const [user, setUser] = useState('Jawad Ahmad');
  // const [books, setBooks] = useState([]);
  return (
    <section className="h-screen w-full">
      <div className="header">
        <div className="h-12 w-full flex items-center justify-between px-4 border-b border-border">
          <div className="flex items-center gap-2">
            <h1>{user}</h1>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-4">
          <p>Your Book</p>
          <span><RiSearch2Line /></span>
        </div>
      </div>
      <div className="mt-4 px-4 py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="book flex items-center gap-4">
          <div className="p-2 bg-gray-200 rounded-full">
            <img src="/img/docs.png" className="w-6" alt="google_docs" />
          </div>
          <div className="flex items-center justify-between w-full border-b border-border h-14">
            <div className="flex items-center justify-between w-full">
              <div className=""><h1>Book Name</h1> <p className="leading-1 text-xs">updated at</p></div>
              <div className=" flex items-center gap-2">
                <span>0</span>
                <RiMore2Line/>
              </div>
            </div>
          </div>
        </div>
        <div className="book flex items-center gap-4">
          <div className="p-2 bg-gray-200 rounded-full">
            <img src="/img/docs.png" className="w-6" alt="google_docs" />
          </div>
          <div className="flex items-center justify-between w-full border-b border-border h-14">
            <div className="flex items-center justify-between w-full">
              <div className=""><h1>Book Name</h1> <p className="leading-1 text-xs">updated at</p></div>
              <div className=" flex items-center gap-2">
                <span>0</span>
                <RiMore2Line/>
              </div>
            </div>
          </div>
        </div>
        <div className="book flex items-center gap-4">
          <div className="p-2 bg-gray-200 rounded-full">
            <img src="/img/docs.png" className="w-6" alt="google_docs" />
          </div>
          <div className="flex items-center justify-between w-full border-b border-border h-14">
            <div className="flex items-center justify-between w-full">
              <div className=""><h1>Book Name</h1> <p className="leading-1 text-xs">updated at</p></div>
              <div className=" flex items-center gap-2">
                <span>0</span>
                <RiMore2Line/>
              </div>
            </div>
          </div>
        </div>
        <div className="book flex items-center gap-4">
          <div className="p-2 bg-gray-200 rounded-full">
            <img src="/img/docs.png" className="w-6" alt="google_docs" />
          </div>
          <div className="flex items-center justify-between w-full border-b border-border h-14">
            <div className="flex items-center justify-between w-full">
              <div className=""><h1>Book Name</h1> <p className="leading-1 text-xs">updated at</p></div>
              <div className=" flex items-center gap-2">
                <span>0</span>
                <RiMore2Line/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index