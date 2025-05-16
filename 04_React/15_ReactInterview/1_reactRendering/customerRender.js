{/* 

<div class="container"> 
    <h1>this is</h1>  
    <p class="paragraph">I am -> "I am <1 Clicks> from" 
       <button>1 clicks</button>
       from 
    </p>
</div> 

*/}


const obj =
{
    type: 'div',
    props: {
        class: "container",
        children: [
            {
                type: 'h1',
                props: {
                    children: ' this is '
                }
            },
            {
                type: 'p',
                props: {
                    class: 'paragraph',
                    children: [
                        ' I am ',
                        {
                            type: (props) => ({
                                type: "button", props:
                                    { children: props.counter + "Clicks" }
                            }),
                            props: { counter: 1 }
                        }
                        ,
                        ' from'
                    ]
                }
            }
        ]
    }
}

function render(obj) {

}

document.addEventListener("DOMContentLoaded", function () {
    const rootElement = document.querySelector("#root");
    const wholeApp = render(obj);
    console.log("Whole App: ", wholeApp);
    rootElement.appendChild(wholeApp);
});


