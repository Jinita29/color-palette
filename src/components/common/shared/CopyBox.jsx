import { Icon } from '@iconify/react';
import {CopyToClipboard} from "react-copy-to-clipboard/src";

const CopyBox = ({copyBtn, pickColor, passIndex}) => {
    return (
            <CopyToClipboard
                style={{backgroundColor: pickColor}}
                className={'text-[0] hover:text-base cursor-pointer min-h-[50px] w-full uppercase font-bold'}
                text={pickColor}
                onCopy={(index,e) => copyBtn(passIndex,{copied: true})}
            >
                <button>{pickColor}</button>
            </CopyToClipboard>
    )
}

export default CopyBox;