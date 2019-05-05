import React from 'react';
import { ReactComponent as IconBattery } from "../img/icon-battery.svg";
import { ReactComponent as IconBin } from "../img/icon-bin.svg";
import { ReactComponent as IconBreak } from "../img/icon-break.svg";
import { ReactComponent as IconChampagne } from "../img/icon-champagne.svg";
import { ReactComponent as IconCleaner } from "../img/icon-cleaner.svg";
import { ReactComponent as IconDocuments } from "../img/icon-documents.svg";
import { ReactComponent as IconOilSpill } from "../img/icon-oil-spill.svg";
const Icon = props => {
  switch(props.name) {
    case "cardboard":
      return <IconBreak {...props} />;
    case "electronic":
      return <IconBattery {...props} />;
    case "glass":
      return <IconChampagne {...props} />;
    case "metal":
      return <IconOilSpill {...props} />;
    case "paper":
      return <IconDocuments {...props} />;
    case "plastic":
      return <IconBin {...props} />;
    case "other":
      return <IconCleaner {...props} />;
    default:
      return <div />;
  }
}
export default Icon;
