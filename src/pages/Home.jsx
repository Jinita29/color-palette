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

        //use isLight, isDark, isValid, getFormat, getOriginalInput

        // Get different color code based on dark and light color using darken and lighten or both
            var colors1 = tinycolor("red").darken(0).toString();
        var colors2 = tinycolor("red").darken(10).toString();
        var colors3 = tinycolor("red").darken(20).toString();
        var colors4 = tinycolor("red").darken(30).toString();
        var colors5 = tinycolor("red").darken(40).toString();
        var colors6 = tinycolor("red").darken(50).toString();
        var colors7 = tinycolor("red").darken(60).toString();
        var colors8 = tinycolor("red").darken(70).toString();
        var colors9 = tinycolor("red").darken(80).toString();
        var colors10 = tinycolor("red").darken(90).toString();
        var colors11= tinycolor("red").darken(100).toString();
        var color = tinycolor("red");
        color.getFormat();
        // colors.map(function(t) { return console.log(t.toHexString()) });

        console.log("colors1", colors1)
        console.log("colors2", colors2)
        console.log("colors3", colors3)
        console.log("colors4", colors4)
        console.log("colors5", colors5)
        console.log("colors6", colors6)
        console.log("colors7", colors7)
        console.log("colors8", colors8)
        console.log("colors9", colors9)
        console.log("colors10", colors10)
        console.log("colors11", colors11)

        var isLight = tinycolor("#fff");
        isLight.isLight();

        console.log("isLight", isLight.isLight())


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