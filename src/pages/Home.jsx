import { useState, useEffect, useLayoutEffect } from "react";
import CopyBox from "../components/common/shared/CopyBox";
import { SketchPicker, SliderPicker,SwatchesPicker } from 'react-color';

var tinycolor = require("tinycolor2");

const Home = () => {
    const [isCopied, setIsCopied] = useState({ copyValue: false, copyIndex: 5 });
    const [primaryColor, setPrimaryColor] = useState('#6bc808');
    const [tinyColor, setTinyColor] = useState([])
    const [colorArr, setColorArr] = useState(['#6bc808', '#6bc800']);
    const [tinyPrimdaryClr, setTinyPrimaryClr] = useState([]);

    const lightenValue = [0, 5, 10, 15, 20, 25, 30, 35, 40];
    const darkenValue = [25, 30, 35, 40, 45];

    const handleCopyBtn = (index, value) => {
        setIsCopied({ copyValue: value, copyIndex: index });
    }

    const handlePrimaryColorChange = (pColor: any) => {
        setPrimaryColor(pColor.hex)
        console.log("pColor",pColor)
    }

    useLayoutEffect(()=>{
        const colorGenerate = tinycolor(primaryColor);
        setTinyPrimaryClr(colorGenerate)
    },[primaryColor])

    useEffect(()=>{
        // console.log("tinyPrimdaryClr", tinyPrimdaryClr?.isLight())
        const lightenData = lightenValue?.map((value, index)=>{return tinycolor(primaryColor).lighten(value).toString()});
        // const darkenData = lightenValue?.map((value, index)=>{return tinycolor(primaryColor).darken(value).toString()});
        // const finalData = lightenData.concat(darkenData);

        const colors = tinycolor('#f00').splitcomplement();
        const newColor = colors.map(function(t) { return t.toHexString(); });
        console.log("tysatsta", newColor)

        setColorArr(lightenData)
        // console.log("tinyColor",lightenData)

    },[primaryColor])

    const fetchData = () => {
        // const newArr = [colors1, colors2, colors3, colors4, colors5, colors6, colors7, colors8, colors9, colors10, colors11]
        // setColorArr(colorArr.concat(newArr))
        // console.log("tinyColor",tinyColor)
    }

    return (
        <>
            <button onClick={() => fetchData()} className={'bg-white text-black py-3 px-5'} >Fetch</button>
            <h2 className={'dark:text-light'}>Pick your favourite color {primaryColor} </h2>
            <div className={'flex -mx-4'}>
                <div className={'grid grid-cols-2 px-4 -mx-4'}>
                    <SketchPicker
                        color={primaryColor}
                        onChangeComplete={()=>handlePrimaryColorChange}
                        onChange={(e)=>handlePrimaryColorChange(e)}
                    />
                    <div className={'grid grid-cols-1 px-4'}>
                        {/*<p>{colorArr}</p>*/}
                        {colorArr?.map((color, index) => {
                            return (<div key={index} className={'relative w-full group cursor-pointer'}>
                                    <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                    {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                                </div>)

                        })}
                    </div>
                    <div className={'grid grid-cols-1 px-4'}>
                        {/*{colorArr?.map((color, index) => {*/}
                        {/*    return (*/}
                        {/*        <div key={index} className={'relative w-full group cursor-pointer'}>*/}
                        {/*        <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>*/}
                        {/*        {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }*/}
                        {/*    </div>*/}
                        {/*    )*/}
                        {/*})}*/}
                    </div>
                </div>
                {/*<div className={'grid grid-cols-3 flex-auto px-4 -mx-4'}>*/}
                {/*    <div className={'grid grid-cols-1 px-4'}>*/}
                {/*        {colorArr?.map((color, index) => {*/}
                {/*            return ( <div key={index} className={'relative w-full group cursor-pointer'}>*/}
                {/*                <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>*/}
                {/*                {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }*/}
                {/*            </div>)*/}
                {/*        })}*/}
                {/*    </div>*/}
                {/*    <div className={'grid grid-cols-1 px-4'}>*/}
                {/*        {colorArr?.map((color, index) => {*/}
                {/*            return ( <div key={index} className={'relative w-full group cursor-pointer'}>*/}
                {/*                <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>*/}
                {/*                {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }*/}
                {/*            </div>)*/}
                {/*        })}*/}
                {/*    </div>*/}
                {/*    <div className={'grid grid-cols-1 px-4'}>*/}
                {/*        {colorArr?.map((color, index) => {*/}
                {/*            return ( <div key={index} className={'relative w-full group cursor-pointer'}>*/}
                {/*                <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>*/}
                {/*                {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }*/}
                {/*            </div>)*/}
                {/*        })}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    )
}

export default Home;