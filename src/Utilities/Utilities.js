const getStoredData = ()=>{
    const data = localStorage.getItem('list-item');
    if(data){
      const dataList = JSON.parse(data);
        return dataList;
    }else{
        return [];
    } 
}

const saveDataList = (id)=>{
    const storedData = getStoredData();
    if(storedData.includes(id)){
        console.log(id, 'hello')
    }
    else{
        storedData.push(id);
        const value = JSON.stringify(storedData);
        localStorage.setItem('list-item', value)
    }
}

export {saveDataList, getStoredData}
