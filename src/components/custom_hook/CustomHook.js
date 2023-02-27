
export const dropDownResult = (selectedlist, selectedvalue) => {
    var checkenvironment;
    if(selectedvalue){
        if(selectedlist.indexOf('all') === -1){
            selectedlist.map((env_data) => {
                checkenvironment = checkenvironment ? eval(checkenvironment, selectedvalue.toLowerCase() === env_data.toLowerCase()) : eval(selectedvalue.toLowerCase() === env_data.toLowerCase());
            })   
        }
    }
    return checkenvironment;
}

export const titleCase = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

export const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const nFormatter = (num) => {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'g';
     }
     if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
     }
     if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
     }
    return Math.sign(num)*Math.abs(num);
}

export const searchMenuList = (e,setnewlist,oldlist) => {
    if(e.target.value){
        const applist = oldlist.filter(item => item.toLowerCase().indexOf(e.target.value) > -1);
        if(applist.length > 0){
            setnewlist(applist);
        }else{
            setnewlist([]);
        }  
    }else{
        setnewlist(oldlist);
    }  
}