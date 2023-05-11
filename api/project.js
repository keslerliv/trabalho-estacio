import axios from 'axios';

//https://nucleus-eti.atlassian.net/rest/api/3/search?jql=project=RDB&maxResults=2

const getProjectList = () => {
    let projectCode = 'PROJECT-123';

    let config = {
        headers: {
            Authorization: 'Bearer <acess token>',
            Accept: 'application/json'
        },
        params: {
            jql: `project=${projectCode}`,
            maxResults: 50
        }
    };

    axios.get(REACT_APP_BASE_URL + '/rest/api/3/search', config)
        .then(response => {
            return response;
        })
        .catch(error => {
            return response;
        });
}

export default getProjectList();