import { Icon } from '@iconify/react';
import {CopyToClipboard} from "react-copy-to-clipboard/src";

const CopyBox = ({copyBtn, pickColor, passIndex}) => {
    return (
            <CopyToClipboard style={{backgroundColor: pickColor}}  className={'text-base cursor-pointer min-w-[200px] min-h-[50px] w-full'} text={pickColor} onCopy={(index,e) => copyBtn(passIndex,{copied: true})}>
                <button>{pickColor}</button>
            </CopyToClipboard>
    )
}

export default CopyBox;