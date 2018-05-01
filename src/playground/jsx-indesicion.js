console.log('App.js is running');

let app = {
        title: 'Indecision App',
        subtitle: 'Put your life in the hands of a computer',
        options: []
    },
    onFormSubmit = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value;

        if(option) {
            app.options.push(option);
            e.target.elements.option.value = "";
            renderTemplate();
        }
    },
    onRemoveAll = () => {
        app.options = [];
        renderTemplate();
    },
    onMakeDecision = () => {
        const randomNum = Math.floor(Math.random() * app.options.length),
              option = app.options[randomNum];
        
        alert(option);
    },
    appRoot = document.getElementById("app");    
//babel src\app.js --out-file=public\scripts\app.js --presets=env,react --watch
//live-server public
const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options": "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove all</button>
            <ol>
            {
                app.options.map((item, index) => <li key={++index}>{item}</li>)
            }  
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot);
};
    
renderTemplate();