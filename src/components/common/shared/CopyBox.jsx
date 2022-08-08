import {useEffect, useState} from 'react';
import { Icon } from '@iconify/react';
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const CopyBox = ({copyBtn, pickColor, passIndex}) => {
    const [visible, setVisible] = useState(false);

    const show = () => {
        setVisible(true)
        setTimeout(()=>{
            setVisible(false)
        },800)
    };
    const hide = () => setVisible(false);

    return (
        <>
            <Tippy content="Copied" placement="top" visible={visible} >
                <div className={'w-full'}>
                    <CopyToClipboard
                        style={{backgroundColor: pickColor}}
                        className={'text-[0] hover:text-base cursor-pointer min-h-[50px] w-full font-bold flex justify-center items-center'}
                        text={pickColor}
                        onCopy={(index,e) => e === true ? show() : hide()}
                    >
                        <div>{pickColor}</div>
                    </CopyToClipboard>
                </div>
            </Tippy>
        </>

    )
}

export default CopyBox;