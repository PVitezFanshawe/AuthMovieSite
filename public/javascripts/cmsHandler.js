(()=>{
    console.log('(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ');

    let addData = document.querySelector('.add-data'),
        targetForm = document.querySelector('form');


    function addRecord(e){
        e.preventDefault();
        
        const formData = new FormData(targetForm);
        
        strData = {};

        for (var [key, value] of formData.entries()){
            console.log(key, value);

            strData[key] = value;
        }

        //run a fetch call
        let url = 'api/';
        fetch(url, {
            method: 'post',
            headers: {
                'Accept' : 'application/json, text-plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(strData)
        })
        .then((resp) => resp.json())
        .then((data) => {
        console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    addData.addEventListener('click', addRecord);
})();

