import React, { useEffect, useState } from "react";
import ItemSlider from "../Slider/ItemSlider";

function RowItem({ DataRow, title }) {
  return (
    <div>
      {" "}
      <section className="h-max w-[90%] mx-auto my-14">
        <h1 className="text-3xl font-bold border-b-2 border-color-red w-max mb-8 ">
          {title}
        </h1>
        <ItemSlider data={DataRow} />
      </section>
    </div>
  );
}

export default RowItem;
