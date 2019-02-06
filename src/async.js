export async function hideBoxes(element, arrayChild) {
    for (const child of arrayChild) {
      if(element.id !== child.id){
        await child.classList.toggle('in-active');
      }else {
        await element.classList.toggle('active');
      }
    }
}

export async function showBoxes(component) {
    switch (component) {
        case "about": 
            const arrary = [];
            for(let i = 0; i !==12; i++){
                arrary.push(document.getElementById(`${i}`))
            };
            for (const child of arrary){
                if(child.id !== "1") {
                    await child.classList.toggle('in-active');
                }else {
                    await child.classList.toggle('active');
                }
            }
            break;
        case "project":
            console.log("project");
            break;
        case "contact":
            console.log("contact");
            break;
        default:
            console.log("default");
            break;
    }
}