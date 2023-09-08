
/*

        <div id = "parent">
            <div id = "child1">
                <h1>"This is a h1 tag"</h1>
                <h2>"This is a h2 tag"</h2>
            </div>

            <div id = "child2">
                <h1>"This is a h1 tag"</h1>
                <h2>"This is a h2 tag"</h2>
            </div>

        <div>




*/




const parent  = React.createElement("div", {id : "parent"}, 
    
[React.createElement("div", {id : "child1"}, [React.createElement("h1", {}, "This is a h1 tag lavde"), React.createElement("h2", {}, "This is a h2 tag")]),

React.createElement("div", {id : "child2"}, [React.createElement("h1", {}, "This is a h1 tag"), React.createElement("h2", {}, "This is a h2 tag")])
]

)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)