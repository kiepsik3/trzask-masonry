import React, { useState, useEffect } from "react";
import "./main-page.scss";
import { MasonryWall } from "../../components/MasonryWall/MasonryWall";
// import exportFromJSON from "export-from-json";
import { Builder, Parser } from "xml2js";

const MainPage = (props) => {
  function aa() {
    fetch("https://new.trzask.com/map2.xml")
      .then((response) => response.text())
      .then((xmlText) => {
        // Parse the XML text into a DOM object
        console.log(xmlText);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");

        // Tutaj możesz zmodyfikować xmlDoc
        const root = xmlDoc.documentElement;
        const newElement = xmlDoc.createElement("newElement");
        newElement.textContent = "New Content";
        root.appendChild(newElement);

        // Serialize the DOM object back to a string
        const serializer = new XMLSerializer();
        const updatedXML = serializer.serializeToString(xmlDoc);

        console.log(updatedXML);

        // Wyślij zaktualizowany XML z powrotem na serwer
        return fetch("https://new.trzask.com/map2.xml", {
          method: "POST",
          headers: {
            "Content-Type": "application/xml",
          },
          body: updatedXML,
        });
      })
      .then((response) => {
        if (response.ok) {
          console.log("XML file updated successfully");
        } else {
          console.error("Failed to update the XML file");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // const [xml, setXML] = useState();
  //
  // const url = props.walls
  //   .flatMap((w) => w.elements)
  //   .map((e) => {
  //     return {
  //       title: e.title || "",
  //       loc: `${window.location.href}/${e.slug}` || "",
  //     };
  //   });
  //
  // function toXML(json) {
  //   const builder = new Builder();
  //   return builder.buildObject(json);
  // }
  //
  // useEffect(() => {
  //   setXML(toXML({ urlSet: { url } }));
  // }, []);
  //
  // useEffect(() => {
  //   async function updateXML() {
  //     try {
  //       const res = await fetch("https://new.trzask.com/map2.xml", {
  //         method: "POST",
  //         body: xml,
  //         headers: {
  //           "Content-Type": "application/xml",
  //         },
  //       });
  //       if (res.ok) {
  //         console.log("ahahahaah");
  //       }
  //     } catch {
  //       throw new Error();
  //     }
  //   }
  //   updateXML();
  // }, []);

  return (
    <div className="main-page container 2xl:max-w-[1320px]">
      {/*<button onClick={aa}>dsad</button>*/}
      <h1 className="main-page-header">{props.title}</h1>
      {props.walls?.map((wall, idx) => (
        <MasonryWall data={wall.elements} set={wall.set} key={idx} />
      ))}
    </div>
  );
};

export default MainPage;
