import { useState, useEffect, useLayoutEffect } from "react";
import CopyBox from "../components/common/shared/CopyBox";
import { SketchPicker, SliderPicker,SwatchesPicker } from 'react-color';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

var tinycolor = require("tinycolor2");

const Home = () => {
    const [isCopied, setIsCopied] = useState({ copyValue: false, copyIndex: 5 });
    const [tinyColor, setTinyColor] = useState([]);
    const lightenValue =[30, 25, 20, 8, 0];
    const darkenValue = [8, 20, 25, 30];

    const [colorArr, setColorArr] = useState({
        primary: [],
        secondary: ['#97255e'],
        success: ['#5c9a00'],
        info: ['#348097'],
        warning: ['#c1c00a'],
        danger: ['#B7371D']
    });
    const [chooseColor, setChooseColor] = useState({
        primary: '#3366FF',
        secondary: '#97255e',
        success: '#5c9a00',
        info: '#348097',
        warning: '#c1c00a',
        danger: '#B7371D',
    })

    const handleCopyBtn = (index, value) => {
        // setIsCopied({ copyValue: value, copyIndex: index });
    }

    useEffect(()=>{
        const primaryData = lightenValue?.map((value, index)=>{return tinycolor(chooseColor?.primary).lighten(value).toString()});
        const secondaryData = lightenValue?.map((value, index)=>{return tinycolor(chooseColor?.secondary).lighten(value).brighten(value).toString()});
        const successData = lightenValue?.map((value, index)=>{return tinycolor(chooseColor?.success).lighten(value).brighten(value).toString()});
        const infoData = lightenValue?.map((value, index)=>{return tinycolor(chooseColor?.info).lighten(value).brighten(value).toString()});
        const warningData = lightenValue?.map((value, index)=>{return tinycolor(chooseColor?.warning).lighten(value).brighten(value).toString()});
        const dangerData = lightenValue?.map((value, index)=>{return tinycolor(chooseColor?.danger).lighten(value).brighten(value).toString()});

        const primaryDarkData = darkenValue?.map((value, index)=>{return tinycolor(chooseColor?.primary).darken(value).toString()});
        const secondaryDarkData = darkenValue?.map((value, index)=>{return tinycolor(chooseColor?.secondary).darken(value).toString()});
        const successDarkData = darkenValue?.map((value, index)=>{return tinycolor(chooseColor?.success).darken(value).toString()});
        const infoDarkData = darkenValue?.map((value, index)=>{return tinycolor(chooseColor?.info).darken(value).toString()});
        const warningDarkData = darkenValue?.map((value, index)=>{return tinycolor(chooseColor?.warning).darken(value).toString()});
        const dangerDarkData = darkenValue?.map((value, index)=>{return tinycolor(chooseColor?.danger).darken(value).toString()});

        setColorArr({
            primary: primaryData.concat(primaryDarkData),
            secondary: secondaryData.concat(secondaryDarkData),
            success: successData.concat(successDarkData),
            info: infoData.concat(infoDarkData),
            warning: warningData.concat(warningDarkData),
            danger: dangerData.concat(dangerDarkData),
        })
    },[chooseColor])

    return (
        <>
            <div className={'flex -mx-4'}>
                <div className={'w-[30%] flex gap-x-3 px-4 border-r-2 py-3 border-[#cccccc80]'}>
                    <div className={'w-1/2 grid grid-cols-1 gap-x-3 color-lists rounded-md overflow-hidden'}>
                        <h6 className={'capitalize font-bold text-sm opacity-60'}>primary</h6>
                        <Tippy
                            content={
                                <SketchPicker
                                    color={chooseColor?.primary}
                                    onChangeComplete={(pColor)=>setChooseColor({...chooseColor, primary: pColor.hex})}
                                    onChange={(pColor)=>setChooseColor({...chooseColor, primary: pColor.hex})}
                                />
                            }
                            trigger={'click'}
                            interactive={true}
                            placement="left-start"
                        >
                            <button className={'flex items-center bg-[#dadada] dark:bg-dark p-2 rounded-md mb-6 mt-3'}>
                                <div className={'flex items-center pr-2 border-r-2 border-[#ccc]'} >
                                    <div style={{backgroundColor: chooseColor?.primary}} className={`w-8 h-8 rounded-md`}></div>
                                </div>
                                <p className={'ml-2 text-sm leading-[29px] text-black dark:text-light font-[600] bg-opacity-20 text-base pr-3'}>{chooseColor?.primary}</p>
                            </button>
                        </Tippy>
                        <div className={'grid grid-cols-1 gap-x-3 color-lists rounded-md overflow-hidden'}>
                            {colorArr?.primary && colorArr?.primary?.map((color, index) => {
                                return (<div key={index} className={'list relative w-full group cursor-pointer'}>
                                    <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                    {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                                </div>)
                            })}
                        </div>
                    </div>
                    <div className={'w-1/2 grid grid-cols-1 gap-x-3 color-lists rounded-md overflow-hidden'}>
                        <h6 className={'capitalize font-bold text-sm opacity-60'}>secondary</h6>
                        <Tippy
                            content={
                                <SketchPicker
                                    color={chooseColor?.secondary}
                                    onChangeComplete={(pColor)=>setChooseColor({...chooseColor, secondary: pColor.hex})}
                                    onChange={(pColor)=>setChooseColor({...chooseColor, secondary: pColor.hex})}
                                />
                            }
                            trigger={'click'}
                            interactive={true}
                            placement="left-start"
                        >
                            <button className={'flex items-center bg-[#dadada] dark:bg-dark p-2 rounded-md mb-6 mt-3'}>
                                <div className={'flex items-center pr-2 border-r-2 border-[#ccc]'} >
                                    <div style={{backgroundColor: chooseColor?.secondary}} className={`w-8 h-8 rounded-md`}></div>
                                </div>
                                <p className={'ml-2 text-sm leading-[29px] text-black dark:text-light font-[600] bg-opacity-20 text-base pr-3'}>{chooseColor?.secondary}</p>
                            </button>
                        </Tippy>
                        <div className={'grid grid-cols-1 gap-x-3 color-lists rounded-md overflow-hidden'}>
                            {colorArr?.secondary?.map((color, index) => {
                                return (<div key={index} className={'list relative w-full group cursor-pointer'}>
                                        <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                        {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className={'w-[70%] grid grid-cols-4 flex-auto gap-x-3 py-3 px-4'}>
                    <div className={'grid grid-cols-1 gap-x-3 color-lists rounded-md overflow-hidden'}>
                        <h6 className={'capitalize font-bold text-sm opacity-60'}>success</h6>
                        <Tippy
                            content={
                                <SketchPicker
                                    color={chooseColor?.success}
                                    onChangeComplete={(pColor)=>setChooseColor({...chooseColor, success: pColor.hex})}
                                    onChange={(pColor)=>setChooseColor({...chooseColor, success: pColor.hex})}
                                />
                            }
                            trigger={'click'}
                            interactive={true}
                            placement="left-start"
                        >
                            <button className={'flex items-center bg-[#dadada] dark:bg-dark p-2 rounded-md mb-6 mt-3'}>
                                <div className={'flex items-center pr-2 border-r-2 border-[#ccc]'} >
                                    <div style={{backgroundColor: chooseColor?.success}} className={`w-8 h-8 rounded-md`}></div>
                                </div>
                                <p className={'ml-2 text-sm leading-[29px] text-black dark:text-light font-[600] bg-opacity-20 text-base pr-3'}>{chooseColor?.success}</p>
                            </button>
                        </Tippy>
                        <div className={'grid grid-cols-1 gap-x-3 color-lists rounded-md overflow-hidden'}>
                            {colorArr?.success?.map((color, index) => {
                                return ( <div key={index} className={'list relative w-full group cursor-pointer'}>
                                        <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                        {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={'grid grid-cols-1 gap-x-3 color-lists rounded-md overflow-hidden'}>
                        <h6 className={'capitalize font-bold text-sm opacity-60'}>info</h6>
                        <Tippy
                            content={
                                <SketchPicker
                                    color={chooseColor?.info}
                                    onChangeComplete={(pColor)=>setChooseColor({...chooseColor, info: pColor.hex})}
                                    onChange={(pColor)=>setChooseColor({...chooseColor, info: pColor.hex})}
                                />
                            }
                            trigger={'click'}
                            interactive={true}
                            placement="left-start"
                        >
                            <button className={'flex items-center bg-[#dadada] dark:bg-dark p-2 rounded-md mb-6 mt-3'}>
                                <div className={'flex items-center pr-2 border-r-2 border-[#ccc]'} >
                                    <div style={{backgroundColor: chooseColor?.info}} className={`w-8 h-8 rounded-md`}></div>
                                </div>
                                <p className={'ml-2 text-sm leading-[29px] text-black dark:text-light font-[600] bg-opacity-20 text-base pr-3'}>{chooseColor?.info}</p>
                            </button>
                        </Tippy>
                        <div className={'grid grid-cols-1 gap-x-3 color-lists rounded-md overflow-hidden'}>
                            {colorArr?.info?.map((color, index) => {
                                return ( <div key={index} className={'list relative w-full group cursor-pointer'}>
                                        <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                        {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={'grid grid-cols-1 gap-x-3 color-lists rounded-md overflow-hidden'}>
                        <h6 className={'capitalize font-bold text-sm opacity-60'}>warning</h6>
                        <Tippy
                            content={
                                <SketchPicker
                                    color={chooseColor?.warning}
                                    onChangeComplete={(pColor)=>setChooseColor({...chooseColor, warning: pColor.hex})}
                                    onChange={(pColor)=>setChooseColor({...chooseColor, warning: pColor.hex})}
                                />
                            }
                            trigger={'click'}
                            interactive={true}
                            placement="left-start"
                        >
                            <button className={'flex items-center bg-[#dadada] dark:bg-dark p-2 rounded-md mb-6 mt-3'}>
                                <div className={'flex items-center pr-2 border-r-2 border-[#ccc]'} >
                                    <div style={{backgroundColor: chooseColor?.warning}} className={`w-8 h-8 rounded-md`}></div>
                                </div>
                                <p className={'ml-2 text-sm leading-[29px] text-black dark:text-light font-[600] bg-opacity-20 text-base pr-3'}>{chooseColor?.warning}</p>
                            </button>
                        </Tippy>
                        <div className={'grid grid-cols-1 gap-x-3 color-lists rounded-md overflow-hidden'}>
                            {colorArr?.warning?.map((color, index) => {
                                return ( <div key={index} className={'list relative w-full group cursor-pointer'}>
                                        <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                        {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={'grid grid-cols-1 gap-x-3 color-lists rounded-md overflow-hidden'}>
                        <h6 className={'capitalize font-bold text-sm opacity-60'}>danger</h6>
                        <Tippy
                            content={
                                <SketchPicker
                                    color={chooseColor?.danger}
                                    onChangeComplete={(pColor)=>setChooseColor({...chooseColor, danger: pColor.hex})}
                                    onChange={(pColor)=>setChooseColor({...chooseColor, danger: pColor.hex})}
                                />
                            }
                            trigger={'click'}
                            interactive={true}
                            placement="left-start"
                        >
                            <button className={'flex items-center bg-[#dadada] dark:bg-dark p-2 rounded-md mb-6 mt-3'}>
                                <div className={'flex items-center pr-2 border-r-2 border-[#ccc]'} >
                                    <div style={{backgroundColor: chooseColor?.danger}} className={`w-8 h-8 rounded-md`}></div>
                                </div>
                                <p className={'ml-2 text-sm leading-[29px] text-black dark:text-light font-[600] bg-opacity-20 text-base pr-3'}>{chooseColor?.danger}</p>
                            </button>
                        </Tippy>
                        <div className={'grid grid-cols-1 gap-x-3 color-lists rounded-md overflow-hidden'}>
                            {colorArr?.danger?.map((color, index) => {
                                return ( <div key={index} className={'list relative w-full group cursor-pointer'}>
                                        <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                        {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;