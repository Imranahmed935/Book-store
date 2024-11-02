const getStoredData = ()=>{
    const data = localStorage.getItem('list');
    if(data){
      const dataList = JSON.parse(data);
        return dataList;
    }else{
        return [];
    } 
}

const saveDataList1 = (id)=>{
    const storedData = getStoredData();
    if(storedData.includes(id)){
        console.log(id, 'hello')
    }
    else{
        storedData.push(id);
        const value = JSON.stringify(storedData);
        localStorage.setItem('list', value)
    }
}

export {saveDataList1}
