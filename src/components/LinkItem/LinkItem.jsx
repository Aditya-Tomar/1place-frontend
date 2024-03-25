import { useState } from 'react';
import { updateItemData } from '../../utils/index';
import './styles.css';

function LinkItem(props){

    const [itemValue, setItemValue] = useState(props.data.itemValue);
    const [itemLink, setItemLink] = useState(props.data.itemLink);

    const sendData = () => {
        updateItemData( { id: props.data.id, itemValue, itemLink });
    }


        return (
            <div className="main-wrapper" 
                { ...props.draggableProps} 
                {...props.style}
                ref={props.refer}
            >
                <div className="drag-wrapper" 
                    {...props.dragHandleProps}
                >
                    <span className="icon-drag_indicator"></span>
                </div>
                <div className="item-wrapper">
                    <input className="item" 
                        value={itemValue} 
                        placeholder={props.data.itemValuePlaceholder}
                        onChange={(e) => setItemValue(e.target.value)}
                    />
                    <input className="item item-link font-size-16"  
                        value={itemLink}
                        placeholder={props.data.itemValuePlaceholder}
                        onChange={(e) => setItemLink(e.target.value)}
                    />
                </div>
                <div className="item-icon-wrapper">
                    <span className="icon-floppy-disk" onClick={sendData}></span>
                    <span className="icon-bin2"  style={{color: 'red'}}></span>
                </div>
            </div>
        );
}

export default LinkItem;