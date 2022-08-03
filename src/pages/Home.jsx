import { useState, useEffect } from "react";
import CopyBox from "../components/common/shared/CopyBox";
import { SketchPicker, SliderPicker,SwatchesPicker } from 'react-color';

var tinycolor = require("tinycolor2");

const Home = () => {
    const [isCopied, setIsCopied] = useState({ copyValue: false, copyIndex: 5 });
    const [primaryColor, setPrimaryColor] = useState('#6bc808');
    const [colorArray, setColorArray] = useState();

    const colorArr = ['#086ec8', '#6bc808', '#e500db', '#dc6505', '#d5000b'];


    const handleCopyBtn = (index, value) => {
        setIsCopied({ copyValue: value, copyIndex: index });
    }

    const handlePrimaryColorChange = (pColor: any) => {
        setPrimaryColor(pColor.hex)
        console.log("pColor",pColor)
    }

    useEffect(()=>{
        var colors = tinycolor("#f00").analogous();
        var color = tinycolor("red");
        color.getFormat();
        colors.map(function(t) { return console.log(t.toHexString()) });

        console.log("coor", color)
    },[primaryColor])



    return (
        <>
            <h2 className={'dark:text-light'}>Pick your favourite color {primaryColor} </h2>
            <div className={'text-black'}>
                <SketchPicker
                    color={primaryColor}
                    // onChangeComplete={()=>handlePrimaryColorChange}
                    onChange={(e)=>handlePrimaryColorChange(e)}
                />
                Slider Picker
                <SliderPicker
                    color={primaryColor}
                    onChange={(e)=>handlePrimaryColorChange(e)}
                />

                swatches
                <SwatchesPicker color={primaryColor} onChange={(e)=>handlePrimaryColorChange(e)} />
            </div>
            <div className={'flex -mx-4'}>
                <div className={'grid grid-cols-2 px-4 -mx-4'}>
                    <div className={'grid grid-cols-1 px-4'}>
                        {colorArr?.map((color, index) => {
                            return ( <div key={index} className={'relative w-full group cursor-pointer'}>
                                <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                            </div>)
                        })}
                    </div>
                    <div className={'grid grid-cols-1 px-4'}>
                        {colorArr?.map((color, index) => {
                            return ( <div key={index} className={'relative w-full group cursor-pointer'}>
                                <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                            </div>)
                        })}
                    </div>
                </div>
                <div className={'grid grid-cols-3 flex-auto px-4 -mx-4'}>
                    <div className={'grid grid-cols-1 px-4'}>
                        {colorArr?.map((color, index) => {
                            return ( <div key={index} className={'relative w-full group cursor-pointer'}>
                                <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                            </div>)
                        })}
                    </div>
                    <div className={'grid grid-cols-1 px-4'}>
                        {colorArr?.map((color, index) => {
                            return ( <div key={index} className={'relative w-full group cursor-pointer'}>
                                <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                            </div>)
                        })}
                    </div>
                    <div className={'grid grid-cols-1 px-4'}>
                        {colorArr?.map((color, index) => {
                            return ( <div key={index} className={'relative w-full group cursor-pointer'}>
                                <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;