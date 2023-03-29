"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// import a from '/a.riv'
let Component = ({ a, b }) => {
    return (
        <div className="comp">
            <div>{a}</div>
            <div>{b}</div>
        </div>
    );
};

let Page = () => {
    const imgElement = useRef(null);

    const [val, setVal] = useState(null);
    const [file, setFile] = useState(null);
    const [fileDesc, setFileDesc] = useState(null);     
    const [upload, setUpload] = useState(false);

    // let handler = async () => {
    //     let t = await fetch("http://localhost:5000/content").then((res) =>
    //         res.json()
    //     );
    //     setVal(t);
    // };
    // useEffect(() => {
    //     handler();
        
    // }, []);
    return (
        <>
            {/* <div className="par">
                {val && val.map((i) => {
                    return <Component a={i.a} b={i.b} />;
                })}
            </div> */}
            <div>
                <input type="text" name="" id="" placeholder="item name" />
                <input
                    type="file"
                    name=""
                    id=""
                    placeholder="select file"
                    onChange={(e) => {

                        let t = e.target.files[0];

                        setFile(t)
                        setUpload(false);
                    }}
                />
                <button
                    onClick={() => {
                        console.log("uploaded");
                        setUpload(true);
                    }}
                >
                    Upload
                </button>
                {file && upload && <img
                    src={URL.createObjectURL(file)}
                    onLoad={() => {   
                        setFileDesc({
                            h:Math.floor((200/imgElement.current.naturalWidth)*imgElement.current.naturalHeight),
                            w:200
                        })                     
                    }}
                    ref={imgElement}
                    height={fileDesc?.h}
                    width={fileDesc?.w}
                />}
            </div>
        </>
    );
};
export default Page;
