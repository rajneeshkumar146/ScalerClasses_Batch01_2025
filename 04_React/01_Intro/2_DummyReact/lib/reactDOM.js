let ReactDom = {};

function render(component, root) {
    let optimizedDOM = react(component);
    console.log("Rendering to actual DOM");
    console.log(optimizedDOM)
    root.innerHTML = optimizedDOM;
}

ReactDom.render = render;