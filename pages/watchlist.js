import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout";
import WatchListCart from "@/components/Cart/WatchListCart";
import {
  doc,
  updateDoc,
  deleteField,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { UserAuth } from "@/context/Auth.context";
import Link from "next/link";
import { useRouter } from "next/router";

function WatchList() {
  const rotuer = useRouter();

  const { user } = UserAuth({});

  const [watchListData, setWatchListData] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setWatchListData(doc.data()?.saveShow);
    });
  }, [user?.email]);

  console.log(watchListData)

  // item delete from watch List
  const ItemId = doc(db, "users", `${user?.email}`);

  const deleteHandler = async (id) => {
    const itemer = watchListData.filter(deleteitem => deleteitem.id !== id)
    if (user?.email) {
      await updateDoc(ItemId, {
        saveShow: itemer,
      });
    };
  }
  return (
    <Layout>
      <section className=" w-[100%] h-[110vh] flex justify-center items-center">
        <div className=" w-[80%] h-[80vh] rounded flex gap-5">
          {watchListData.length !== 0 ? (
            <WatchListCart data={watchListData} deleteItem={deleteHandler} />
          ) : (
            <div className="flex flex-col gap-5 justify-center items-center w-full">
              <h1 className="text-2xl font-bold text-center w-full">
                Please select item!!!
              </h1>
              <Link href="/" className="bg-color-red px-5 py-2 rounded-md">
                Back to Show
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default WatchList;
