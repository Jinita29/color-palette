import {useRef, useState} from "react";
import CopyButton from "../components/common/shared/CopyButton";
import CopyBox from "../components/common/shared/CopyBox";
import ReactTooltip from "react-tooltip";

const Home = () => {
    const [copyData, setCopyData] = useState('');
    const [isCopied, setIsCopied] = useState({
        copyValue: false,
        copyIndex: 5
    });
    const colorArr = ['#086ec8', '#6bc808', '#e500db', '#dc6505', '#d5000b'];
    const handleCopyBtn = (index, value) => {
        const CopyDataValue = document.getElementById('Copy-Data');
        setIsCopied({
            copyValue: value,
            copyIndex: index
        });
        setCopyData(CopyDataValue.value)
    }
    const tooltipEl = useRef(null);

    return (
        <>
            <h2 className={'dark:text-light'}>Pick your favourite color</h2>
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

            <div className={'bg-light dark:bg-dark shadow p-4 rounded-xl w-1/2'}>
                <div className={'flex justify-between items-center text-dark dark:text-light border-b border-[#f1f1f1] pb-3 mb-3'}>
                    <h5>Copy Text</h5>
                    <CopyButton copyText={copyData} copyBtn={(e) => handleCopyBtn(e)} />
                </div>
                <div>
                    <textarea className={'w-full min-h-[200px] text-light dark:text-dark bg-dark dark:bg-light focus:outline-0'} id={'Copy-Data'} defaultValue={'<p>Hello</p>'} onChange={(event) => {
                        setIsCopied(false);
                        setCopyData(event.target.value)
                    }}>

                    </textarea>
                </div>
                <p>{isCopied ? 'Copied' : 'Copy'}</p>
            </div>
        </>
    )
}

export default Home;