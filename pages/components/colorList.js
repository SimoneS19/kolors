import ColorShow from './colorShow';


function ColorList({ colorS }) {
    const renderedColors = colorS.map((color) => {
        return <ColorShow key={color.id} Color={color} />;
    });

    return (
        <div>
            {renderedColors}
            {/* ColorList: {colorS.length} */}
        </div>
    );
}

export default ColorList;