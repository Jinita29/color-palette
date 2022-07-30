import { Icon } from '@iconify/react';
import {CopyToClipboard} from "react-copy-to-clipboard/src";

const CopyButton = ({copyBtn, copyText}) => {
  return <CopyToClipboard  className={'text-2xl cursor-pointer'} text={copyText} onCopy={() => copyBtn({copied: true})}>
      <Icon icon="fluent:copy-16-regular" />
  </CopyToClipboard>
}

export default CopyButton;