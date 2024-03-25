import React from 'react';

function LinkItemList (props) {
    console.log('props', props.children)
    if(props.data && props.data.length){
       return React.cloneElement( props.children, { data: props.data });
    }

}

export default LinkItemList;