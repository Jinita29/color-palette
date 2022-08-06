import { useState, useEffect, useLayoutEffect } from "react";
import CopyBox from "../components/common/shared/CopyBox";
import { SketchPicker, SliderPicker,SwatchesPicker } from 'react-color';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

var tinycolor = require("tinycolor2");

const Home = () => {
    const [isCopied, setIsCopied] = useState({ copyValue: false, copyIndex: 5 });
    const [tinyColor, setTinyColor] = useState([]);
    const lightenValue = [1, 5, 10, 15, 20, 25, 30, 35, 40];

    const [colorArr, setColorArr] = useState({
        primary: ['#001452'],
        secondary: ['#E6680B'],
        success: ['#239006'],
        info: ['#38A6D1'],
        warning: ['#FFAB2A'],
        danger: ['#E11A1A']
    });
    const [chooseColor, setChooseColor] = useState({
        primary: '#001452',
        secondary: '#E6680B',
        success: '#239006',
        info: '#38A6D1',
        warning: '#FFAB2A',
        danger: '#E11A1A',
    })

    const handleCopyBtn = (index, value) => {
        setIsCopied({ copyValue: value, copyIndex: index });
    }

    useEffect(()=>{
        const primaryData = lightenValue?.map((value, index)=>{return tinycolor(chooseColor?.primary).lighten(value).toString()});
        const secondaryData = lightenValue?.map((value, index)=>{return tinycolor(chooseColor?.secondary).lighten(value).toString()});
        const successData = lightenValue?.map((value, index)=>{return tinycolor(chooseColor?.success).lighten(value).toString()});
        const infoData = lightenValue?.map((value, index)=>{return tinycolor(chooseColor?.info).lighten(value).toString()});
        const warningData = lightenValue?.map((value, index)=>{return tinycolor(chooseColor?.warning).lighten(value).toString()});
        const dangerData = lightenValue?.map((value, index)=>{return tinycolor(chooseColor?.danger).lighten(value).toString()});

        setColorArr({
            primary: primaryData,
            secondary: secondaryData,
            success: successData,
            info: infoData,
            warning: warningData,
            danger: dangerData,
        })

    },[chooseColor])

    return (
        <>
            <div className={'flex -mx-4'}>
                <div className={'grid grid-cols-2 gap-x-3 px-4'}>
                    <div className={'grid grid-cols-1 gap-x-3'}>
                        <h6>primary</h6>
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
                        >
                            <div className={'flex items-center bg-white p-2 min-w-[200px] mb-5 mt-2'}>
                                <div className={'flex items-center pr-2 border-r border-[#969696]'} >
                                    <button style={{backgroundColor: chooseColor?.primary}} className={`w-8 h-8`}></button>
                                </div>
                                <p className={'ml-2 text-sm leading-[29px] text-black bg-opacity-20 px-2 border-b-[3px] border-b-black'}>{chooseColor?.primary}</p>
                            </div>
                        </Tippy>

                    </div>
                    <div className={'grid grid-cols-1 gap-x-3'}>
                        <h6>secondary</h6>
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
                        >
                            <div className={'flex items-center bg-white p-2 min-w-[200px] mb-5 mt-2'}>
                                <div className={'flex items-center pr-2 border-r border-[#969696]'} >
                                    <button style={{backgroundColor: chooseColor?.secondary}} className={`w-8 h-8`}></button>
                                </div>
                                <p className={'ml-2 text-sm leading-[29px] text-black bg-opacity-20 px-2 border-b-[3px] border-b-black'}>{chooseColor?.secondary}</p>
                            </div>
                        </Tippy>
                    </div>
                </div>
                <div className={'grid grid-cols-4 flex-auto gap-x-3 px-4'}>
                    <div className={'grid grid-cols-1 gap-x-3'}>
                        <h6>success</h6>
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
                        >
                            <div className={'flex items-center bg-white p-2 min-w-[200px] mb-5 mt-2'}>
                                <div className={'flex items-center pr-2 border-r border-[#969696]'} >
                                    <button style={{backgroundColor: chooseColor?.success}} className={`w-8 h-8`}></button>
                                </div>
                                <p className={'ml-2 text-sm leading-[29px] text-black bg-opacity-20 px-2 border-b-[3px] border-b-black'}>{chooseColor?.success}</p>
                            </div>
                        </Tippy>
                    </div>
                    <div className={'grid grid-cols-1 gap-x-3'}>
                        <h6>info</h6>
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
                        >
                            <div className={'flex items-center bg-white p-2 min-w-[200px] mb-5 mt-2'}>
                                <div className={'flex items-center pr-2 border-r border-[#969696]'} >
                                    <button style={{backgroundColor: chooseColor?.info}} className={`w-8 h-8`}></button>
                                </div>
                                <p className={'ml-2 text-sm leading-[29px] text-black bg-opacity-20 px-2 border-b-[3px] border-b-black'}>{chooseColor?.info}</p>
                            </div>
                        </Tippy>
                    </div>
                    <div className={'grid grid-cols-1 gap-x-3'}>
                        <h6>warning</h6>
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
                        >
                            <div className={'flex items-center bg-white p-2 min-w-[200px] mb-5 mt-2'}>
                                <div className={'flex items-center pr-2 border-r border-[#969696]'} >
                                    <button style={{backgroundColor: chooseColor?.warning}} className={`w-8 h-8`}></button>
                                </div>
                                <p className={'ml-2 text-sm leading-[29px] text-black bg-opacity-20 px-2 border-b-[3px] border-b-black'}>{chooseColor?.warning}</p>
                            </div>
                        </Tippy>
                    </div>
                    <div className={'grid grid-cols-1 gap-x-3'}>
                        <h6>danger</h6>
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
                        >
                            <div className={'flex items-center bg-white p-2 min-w-[200px] mb-5 mt-2'}>
                                <div className={'flex items-center pr-2 border-r border-[#969696]'} >
                                    <button style={{backgroundColor: chooseColor?.danger}} className={`w-8 h-8`}></button>
                                </div>
                                <p className={'ml-2 text-sm leading-[29px] text-black bg-opacity-20 px-2 border-b-[3px] border-b-black'}>{chooseColor?.danger}</p>
                            </div>
                        </Tippy>
                    </div>
                </div>
            </div>

            <div className={'flex -mx-4'}>
                <div className={'grid grid-cols-2 gap-x-3 px-4'}>
                    <div className={'grid grid-cols-1 gap-x-3'}>
                        {colorArr?.primary && colorArr?.primary?.map((color, index) => {
                            return (<div key={index} className={'relative w-full group cursor-pointer'}>
                                <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                    {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                            </div>)
                        })}
                    </div>
                    <div className={'grid grid-cols-1 gap-x-3'}>
                        {colorArr?.secondary?.map((color, index) => {
                            return (<div key={index} className={'relative w-full group cursor-pointer'}>
                                <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                            </div>
                            )
                        })}
                    </div>
                </div>
                <div className={'grid grid-cols-4 flex-auto gap-x-3 px-4'}>
                    <div className={'grid grid-cols-1 gap-x-3'}>
                        {colorArr?.success?.map((color, index) => {
                            return ( <div key={index} className={'relative w-full group cursor-pointer'}>
                                <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                    {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                                </div>
                            )
                        })}
                    </div>
                    <div className={'grid grid-cols-1 gap-x-3'}>
                        {colorArr?.info?.map((color, index) => {
                            return ( <div key={index} className={'relative w-full group cursor-pointer'}>
                                    <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                    {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                                </div>
                            )
                        })}
                    </div>
                    <div className={'grid grid-cols-1 gap-x-3'}>
                        {colorArr?.warning?.map((color, index) => {
                            return ( <div key={index} className={'relative w-full group cursor-pointer'}>
                                <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                    {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                                </div>
                            )
                        })}
                    </div>
                    <div className={'grid grid-cols-1 gap-x-3'}>
                        {colorArr?.danger?.map((color, index) => {
                            return ( <div key={index} className={'relative w-full group cursor-pointer'}>
                                    <CopyBox pickColor={color} copyBtn={(index, value) => handleCopyBtn(index, value)} passIndex={index}/>
                                    {isCopied?.copyValue && isCopied?.copyIndex === index && <p className={'absolute inset-0 flex items-center justify-center bg-black text-white'} >Copied</p> }
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;