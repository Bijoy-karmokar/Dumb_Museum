const getData = (key)=>{
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
}

const saveData =(key,ideas)=>{
    localStorage.setItem(key,JSON.stringify(ideas));
}

export const getWantedDataId =()=> getData('wantedData');
export const isWantedIdeas =(id)=> getWantedDataId().includes(id);
export const addWantedIdea = (id)=>{
     const idea = getWantedDataId();
     if(!isWantedIdeas(id)){
        idea.push(id);
        saveData('wantedData',idea);
     }
}
export const getUnwantedDataId =()=> getData('unWantedData');
export const isunWantedIdeas =(id)=> getUnwantedDataId().includes(id);
export const addunWantedIdea = (id)=>{
     const idea = getUnwantedDataId();
     if(!isunWantedIdeas(id)){
        idea.push(id);
        saveData('unWantedData',idea);
     }
}