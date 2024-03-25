import React, { Component } from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import StrictModeDroppable from'../StrictDropable';
// fake data generator
// const getItems = count =>
//   Array.from({ length: count }, (v, k) => k).map(k => ({
//     id: `item-${k}`,
//     content: `item ${k}`
//   }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "white",
  padding: grid,
  width: '100%',
  display: 'flex',
  gap: '15px',
  'flexDirection': 'column',

});

class DraggableBox extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      items: this.props.data
    };
    
    console.log('props', props, this.state);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <StrictModeDroppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              className="dropable-list" 
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => 
                      React.cloneElement( this.props.children, {
                        refer: provided.innerRef,
                        draggableProps: provided.draggableProps,
                        dragHandleProps: provided.dragHandleProps,
                        style: getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        ),
                        data: item,
                      })
                      
                    // <div
                    //   ref={provided.innerRef}
                    //   {...provided.draggableProps}
                    //   {...provided.dragHandleProps}
                    //   style={getItemStyle(
                    //     snapshot.isDragging,
                    //     provided.draggableProps.style
                    //   )}
                    // >
                    //   {item.content}
                    // </div>
                  }
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </StrictModeDroppable>
      </DragDropContext>
    );
  }
}

export default DraggableBox;