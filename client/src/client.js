const axios = require('axios');

const client = {
    getHobbies:function (success) {
        return axios.get('/api/hobbies')
        .then(res => {
          console.log('this.componentDidMount')
          this.setState({hobbies: res.data});
        }
        )
            .then(success);
    },

    saveHobby:function(data) {
        return fetch('/api/hobbies', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }).then(this.checkStatus);
    },

    deleteHobby:function(data) {
        return fetch('/api/hobbies', {
            method: 'delete',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }).then(this.checkStatus);
    },

    checkStatus : function(response){
        if  (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            // const error = new Error(`HTTP Error ${response.statusText}`);
            // error.status = response.statusText;
            // error.response = response;
            console.log('error');
            // throw error;
        }
    },
};
export default client;